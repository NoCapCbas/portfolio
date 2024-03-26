from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name='main'),
    path('projects', views.projects, name='projects'),
    path('download-resume', views.resume, name='download_resume'),
]
