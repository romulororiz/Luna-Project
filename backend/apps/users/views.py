from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView

from apps.users.serializers import UserSerializer

User = get_user_model()


class ListUsers(ListAPIView):
    """
    List all Users.
    """
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = []


class ListMe(ListAPIView):
    """
    List all Users.
    """
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = []
