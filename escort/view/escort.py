# coding: utf-8
import datetime
import sys

sys.path.append("..")
from flask import Flask, request, render_template, redirect, url_for, make_response, jsonify
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from flask_httpauth import HTTPBasicAuth

from model.Position import Position
from model.base import db_session
from model.Topic import Topic
from model.order import Escort
import wechat

app = Flask(__name__)
auth = HTTPBasicAuth()
admin = Admin(app)
admin.add_view(ModelView(Escort, db_session))
admin.add_view(ModelView(Topic, db_session))
admin.add_view(ModelView(Position, db_session))
app.secret_key = 'super secret key'
app.config['SESSION_TYPE'] = 'filesystem'

users = {
    'taylor': 'taylor',
}


@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()


@auth.get_password
def get_password(username):
    if username in users:
        return users.get(username)
    return None


@app.route('/admin')
@auth.login_required
def admin_view():
    pass


@app.route('/')
def hello_world():
    return 'Hello escort!'


@app.route('/topic')
def topic_list():
    json = []
    for title in db_session.query(Topic).all():
        json.append(title.serializer())
    return jsonify({"data": json})


@app.route('/position')
def position():
    json = []
    for posi in db_session.query(Position).all():
        json.append(posi.serializer())
    return jsonify({"data": json})


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
                        "url": "http://seize.space:8085/"
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
    # return str(wechat.create_menu(menu_data=menu))


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
    try:
        wechat.check_signature(wechat.token, signature, timestamp, nonce)
        if echostr != '':
            return echostr
        else:
            # code goes here
            pass
    except wechat.InvalidSignatureException:
        return 'you are not wechat ,fuck off'


@app.route('/make_escort', methods=['POST', 'GET'])
def make_a_order():
    """"
    version:0.0.1
    创建一个镖单
    """

    if request.method == 'POST':
        # 从请求json中创建变量
        title = request.json['title']
        describe = request.json['describe']
        money = request.json['money']
        address = request.json['address']
        progress = Escort.Progeress_Enum.on
        # 简单的订单创建逻辑,没有考虑恶意刷单,用户验证情况
        # order = Order(title=title, describe=describe, money=money, address=address,
        #               create_at=datetime.datetime.now(),
        #               send_time=None, paid_at=None,
        #               location_x=location_x, location_y=location_y, progress=progress)
        # db_session.add(order)
        db_session.commit()
        return render_template('result_create_order.html')
    if request.method == 'GET':
        return render_template('create_order.html')


if __name__ == '__main__':
    app.run(debug=True)
