from django.db import models
from registration.models import User


class Movie(models.Model):
    year = models.PositiveSmallIntegerField()
    length = models.PositiveSmallIntegerField()
    title = models.CharField(max_length=275)
    genre = models.ForeignKey(Genre)


class Genre(models.Model):
    genre_type = models.CharField(max_length=255)


class Rating(models.Model):
    movie = models.ForeignKey(Movie)
    user = models.ForeignKey(User)
    match = models.BooleanField(default=False)

class NewUser(User):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=75)

