from django.shortcuts import render
from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from apps.registration.serializers import RegistrationSerializer



class RegistrationView(GenericAPIView):
    """
    post:
    Create a non active user with email info only.
    """
    serializer_class = RegistrationSerializer
    permission_classes = []
    authentication_classes = []

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(serializer.validated_data)
        return Response(status=status.HTTP_200_OK)


class RegistrationValidationView(GenericAPIView):
    """
    patch:
    Update user info. Activate user.
    """
    permission_classes = []
    serializer_class = RegistrationSerializer

    def patch(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(serializer.validated_data)
        return Response(status=status.HTTP_200_OK)
