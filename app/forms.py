from django import forms
from django.forms import ModelForm
from django.contrib.auth.models import User
from django.contrib.auth.forms import AuthenticationForm

class loginForm(AuthenticationForm):
    username = forms.CharField(max_length=50, required=True)
    password = forms.PasswordInput()
    class Meta:
        model = User
        fields = ['username', 'password']
