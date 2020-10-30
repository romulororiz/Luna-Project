from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView

from apps.reviews.serielizers import ReviewSerializer

from apps.comments.models import Comment
from rest_framework.response import Response

from apps.comments.permissions import IsAuthorOrReadOnly
from apps.comments.serializers import CommentSerializer

User = get_user_model()



class ListCommentUserAPIView(ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = []
    lookup_field = 'user_id'


class ListAllComments(ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = []