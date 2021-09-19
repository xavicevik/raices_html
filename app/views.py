from django.shortcuts import render, redirect
from django.views.generic import ListView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.contrib.auth.models import User, Group
from django.contrib.auth.views import LoginView, LogoutView
from rest_framework import viewsets
from rest_framework import permissions
from .models import Parametros
from .serializers import UserSerializer, GroupSerializer, ParametrosSerializer
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
    #template_name = 'registration/login.html'
    #model = User
    #form_class = loginForm
    #def form_valid(self, form):
    #    form.save()
    #return redirect('/')

class logoutUsuario(LogoutView):
    pass

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
    permission_classes = [permissions.IsAuthenticated]
