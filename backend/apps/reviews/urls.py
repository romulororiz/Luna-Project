from django.urls import path

from apps.reviews.views import CreateReviewAPIView, RetrieveUpdateDestroyReviewAPIView, ListAllReviewsAPIView, RetrieveRestaurantReview

urlpatterns = [
    path('', ListAllReviewsAPIView.as_view()),
    path('new/<int:restaurant_id>/', CreateReviewAPIView.as_view()),
    path('<int:review_id>/', RetrieveUpdateDestroyReviewAPIView.as_view()),
    path('restaurant/<int:restaurant_id>/', RetrieveRestaurantReview.as_view()),
]
