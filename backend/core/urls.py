from django.urls import path
from . import views

urlpatterns = [
    path('projects-deployed-count', views.projects_deployed_count),
    path('projects', views.projects),
    path('projects/<str:name>/', views.project_details),
    path('skills', views.skills),
    path('skills/<str:name>/', views.skill_details),
    path('download-resume', views.download_resume),
]
