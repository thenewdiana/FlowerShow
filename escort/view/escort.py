# coding: utf-8
import datetime
import sys

sys.path.append("..")

from flask import Flask, request, render_template, redirect, url_for, make_response
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView

from wechat_sdk.exceptions import ParseError

from model.base import db_session
from model.order import Order
from wechat import wechat

app = Flask(__name__)
admin = Admin(app)
admin.add_view(ModelView(Order, db_session))
app.secret_key = 'super secret key'
app.config['SESSION_TYPE'] = 'filesystem'

@app.before_request
def pre():
    pass


@app.route('/')
def hello_world():
    return 'Hello escort!'


@app.route('/create_menu', methods=['GET'])
def create_menu():
    menu = {
        "button": [
            {
                "name": "选择服务",
                "sub_button": [
                    {
                        "type": "view",
                        "name": "校园镖局",
                        "url": "http://seize.space"
                    },
                    {
                        "type": "view",
                        "name": "下载客户端",
                        "url": "http://seize.space"
                    },
                ]
            },

            {
                "name": "个人中心",
                "type": "view",
                "url": "http://seize.space"
            }
        ]
    }
    return str(wechat.create_menu(menu_data=menu))


def subscribe(key, ticket):
    pass


def scan(key, ticket):
    pass


def click(key):
    return url_for('hello_world')


def view(key):
    pass


def location(latitude, longtitude, prescision):
    pass


@app.route('/wexin', methods=['GET', 'POST', 'OPTION'])
def wexin():
    signature = request.args.get('signature')
    timestamp = request.args.get('timestamp')
    nonce = request.args.get('nonce')
    echostr = request.args.get('echostr')
    if wechat.check_signature(signature, timestamp, nonce):
        if echostr != '':
            return echostr
        else:
            try:
                body = request.data
                wechat.parse_data(body)
                if isinstance(wechat.message, wechat.EventMessage):
                    if wechat.message.type == 'subscribe':  # 关注事件(包括普通关注事件和扫描二维码造成的关注事件)
                        key = wechat.message.key  # 对应于 XML 中的 EventKey (普通关注事件时此值为 None)
                        ticket = wechat.message.ticket  # 对应于 XML 中的 Ticket (普通关注事件时此值为 None)
                        subscribe(key, ticket)
                    elif wechat.message.type == 'unsubscribe':  # 取消关注事件（无可用私有信息）
                        pass
                    elif wechat.message.type == 'scan':  # 用户已关注时的二维码扫描事件
                        key = wechat.message.key  # 对应于 XML 中的 EventKey
                        ticket = wechat.message.ticket  # 对应于 XML 中的 Ticket
                        scan(key, ticket)
                    elif wechat.message.type == 'location':  # 上报地理位置事件
                        latitude = wechat.message.latitude  # 对应于 XML 中的 Latitude
                        longitude = wechat.message.longitude  # 对应于 XML 中的 Longitude
                        precision = wechat.message.precision  # 对应于 XML 中的 Precision
                        location(latitude, longitude, precision)
                    elif wechat.message.type == 'click':  # 自定义菜单点击事件
                        key = wechat.message.key  # 对应于 XML 中的 EventKey
                        click(key)
                    elif wechat.message.type == 'view':  # 自定义菜单跳转链接事件
                        key = wechat.message.key  # 对应于 XML 中的 EventKey
                        view(key)
                    elif wechat.message.type == 'templatesendjobfinish':  # 模板消息事件
                        status = wechat.message.status  # 对应于 XML 中的 Status
                    elif wechat.message.type in ['scancode_push', 'scancode_waitmsg', 'pic_sysphoto',
                                                 'pic_photo_or_album', 'pic_weixin', 'location_select']:  # 其他事件
                        key = wechat.message.key  # 对应于 XML 中的 EventKey
                        # code goes here
            except ParseError:
                print 'Invalid Body Text'
    else:
        return 'you are not wechat,fuck off!'


@app.route('/make_a_order', methods=['POST', 'GET'])
def make_a_order():
    """"
    version:0.0.1
    创建一个订单,必须的字段
    title,describe,money,location_x,location_y
    """

    if request.method == 'POST':
        # 从请求表单中创建变量
        title = request.form['title']
        describe = request.form['describe']
        money = request.form['money']
        address = request.form['address']
        location_x = request.form['location_x']
        location_y = request.form['location_y']
        progress = Order.Progeress_Enum.on
        # 简单的订单创建逻辑,没有考虑恶意刷单,用户验证情况
        order = Order(title=title, describe=describe, money=money, address=address,
                      create_at=datetime.datetime.now(),
                      send_time=None, paid_at=None,
                      location_x=location_x, location_y=location_y, progress=progress)
        db_session.add(order)
        db_session.commit()
        return render_template('result_create_order.html')
    if request.method == 'GET':
        return render_template('create_order.html')


if __name__ == '__main__':
    app.run(debug=True)
