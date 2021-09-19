from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save

# Create your models here.

class Parametros(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    valorTexto = models.CharField(max_length=200)
    valorNumero = models.IntegerField()
    fechaCreacion = models.DateTimeField(auto_now=False)
    fechaModificacion = models.DateTimeField(auto_now=False)

    class Meta:
        db_table = 'parametros'

    def __str__(self):
        return f"{self.nombre},{self.valorTexto}, {self.valorNumero}"

class Estados(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=20)
    observacion = models.CharField(max_length=200)

    class Meta:
        db_table = 'estados'

class Entidad(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=200)
    estado = models.ForeignKey(Estados, default=1, on_delete=models.CASCADE)
    fechaCreacion = models.DateTimeField(auto_now=False)
    fechaModificacion = models.DateTimeField(auto_now=False)

    class Meta:
        db_table = 'entidades'

class Idiomas(models.Model):
    id = models.IntegerField()
    codigo = models.CharField(max_length=5, primary_key=True)
    nombre = models.CharField(max_length=10)

    class Meta:
        db_table = 'idiomas'

class Modulos(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=20)

    class Meta:
        db_table = 'modulos'

class Lenguajes(models.Model):
    id = models.AutoField(primary_key=True)
    modulo = models.IntegerField()
    idioma = models.ForeignKey(Idiomas, default=1, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=50)
    texto = models.TextField()
    fechaCreacion = models.DateTimeField(auto_now=False)
    fechaModificacion = models.DateTimeField(auto_now=False)

    class Meta:
        db_table = 'lenguajes'

