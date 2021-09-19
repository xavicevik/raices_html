"""raices URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from app.views import HistoriaInicio, loginUsuario, logoutUsuario, Intro, CapituloUno, CapituloDos, CapituloTres
from app.views import CapituloCuatro, CapituloCinco, CapituloSeis
from rest_framework import routers
from app import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'parametros', views.ParametrosViewSet)

urlpatterns = [
    path('login/', loginUsuario.as_view(), name='login'),
    path('logout/', logoutUsuario.as_view(), name='logout'),
    path('accounts/', include('django.contrib.auth.urls')),
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('intro/', Intro, name="intro"),
    path('historia/', HistoriaInicio, name="Historia"),
    path('capitulo1', CapituloUno, name="capitulo1"),
    path('capitulo2', CapituloDos, name="capitulo2"),
    path('capitulo3', CapituloTres, name="capitulo3"),
    path('capitulo4', CapituloCuatro, name="capitulo4"),
    path('capitulo5', CapituloCinco, name="capitulo5"),
    path('capitulo6', CapituloSeis, name="capitulo6"),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
