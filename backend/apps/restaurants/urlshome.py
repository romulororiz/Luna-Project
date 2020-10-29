from django.urls import path

from apps.restaurants.views import ListBestRestaurantAPIView

urlpatterns = [
    path('', ListBestRestaurantAPIView.as_view()),
]