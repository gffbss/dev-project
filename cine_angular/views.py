import json
from urllib2 import urlopen
from django.http import HttpResponse
from django.shortcuts import render, render_to_response
import requests


def angular(request):
    return render(request, "base-angular.html")


# def get_apple_link(request, movie):
#     resp = requests.get("https://itunes.apple.com/search?term=" + movie + "&entity=movie")
#     apple_movie_link = resp.json()
#     url = apple_movie_link['trackViewUrl']
#
#     data = {"movie":movie, "url":url}
#     response = render_to_response(
#         "api-test.html",
#         data
#     )
#
#     return response

def get_apple_link(request):
    movie_title = request.GET.get('movie_title')
    resp = requests.get("https://itunes.apple.com/search?term={0}&entity=movie".format(movie_title))
    apple_movie_link = resp.json()
    grab_data = apple_movie_link['results'][0]
    url = grab_data['trackViewUrl']

    data = {"url":url}
    # response = render_to_response(
    #     "api-test.html",
    #     data
    # )

    return HttpResponse(json.dumps(data), mimetype='application/json')