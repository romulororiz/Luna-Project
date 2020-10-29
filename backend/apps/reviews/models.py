from django.conf import settings
from django.contrib.auth import get_user_model
from django.db import models

from apps.restaurants.models import Restaurant

User = get_user_model()


RATING_CHOICES = [
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5)
]

class Review(models.Model):
    text_content = models.TextField(max_length=200, blank=True)
    rating = models.IntegerField(choices=RATING_CHOICES)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    user = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='fk_reviews')
    restaurant = models.ForeignKey(to=Restaurant, on_delete=models.CASCADE, related_name='fk_reviews', null=True, blank=True)

    def __str__(self):
        return f'ID {self.pk}: Review by {self.user} on Restaurant {self.restaurant.name}'
