from django.urls import path

from apps.users.views import ListUsersAPIView, SearchUserAPIView,RetrieveCertainUserAPIView

urlpatterns = [
    path('list/', ListUsersAPIView.as_view()),
    path('<int:id>/', RetrieveCertainUserAPIView.as_view()),
    path('?search=<str:search_string>/', SearchUserAPIView.as_view()),
]
