from django.urls import path

from apps.comments.views import ListCommentUserAPIView, ListAllComments

urlpatterns = [
    path('<int:user_id', ListCommentUserAPIView.as_view()),
    path('', ListAllComments.as_view()),
]