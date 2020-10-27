from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListAPIView, CreateAPIView

from apps.restaurants.models import Restaurant
from apps.restaurants.serializers import RestaurantSerializer, RestaurantSmallSerializer

from apps.restaurants.permissions import IsAuthorOrReadOnly

User = get_user_model()


class ListRestaurantAPIView(ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = []


class CreateRestaurantAPIView(CreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = []

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class RetrieveUpdateDestroyRestaurantAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = [IsAuthorOrReadOnly]
    lookup_field = 'id'


class ListUserRestaurantAPIView(ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = []
    lookup_url_kwarg = 'user_id'

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset().filter(user_id=kwargs['user_id']).order_by("id")
        detailed_serializer = RestaurantSmallSerializer(queryset, many=True)
        return Response(detailed_serializer.data)


class ListRestaurantCategoryAPIView(ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = []
    lookup_url_kwarg = 'category_id'

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset().filter(category=kwargs['category_id'])
        detailed_serializer = RestaurantSmallSerializer(queryset, many=True)
        return Response(detailed_serializer.data)
