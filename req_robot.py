import urllib2
import thread

def request():
    while(True):
        print(urllib2.urlopen("http://35.196.141.255/").read())

request()
