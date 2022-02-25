from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from backend_core.users.models import CustomUser


class CustomUserAdmin(UserAdmin):
    model = get_user_model()


admin.site.register(CustomUser, CustomUserAdmin)
