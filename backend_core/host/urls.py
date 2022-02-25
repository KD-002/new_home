from django.urls import path

from . import views

app_name = 'host'

urlpatterns = [
    path('', views.HostView.as_view(), name='host'),
]
