from django.contrib.auth import get_user_model
from rest_framework import filters
from rest_framework.generics import RetrieveUpdateAPIView, ListAPIView, RetrieveAPIView

from apps.users.serializers import UserSerializer

User = get_user_model()


#list all users: api/users/list/
class ListUsersAPIView(ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = []


#list patch logged in user: api/me/
class RetrieveUpdateMeAPIView(RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get_object(self):
        return self.request.user

#Retrieve certain user: api/users/id
class RetrieveCertainUserAPIView(RetrieveAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = []
    lookup_field = 'id'


class SearchUserAPIView(RetrieveAPIView):
    search_fields = ('username', 'last_name', 'first_name', 'email')
    filter_backends = (filters.SearchFilter,)
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = []