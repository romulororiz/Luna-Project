from django.conf import settings
from django.db import models
from django_countries.fields import CountryField
from phone_field import PhoneField

PRICE_CHOICES = (
    ('1', 'Cheap'),
    ('2', 'Intermediate'),
    ('3', 'Expensive'),
    ('4', 'Godly Expensive'),
)


CATEGORY_CHOICES = (
    ('1', 'Not specified'),
    ('2', 'Asian'),
    ('3', 'Indian'),
    ('4', 'Mexican'),
    ('5', 'Swiss'),
    ('6', 'Comfort Food'),
    ('7', 'Italian'),
    ('8', 'American'),
)


class Restaurant(models.Model):
    name = models.CharField(max_length=60, unique=True)
    country = CountryField(default="BD", blank=True)
    category = models.CharField(choices=CATEGORY_CHOICES, default='1', blank=True, max_length=20)
    street = models.CharField(max_length=200, blank=True)
    city = models.CharField(max_length=60, blank=True)
    zip_code = models.CharField(max_length=12, blank=True)
    website = models.URLField(max_length=200, blank=True)
    phone = PhoneField(blank=True, help_text='Contact phone number', max_length=15)
    email = models.EmailField(max_length=60, blank=True)
    pricelevel = models.CharField(choices=PRICE_CHOICES, default='2', blank=True, max_length=4)
    image = models.ImageField(upload_to='', blank=True)
    user = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='restaurants')
    openhours = models.CharField(max_length=100, blank=True)
    #def openinghours(self):


    def __str__(self):
        return f'{self.name}'
