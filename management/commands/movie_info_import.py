import requests

__author__ = 'geoffreyboss'
from django.http import request
from django.core.management.base import BaseCommand
from cinema.models import Movie, Genre

#Special management command to do an initial data import from the API

class Command(BaseCommand):
    def handle(self, *args, **options):
        for genre in Genre.objects.all():
            self.get_movies_for_genre(genre)

    def get_movies_for_genre(self, genre):
        data = requests.get("https://api.themoviedb.org/3/genre/" + genre.genre_api_id + "/movies?api_key=b5c36e93a1666d97327676b31e503755")
        data = data.json()
        movies = data["results"]

        # populating the db using the data from our api call
        for movie in movies:
            Movie.objects.create(
                genre=genre,
                year=movie['release_date'],
                title=movie['title'],
                poster=movie['poster_path']

            )
