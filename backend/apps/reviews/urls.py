from django.urls import path

from apps.reviews.views import CreateReviewAPIView, RetrieveUpdateDestroyReviewAPIView

urlpatterns = [
    path('new/<int:restaurant_id>/', CreateReviewAPIView.as_view()),
    path('<int:review_id>/', RetrieveUpdateDestroyReviewAPIView.as_view()),
]