from django.contrib.auth import get_user_model
from rest_framework import serializers


User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    reviews = serializers.SerializerMethodField()

    def get_reviews(self, user):
        return user.fk_reviews.all().count()

    class Meta:
        model = User
        fields = '__all__'
