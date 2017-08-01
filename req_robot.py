import urllib2
import thread

def request():
    counter = 1
    while(True):
        print(urllib2.urlopen("http://35.196.207.63/"+str(counter)).read())
        counter += 1

request()
