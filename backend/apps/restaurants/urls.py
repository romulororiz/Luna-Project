from django.urls import path

from apps.restaurants.views import ListRestaurantAPIView, ListRestaurantCategoryAPIView, CreateRestaurantAPIView, RetrieveUpdateDestroyRestaurantAPIView, ListUserRestaurantAPIView

urlpatterns = [
    path('', ListRestaurantAPIView.as_view()),
    path('new/', CreateRestaurantAPIView.as_view()),
    path('<int:id>/', RetrieveUpdateDestroyRestaurantAPIView.as_view()),
    path('user/<int:user_id>/', ListUserRestaurantAPIView.as_view()),
    path('category/<int:category_id>/', ListRestaurantCategoryAPIView.as_view()),
]