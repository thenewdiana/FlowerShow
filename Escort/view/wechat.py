# coding: utf-8
import functools
import os

import sys
from wechatpy.exceptions import InvalidSignatureException
from wechatpy.utils import check_signature
sys.path.append("..")
token = "flowersandgrassmakesunine"
app_id = "wx74f11559acca4843"
app_secret = "049c8dfaabc0ba862d11d6b1bba8c264"
encoding_aes_key = "aI3oNaHcRncU2mIRsAfNb9sSz1KyfT2DVa3nSG9rxws"