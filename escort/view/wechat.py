# coding: utf-8
import functools
import os

import sys
from flask import request, redirect
from requests import session
from wechat_sdk import WechatConf, WechatBasic
from werkzeug.exceptions import abort

sys.path.append("..")

token = "flowersandgrassmakesunine"
app_id = "wx74f11559acca4843"
app_secret = "049c8dfaabc0ba862d11d6b1bba8c264"
encoding_aes_key = "aI3oNaHcRncU2mIRsAfNb9sSz1KyfT2DVa3nSG9rxws"

conf = WechatConf(
    token=token,
    appid=app_id,
    appsecret=app_secret,
    encrypt_mode='safe',
    # 可选项：normal/compatible/safe，分别对应于 明文/兼容/安全 模式
    encoding_aes_key=encoding_aes_key
    # 如果传入此值则必须保证同时传入 token, appid
)

wechat = WechatBasic(conf=conf)
