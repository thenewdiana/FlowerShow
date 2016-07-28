# coding: utf-8
import datetime
import json
import sys

from flask.ext.admin import AdminIndexView
from requests import Response

sys.path.append("..")
from flask import Flask, request, render_template, redirect, url_for, make_response, jsonify
from flask_admin import Admin, BaseView, expose
from flask_admin.contrib.sqla import ModelView
from flask_httpauth import HTTPBasicAuth

from model.Position import Position
from model.base import init_db, db_session
from model.Topic import Topic
from model.Escort import Escort
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


@app.route('/send_bd', methods=['POST', 'GET'])
def send_bd():
    """"
    version:0.0.1
    创建一个镖单
    """
    if request.method == 'POST':
        # 从请求json中创建变量
        data = request.get_json()
        topic = data['topic']
        time = data['time']
        name = data['name']
        phone = data['phone']
        address = data['address']
        information = data['information']
        fee = data['fee']
        tip = data['tip']
        pay_index = data['pay_index']
        progress = Escort.Progress_Enum.on
        print isinstance(fee, tuple)
        print fee
        print isinstance(tip, tuple)
        print tip
        print isinstance(pay_index, tuple)
        print pay_index
        # FIXME 未做任何判断直接生成escort
        escort = Escort(topic=topic, name=name,
                        phone=phone, address=address,
                        time=time,
                        information=information, fee=fee,
                        tip=tip, pay_index=pay_index, progress=progress)
        db_session.add(escort)
        db_session.commit()
        return jsonify({'data': 'ok'})
    if request.method == 'GET':
        return render_template('send_bd.html')


@app.route('/my_bd', methods=['GET', 'POST'])
def my_bd():
    if request.method == "GET":
        return render_template('my_bd.html')


if __name__ == '__main__':
    app.run(debug=True)
