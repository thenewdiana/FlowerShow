# coding: utf-8
import datetime
from flask import Flask, request, render_template
from model.base import db_session

from model.order import Order
import wechat

app = Flask(__name__)


@app.before_request
def pre():
    pass


@app.route('/')
def hello_world():
    return 'Hello escort!'


@app.route('/check_signature')
def check_signature():
    token = request['token']
    signature = request['signature']
    timestamp = request['timestamp']
    nonce = request['nonce']
    return wechat.check_signature(token, signature, timestamp, nonce)


@app.route('/make_a_order', methods=['POST', 'GET'])
@wechat.oauth
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
        location_x = request.form['location_x']
        location_y = request.form['location_y']
        progress = Order.Progeress_Enum.on
        # 简单的订单创建逻辑,没有考虑恶意刷单,用户验证情况
        order = Order(title=title, describe=describe, money=money,
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
