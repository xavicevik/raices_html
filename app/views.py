from django.shortcuts import render, redirect
from django.views.generic import ListView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.contrib.auth.models import User, Group
from django.contrib.auth.views import LoginView, LogoutView
from rest_framework import viewsets
from rest_framework import permissions
from .models import Parametros, Lenguajes
from .serializers import UserSerializer, GroupSerializer, ParametrosSerializer, LenguajeSerializer
from django.conf import settings
from django.contrib.auth.decorators import login_required


import logging

# Create your views here.
from django.urls import reverse
from django.contrib import messages
from django.contrib.messages.views import SuccessMessageMixin
from django import forms

logger = logging.getLogger(__name__)

@login_required
def Intro(request):
    template_name = 'intro/intro.html'
    return render(request, template_name)

@login_required
def HistoriaInicio(request):
    template_name = 'historia/index.html'
    return render(request, template_name)

class loginUsuario(LoginView):
    pass

class logoutUsuario(LogoutView):
    pass

@login_required
def CapituloUno(request):
    template_name = 'capitulo1/index.html'
    return render(request, template_name)

@login_required
def CapituloDos(request):
    template_name = 'capitulo2/index.html'
    return render(request, template_name)


@login_required
def CapituloTres(request):
    template_name = 'capitulo3/index.html'
    return render(request, template_name)

@login_required
def CapituloCuatro(request):
    template_name = 'capitulo4/index.html'
    return render(request, template_name)

@login_required
def CapituloCinco(request):
    template_name = 'capitulo5/index.html'
    return render(request, template_name)

@login_required
def CapituloSeis(request):
    template_name = 'capitulo6/index.html'
    return render(request, template_name)

# API Rest
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    #permission_classes = [permissions.IsAuthenticated]

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class ParametrosViewSet(viewsets.ModelViewSet):
    queryset = Parametros.objects.all()
    serializer_class = ParametrosSerializer
    #permission_classes = [permissions.IsAuthenticated]

class LenguajeViewSet(viewsets.ModelViewSet):
    queryset = Lenguajes.objects.all()
    serializer_class = ParametrosSerializer
    #permission_classes = [permissions.IsAuthenticated]