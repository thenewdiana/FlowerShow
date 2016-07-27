# coding: utf-8
import datetime
import sys

from flask.ext.admin import AdminIndexView


sys.path.append("..")
from flask import Flask, request, render_template, redirect, url_for, make_response, jsonify
from flask_admin import Admin, BaseView, expose
from flask_admin.contrib.sqla import ModelView
from flask_httpauth import HTTPBasicAuth

from model.Position import Position
from model.base import init_db,db_session
from model.Topic import Topic
from model.order import Escort
import wechat

app = Flask(__name__)
auth = HTTPBasicAuth()

app.secret_key = 'super secret key'
app.config['SESSION_TYPE'] = 'filesystem'

users = {
    'taylor': '222',
}


class MyHomeView(AdminIndexView):
    @expose('/')
    @auth.login_required
    def index(self):
        return self.render('admin/index.html')


admin = Admin(app, index_view=MyHomeView())
admin.add_view(ModelView(Escort, db_session))
admin.add_view(ModelView(Topic, db_session))
admin.add_view(ModelView(Position, db_session))


@app.before_first_request
def init_database():
    init_db()


@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()


@auth.get_password
def get_password(username):
    if username in users:
        return users.get(username)
    return None


@app.route('/')
@auth.login_required
def hello_world():
    return 'hi'


@app.route('/topic')
def topic_list():
    items = db_session.query(Topic).all()
    return render_template('topic_list.html', items=items)


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
