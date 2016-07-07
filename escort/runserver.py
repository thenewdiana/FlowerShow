# coding=utf-8
# !/usr/bin/python

from tornado.wsgi import WSGIContainer
from tornado.httpserver import HTTPServer
from tornado.ioloop import IOLoop
from view.escort import app

subs = 2

print 'server is starting...'
http_server = HTTPServer(WSGIContainer(app))
http_server.listen(80)
# print 'server starting ' + str(subs) + 'sub-process'
# http_server.start(subs)
print 'server is running'
IOLoop.instance().start()
print 'server is stop'
