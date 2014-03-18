from django.conf import settings
from tastypie.authorization import Authorization
from tastypie.bundle import Bundle
from tastypie.constants import ALL_WITH_RELATIONS
from tastypie.fields import ToManyField, CharField, ToOneField
from tastypie.resources import ModelResource, Resource
from cinema.models import Genre, Movie, Rating, UniqueForm # Old Stuff = Student, Class, StudentProject


class BareMovieResource(ModelResource):
    class Meta:
        queryset = Movie.objects.all()
        resource_name = "bare_movie"


class GenreResource(ModelResource):
    movies = ToManyField(BareMovieResource, 'movies', full=True, null=True)

    class Meta:
        allowed_methods = ['get']
        queryset = Genre.objects.all()
        resource_name = "genre"
        authorization = Authorization()
        always_return_date = True

class MovieResource(ModelResource):
    genre = ToOneField(GenreResource, 'genre', full=True)

    class Meta:
        allowed_methods = ['get']
        queryset = Movie.objects.all()
        resource_name = "movie"
        authorization = Authorization()
        always_return_date = True
        filtering = {
            "genre": ALL_WITH_RELATIONS
        }


class RatingResource(ModelResource):
    movies = ToManyField(MovieResource, 'movies', full=True, null=True)

    class Meta:
        allowed_methods = ['get', 'post']
        always_return_data = True
        queryset = Movie.objects.all()
        resource_name = "class"
        authorization = Authorization()
        filtering = {
            'students': ALL_WITH_RELATIONS,
            'title': ['contains', 'icontains'],
            'start_date': ['gt',]
        }


######################
# Non-Model Resource #
######################

class Version(object):
    def __init__(self, identifier=None):
        self.identifier = identifier


class VersionResource(Resource):
    identifier = CharField(attribute='identifier')

    class Meta:
        resource_name = 'version'
        allowed_methods = ['get']
        object_class = Version
        include_resource_uri = False

    def detail_uri_kwargs(self, bundle_or_obj):
        kwargs = {}

        if isinstance(bundle_or_obj, Bundle):
            kwargs['pk'] = bundle_or_obj.obj.identifier
        else:
            kwargs['pk'] = bundle_or_obj['identifier']

        return kwargs

    def get_object_list(self, bundle, **kwargs):
        return [Version(identifier=settings.VERSION)]

    def obj_get_list(self, bundle, **kwargs):
        return self.get_object_list(bundle, **kwargs)