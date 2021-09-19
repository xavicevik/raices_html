from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Entidad)
admin.site.register(Estados)
admin.site.register(Lenguajes)
admin.site.register(Idiomas)
admin.site.register(Modulos)

@admin.register(Parametros)
class ParametrosAdmin(admin.ModelAdmin):
    list_display = ("nombre", "valorTexto", "valorNumero")
    #list_filter = ("nombre")
    #search_fields = ("nombre")