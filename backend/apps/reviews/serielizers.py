from django.contrib.auth import get_user_model
from rest_framework import serializers

from apps.reviews.models import Review
from apps.users.serializers import UserSerializer
from apps.restaurants.serializers import RestaurantSerializer
from apps.comments.serializers import CommentSerializer

User = get_user_model()



class ReviewSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    restaurant = RestaurantSerializer(read_only=True)
    #comments = CommentSerializer(read_only=True)
    comments = serializers.SerializerMethodField()

    def get_comments(self, review):
        return review.fk_comments.all().count()


    class Meta:
        model = Review
        fields = "__all__"
