from django.contrib.auth.models import User, Group
from .models import Parametros, Lenguajes
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'first_name', 'last_name', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class ParametrosSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Parametros
        fields = ['url', 'id', 'nombre', 'valorTexto', 'valorNumero']

class LenguajeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Lenguajes
        fields = ['id', 'nombre', 'idioma', 'texto']