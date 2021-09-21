import dj_database_url
from django.conf.global_settings import DATABASES

db_from_env = dj_database_url.config(conn_max_age=500)
DATABASES['default'].update(db_from_env)