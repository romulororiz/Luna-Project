from django.conf import settings
from django.contrib.auth import get_user_model
from django.db import models

from apps.reviews.models import Review

User = get_user_model()


class Comment(models.Model):
    text_content = models.CharField(max_length=200)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    user = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='fk_comments')
    review = models.ForeignKey(to=Review, on_delete=models.CASCADE, related_name='fk_comments')


    def __str__(self):
        return f'ID {self.pk}: Comment by {self.user} on Review {self.review}'
