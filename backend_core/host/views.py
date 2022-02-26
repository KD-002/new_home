from django.shortcuts import render
from rest_framework import generics
from rest_framework.pagination import PageNumberPagination

from .models import Host
from .serializers import HostSerializer


class TenPagination(PageNumberPagination):
    page_size = 10


class HostView(generics.ListAPIView):
    queryset = Host.objects.all()
    serializer_class = HostSerializer
    pagination_class = TenPagination


class HostDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Host.objects.all()
    serializer_class = HostSerializer
