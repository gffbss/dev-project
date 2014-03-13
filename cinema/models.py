from django.db import models
from registration.models import User
from django import forms
from registration.forms import RegistrationForm

class Genre(models.Model):
    genre_type = models.CharField(max_length=255)

class Movie(models.Model):
    year = models.PositiveSmallIntegerField()
    length = models.PositiveSmallIntegerField()
    title = models.CharField(max_length=275)
    genre = models.ForeignKey(Genre)
    poster = models.ImageField(upload_to='film_posters', default='cinema/static/img/no_poster.jpg')
    trailer = models.CharField(max_length=500)

class Rating(models.Model):
    movie = models.ForeignKey(Movie)
    user = models.ForeignKey(User)
    match = models.BooleanField(default=False)

class UniqueForm(RegistrationForm):
    first_name = forms.CharField(widget=forms.TextInput, label="first_name")
    last_name = forms.CharField(widget=forms.TextInput, label="first_name")

