@ECHO OFF

TITLE Start RaicesAfro

ECHO Por favor espere, se está iniciando RaicesAfro

ECHO =========================

ECHO Ingresando a RaicesAfro
Explorer "http://localhost:8000"


ECHO Iniciando servidor Web
CD phpportable
php -S localhost:8000 -t ../


ECHO =========================
