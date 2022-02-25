from django.shortcuts import render
from rest_framework import generics

from .models import Host
from .serializers import HostSerializer


class HostView(generics.ListAPIView):
    queryset = Host.objects.all()
    serializer_class = HostSerializer
