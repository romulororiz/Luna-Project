from django.contrib.auth import get_user_model
from rest_framework import serializers

from apps.reviews.models import Review
from apps.users.serializers import UserSerializer
from apps.restaurants.serializers import RestaurantSerializer

User = get_user_model()


class ReviewSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    restaurant = RestaurantSerializer(read_only=True)

    class Meta:
        model = Review
        fields = "__all__"
