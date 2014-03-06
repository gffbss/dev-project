# Create your views here.
import csv
from django.shortcuts import render
import requests
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.core.cache import cache
import time


def home(request):
    return render(request, "index.html")

# The decorator helps authenticate users in a DRY way
@login_required
def special_page(request):
    data = {}
    return render(request, "index.html", data)

# Testing import of my own data
def get_movie_data(request):
    with open("cinema/static/resources/film.csv", "rU") as f:
        reader = csv.reader(f)
        for row in reader:
            Movie.objects.create(year=row[0], length=row[1], title=row[2], genre=row[3])

def movie_choice(request):
    return render(request, 'match.html')

# Get the time
def get_the_time(request):
    local_time = time.localtime(time.time())
    the_time = local_time.tm_hour,
    data = {'the_time':the_time}
    return render(request, "time.html", data)

def api_test(request):
    url = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=tt3r5kkzr67r2h7aw4spzp3x&q=comedy&page_limit=100&page=5"

    # Checks first to see if the data exists in the cache. If not it will make the call
    movie_data = cache.get(url)
    if not movie_data:
        data = requests.get(url)
        cache.set(url, data, 300)
        movie_data = cache.get(url)

    data = {"movie_data": movie_data}

    return render(request, 'api-test.html', data)