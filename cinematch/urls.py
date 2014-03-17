from django.conf.urls import patterns, include, url
from registration.backends.default.views import RegistrationView
from tastypie.api import Api
from cinema.api.resources import MovieResource, GenreResource
from cinema.forms import UniqueForm

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

v1_api = Api(api_name="v1")
v1_api.register(MovieResource())
v1_api.register(GenreResource())
# v1_api.register(RatingResource())
#
# v1_api.register(MediaResource())


urlpatterns = patterns('',
    # Main page urls
    url(r'^$', 'cinema.views.home', name='index'),
    url(r'^random/$', 'cinema.views.random', name='random'),
    url(r'^time/$', 'cinema.views.get_the_time', name='get_the_time'),

    # Old Version url testing
    url(r'^old_index/$', 'cinema.views.old_index', name='old_index'),

    # Api
    url(r'^api/', include(v1_api.urls)),

    # Angular urls
    url(r'^moods/$', 'cine_angular.views.angular', name="angular"),

    # Ajax test urls
    url(r'^choices/$', 'cinema.views.choice_change_ajax', name='choice_change_ajax'),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),

    # The Django Registration library login
    url(r'^accounts/', include('registration.backends.default.urls')),
    # url(r'^accounts/', register, {'backend':'registration.backends.default.urls', 'form_class':UniqueForm)),


    # This is what I think I want but it is not quite working
    # url(r'^accounts/', RegistrationView.as_view(form_class = UniqueForm))),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
)