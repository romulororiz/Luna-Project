from django.urls import path
import sys


from apps.users.views import ListMe

urlpatterns = [
    path('', ListMe.as_view()),
]