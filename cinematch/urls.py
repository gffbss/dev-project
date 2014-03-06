from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Main page urls
    url(r'^$', 'cinema.views.home', name='index'),
    url(r'^cinema/match/$', 'cinema.views.movie_choice', name='movie_choice'),
    url(r'^time/$', 'cinema.views.get_the_time', name='get_the_time'),


    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),

    # The Django Registration library login
    url(r'^accounts/', include('registration.backends.default.urls')),




)
