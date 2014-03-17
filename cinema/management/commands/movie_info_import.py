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

    # using the api i match movies to their corresponding genre id's
    def get_movies_for_genre(self, genre):
        data = requests.get("https://api.themoviedb.org/3/genre/" + str(genre.genre_api_id) + "/movies?api_key=b5c36e93a1666d97327676b31e503755")
        data = data.json()

        # calling the process_results function
        self.process_results(data, genre)

        # Handling pagination issues, ie allowing the url to go through all the pages for a specific genre
        for page in range(1, data["total_pages"]):
            url = requests.get("https://api.themoviedb.org/3/genre/" + str(genre.genre_api_id) + "/movies?api_key=b5c36e93a1666d97327676b31e503755&page=" + str(page))
            # pass results to process results
            data = url.json()

            self.process_results(data, genre)

    def process_results(self, data, genre):
        movies = data["results"]

        # populating the db using the data from our api call
        for movie in movies:
            print movie
            Movie.objects.create(
                genre=genre,
                year=movie['release_date'],
                title=movie['title'],
                poster=movie['poster_path']

            )


