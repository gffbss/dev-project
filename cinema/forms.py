
__author__ = 'geoffreyboss'
from django import forms
from registration.forms import RegistrationForm


class UniqueForm(RegistrationForm):
    first_name = forms.CharField(widget=forms.TextInput, label="first_name")
    last_name = forms.CharField(widget=forms.TextInput, label="first_name")