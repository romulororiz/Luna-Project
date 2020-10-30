from django.contrib.auth import get_user_model
from django_countries import Countries
from rest_framework import serializers

from apps.restaurants.models import Restaurant
from apps.reviews.models import Review
from apps.users.serializers import UserSerializer

User = get_user_model()


class SmallReviewSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    review_counter = serializers.SerializerMethodField()

    class Meta:
        model = Review
        fields = "__all__"


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
    review = SmallReviewSerializer(read_only=True)
    #country = CountrySerializer(allow_blank=True)
    user = SmallAuthor(read_only=True)
    reviews = serializers.SerializerMethodField()
    average_rating = serializers.SerializerMethodField()

    def get_reviews(self, restaurant):

        return restaurant.fk_reviews.all().count()

    def get_average_rating(self, restaurant):
        count = restaurant.fk_reviews.all().count()
        aver = restaurant.fk_reviews.all()
        sum = 0
        for rev in aver:
            sum += rev.rating
        if sum == 0:
            return 0
        else:
            return sum/count

    class Meta:
        model = Restaurant
        fields = "__all__"
        read_only_fields = ['review']


class RestaurantSmallSerializer(serializers.ModelSerializer):
    review = SmallReviewSerializer(read_only=True)
    country = CountrySerializer(allow_blank=True)
    user = SmallAuthor(read_only=True)

    class Meta:
        model = Restaurant
        fields = "__all__"
        read_only_fields = ['review_counter']


class TopRestaurantSerializer(serializers.ModelSerializer):
    user = SmallAuthor(read_only=True)
    reviews = serializers.SerializerMethodField()
    average_rating = serializers.SerializerMethodField()

    def get_reviews(self, restaurant):
        return restaurant.fk_reviews.all().count()

    def get_average_rating(self, restaurant):
        count = restaurant.fk_reviews.all().count()
        aver = restaurant.fk_reviews.all()
        sum = 0
        for rev in aver:
            sum += rev.rating
        if sum == 0:
            return 0
        else:
            return sum/count


    class Meta:
        model = Restaurant
        fields = '__all__'
        read_only_fields = ['reviews', 'average_rating']