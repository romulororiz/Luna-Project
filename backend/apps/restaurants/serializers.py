from django.contrib.auth import get_user_model
from django_countries import Countries
from rest_framework import serializers

from apps.restaurants.models import Restaurant


User = get_user_model()


class SmallAuthor(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "restaurants"]


class CountrySerializer(serializers.ChoiceField):
    def __init__(self, **kwargs):
        super(CountrySerializer, self).__init__(choices=Countries())

    def to_representation(self, value):
        if value in ('', None):
            return ''  # normally here it would return value. which is Country(u'') and not serialiable
        return super(CountrySerializer, self).to_representation(value)


class RestaurantSerializer(serializers.ModelSerializer):
    #likes_counter = serializers.SerializerMethodField
    country = CountrySerializer(allow_blank=True)
    user = SmallAuthor(read_only=True)

    #def get_likes_counter(self, post):
        #return post.fans_of_post.all().count()
    class Meta:
        model = Restaurant
        fields = "__all__"


class RestaurantSmallSerializer(serializers.ModelSerializer):
    country = CountrySerializer(allow_blank=True)
    user = SmallAuthor(read_only=True)

    class Meta:
        model = Restaurant
        fields = "__all__"


class MostLikedRestaurantSerializer(serializers.ModelSerializer):

    class Meta:
        model = Restaurant
        fields = '__all__'