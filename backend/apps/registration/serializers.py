from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError
from rest_framework import serializers
from apps.registration.models import Registration
from apps.registration.models import code_generator

User = get_user_model()


class RegistrationSerializer(serializers.Serializer):
    #email = serializers.EmailField(label='Registration E-Mail Address', validators=[email_does_not_exist])

    def save(self, validated_data):
        email = validated_data.get('email')
        new_user = User(
            username=email,
            email=email,
            is_active=False,
        )
        new_user.save()
        #####
        # Creating reg profile here and not with signal because signals are async
        # and I need the code in the reg profile right now.
        reg_profile = Registration(
            user=new_user,
            code_type='RV'
        )
        reg_profile.save()
        #####
        email = Email(to=email, subject='Thank you for registering!',
                      content=f'Here is your validation code: {reg_profile.code}')
        email.save(request=self.context['request'])
        return new_user
