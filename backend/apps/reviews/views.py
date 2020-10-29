from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from rest_framework import status
from rest_framework.generics import CreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView

from apps.reviews.serielizers import ReviewSerializer

from apps.reviews.models import Review
from rest_framework.response import Response

from apps.reviews.permissions import IsAuthorOrReadOnly

User = get_user_model()


class ListAllReviewsAPIView(ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = []


class CreateReviewAPIView(CreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'restaurant_id'

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=False)
        serializer.save(user=request.user, restaurant_id=kwargs['restaurant_id'])
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class RetrieveUpdateDestroyReviewAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthorOrReadOnly]
    lookup_url_kwarg = 'review_id'

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset().filter(id=kwargs['review_id'])
        detailed_serializer = ReviewSerializer(queryset, many=True)
        return Response(detailed_serializer.data)