from django.urls import path

from apps.users.views import ListMe

urlpatterns = [
    path('', ListMe.as_view(), name='list-me'),
]