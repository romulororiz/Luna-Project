from django.urls import path

from apps.users.views import ListUsers

urlpatterns = [
    path('', ListUsers.as_view(), name='list-users'),
]
