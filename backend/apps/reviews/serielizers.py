from django.contrib.auth import get_user_model
from rest_framework import serializers

from apps.reviews.models import Review
from apps.restaurants.serializers import User
from apps.restaurants.models import Restaurant

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        models = User
        fields = "__all__"

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        models = Restaurant
        fields = "__all__"


class ReviewSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    restaurant = RestaurantSerializer(read_only=True)

    class Meta:
        model = Review
        fields = "__all__"
