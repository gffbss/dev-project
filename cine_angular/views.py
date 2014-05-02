import json
from urllib2 import urlopen
from django.http import HttpResponse
from django.shortcuts import render, render_to_response
import requests


def angular(request):
    return render(request, "base-angular.html")

def testHover(request):
    return render(request, "hover-choice.html")

def get_apple_link(request):
    movie_title = request.GET.get('movie_title')
    resp = requests.get("https://itunes.apple.com/search?term={0}&entity=movie".format(movie_title))
    apple_movie_link = resp.json()
    # Have to limit the response to the first value
    grab_data = apple_movie_link['results'][0]
    url = grab_data['trackViewUrl']

    data = {"url":url}
    # response = render_to_response(
    #     "api-test.html",
    #     data
    # )

    return HttpResponse(json.dumps(data), mimetype='application/json')