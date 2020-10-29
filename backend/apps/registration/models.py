from django.conf import settings
from django.contrib.auth import get_user_model
from django.db import models
import random


User = get_user_model()

def code_generator(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class Registration(models.Model):
    user = models.OneToOneField(
        on_delete=models.CASCADE,
        related_name='registration_profile',
        to=settings.AUTH_USER_MODEL
    )
    code = models.CharField(
        verbose_name='code',
        help_text='random code used for registration and for password reset',
        max_length=15,
        default=code_generator
    )
    code_used = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.user}, {self.code}'
