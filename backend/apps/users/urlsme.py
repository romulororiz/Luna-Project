from django.urls import path
from apps.users.views import RetrieveUpdateMeAPIView

urlpatterns = [
    path('me/', RetrieveUpdateMeAPIView.as_view()),
]
