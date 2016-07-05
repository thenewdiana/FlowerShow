# coding: utf-8
import functools

from flask import request, redirect
from requests import session
from wechatpy import WeChatComponent
from wechatpy.enterprise import WeChatClient
from wechatpy.utils import check_signature
from wechatpy.exceptions import InvalidSignatureException
from werkzeug.exceptions import abort

app_id = "wx74f11559acca4843"
app_secret = "049c8dfaabc0ba862d11d6b1bba8c264"
component_token = ""
encoding_aes_key = ""
component = WeChatComponent(app_id, app_secret, component_token, encoding_aes_key)

client = WeChatClient()


def oauth(method):
    @functools.wraps(method)
    def warpper(*args, **kwargs):
        code = request.args.get('code', None)
        url = client.oauth.authorize_url(request.url)

        if code:
            try:
                user_info = client.oauth.get_user_info(code)
            except Exception as e:
                print e.errmsg, e.errcode
                # 这里需要处理请求里包含的 code 无效的情况
                abort(403)
            else:
                session['user_info'] = user_info
        else:
            return redirect(url)

        return method(*args, **kwargs)
    return warpper