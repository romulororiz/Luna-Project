from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from django.db.models import Avg
from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListAPIView, CreateAPIView, RetrieveAPIView

from apps.restaurants.models import Restaurant
from apps.restaurants.serializers import RestaurantSerializer, RestaurantSmallSerializer, TopRestaurantSerializer

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
        send_mail(
            'New Restaurant bro',
            'You made a new restaurant',
            'LunaCapricornSup@gmail.com',
            ['markusgig@gmail.com'],
            fail_silently=False,
        )
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


class ListBestRestaurantAPIView(ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = []

    def get_queryset(self):
        top = Restaurant.objects.annotate(average_rating=Avg('fk_reviews__rating')).order_by('-average_rating').all()[:4]
        return top