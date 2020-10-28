from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from rest_framework import status
from rest_framework.generics import CreateAPIView, RetrieveUpdateDestroyAPIView

from apps.reviews.serielizers import ReviewSerializer

from apps.reviews.models import Review
from rest_framework.response import Response

User = get_user_model()


class CreateReviewAPIView(CreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = []
    lookup_url_kwarg = 'restaurant_id'

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        serializer.save(restaurant=kwargs['restaurant_id'])
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class RetrieveUpdateDestroyReviewAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = []
    lookup_url_kwarg = 'review_id'

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset().filter(id=kwargs['review_id'])
        detailed_serializer = ReviewSerializer(queryset, many=True)
        return Response(detailed_serializer.data)