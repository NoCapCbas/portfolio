from django.urls import path
from . import views

urlpatterns = [
    path('projects-deployed-count', views.projects_deployed_count),
    path('projects', views.projects, name='projects'),
    path('download-resume', views.download_resume),
]
