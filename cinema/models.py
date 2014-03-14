from django.db import models
from registration.models import User
from django import forms
from registration.forms import RegistrationForm

class Genre(models.Model):
    genre_type = models.CharField(max_length=255) # put in genre integer...win
    genre_api_id = models.PositiveSmallIntegerField()

    def __unicode__(self):
        return self.genre_type

class Movie(models.Model):
    year = models.CharField(max_length=275)
    length = models.PositiveSmallIntegerField(null=True)
    title = models.CharField(max_length=275)
    genre = models.ForeignKey(Genre)
    poster = models.ImageField(upload_to='film_posters', default='cinema/static/img/no_poster.jpg')
    trailer = models.CharField(max_length=500, null=True)

    def __unicode__(self):
        return self.title

class Rating(models.Model):
    movie = models.ForeignKey(Movie)
    user = models.ForeignKey(User)
    match = models.BooleanField(default=False)

class UniqueForm(RegistrationForm):
    first_name = forms.CharField(widget=forms.TextInput, label="first_name")
    last_name = forms.CharField(widget=forms.TextInput, label="first_name")

