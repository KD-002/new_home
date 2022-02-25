from django.contrib.auth import get_user_model
from django.core.validators import MinLengthValidator
from django.db import models
import factory

from users.models import CustomUser


class Host(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    title = models.CharField(max_length=200, help_text='Title of offers')
    created = models.DateTimeField(auto_now_add=True)
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    # type = models.CharField(max_length=200, choices=[('1', 'I need help'), ('2', 'I offer help')])
    subtype = models.ManyToManyField('Subtype', related_name='subtypes')
    description = models.CharField(max_length=1000)
    location = models.CharField(max_length=200)
    contact_address = models.CharField(max_length=500)
    contact_email = models.EmailField(max_length=200, blank=True, null=True)
    contact_phone = models.CharField(max_length=15, validators=[MinLengthValidator(9)])
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title


class Subtype(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class HostFactory(factory.Factory):
    class Meta:
        model = Host

    user = CustomUser(factory.Sequence(lambda n: 'user%d' % n))
