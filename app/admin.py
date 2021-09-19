from django.contrib import admin
from .models import *
# Register your models here.

@admin.register(Parametros)
class ParametrosAdmin(admin.ModelAdmin):
    list_display = ("nombre", "valorTexto", "valorNumero")
    #list_filter = ("nombre")
    #search_fields = ("nombre")

@admin.register(Estados)
class EstadosAdmin(admin.ModelAdmin):
    list_display = ("id", "nombre")

@admin.register(Modulos)
class EstadosAdmin(admin.ModelAdmin):
    list_display = ("id", "nombre")

@admin.register(Idiomas)
class IdiomasAdmin(admin.ModelAdmin):
    list_display = ("id", "codigo","nombre")

@admin.register(Lenguajes)
class LenguajesAdmin(admin.ModelAdmin):
    list_display = ("id", "modulo", "idioma", "nombre", "texto")

@admin.register(Entidad)
class EntidadAdmin(admin.ModelAdmin):
    list_display = ("id", "nombre", "estado")