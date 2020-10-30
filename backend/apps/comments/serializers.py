from django.contrib.auth import get_user_model
from rest_framework import serializers

from apps.comments.models import Comment
from apps.users.serializers import UserSerializer

from apps.reviews.models import Review

User = get_user_model()


class ReviewLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = "__all__"


class SmallUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username"]


class CommentSerializer(serializers.ModelSerializer):
    user = SmallUserSerializer(read_only=True)
    review = ReviewLinkSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = "__all__"