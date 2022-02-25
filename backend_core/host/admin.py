from django.contrib import admin

# Register your models here.
from . import models

admin.site.register(models.Host)
admin.site.register(models.Subtype)
