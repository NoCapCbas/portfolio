from django.shortcuts import render
import os
from . import forms
from . import models
from . import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django import http


# Create your views here.
@api_view(["GET"])
def endpoints(request):
    """
    List of endpoints
    """
    endpoints = [
        {
            "endpoint": "/projects-deployed-count",
            "method": "GET", 
            "description": "Gets the total number of deployed projects using the is_live param"
        },
        {
            "endpoint": "/projects",
            "method": "GET", 
            "description": "Gets list of projects, include is_live param to get only live projects"
        },
        {
            "endpoint": "/projects/<str:pk>/",
            "method": "GET", 
            "description": "Gets specific project details"
        },
        {
            "endpoint": "/skills",
            "method": "GET", 
            "description": "Gets list of skills"
        },
        {
            "endpoint": "/skills/<str:pk>/",
            "method": "GET", 
            "description": "Gets specific skill details"
        },
        {
            "endpoint": "/download-resume",
            "method": "GET", 
            "description": "Downloads resume"
        },
    ]

    return Response(endpoints, status=status.HTTP_200_OK)

@api_view(["GET"])
def projects_deployed_count(request):
    """
    List number of deployed apps
    """
    context = {}

    number_of_projects_deployed = models.Project.objects.filter(live_link__isnull=False).count()
    context['number_of_projects_deployed'] = number_of_projects_deployed
    return Response(context, status=status.HTTP_200_OK)

@api_view(["GET"])
def skills(request):
    "List of skills"
    skills = models.Skill.objects.all()

    skill_serializer = serializers.SkillSerializer(skills, many=True)
    return Response(skill_serializer.data)

@api_view(["GET", "PUT", "PATCH", "DELETE"])
def skill_details(request, name):
    """
    Get, update, or delete specific skill
    """
    try:
        skill = models.Skill.objects.get(name=name)
    except models.Skill.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        skill_serializer = serializers.SkillSerializer(skill)
        return Response(skill_serializer.data)
    elif request.method in ["PUT", "PATCH"]:
        skill_serializer = serializers.SkillSerializer(skill, data=request.data, partial=(request.method == "PATCH"))
        if skill_serializer.is_valid():
            skill_serializer.save()
            return Response(skill_serializer.data)
        return Response(skill_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        skill.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(["GET"])
def projects(request):
    """
    List of apps
    """
    projects = models.Project.objects.all()

    is_live = request.query_params.get('is_live', None)
    if is_live is not None:
        projects = projects.filter(live_link__isnull=False)

    project_serializer = serializers.ProjectSerializer(projects, many=True)
    response = Response(project_serializer.data)
    response['Cache-Control'] = 'no-cache, no-store, must-revalidate'    
    return Response(project_serializer.data)

@api_view(["GET", "PUT", "PATCH", "DELETE"])
def project_details(request, name):
    """
    Get, update, or delete specific project
    """
    try:
        project = models.Project.objects.get(name=name)
    except models.Project.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        project_serializer = serializers.ProjectSerializer(project)
        return Response(project_serializer.data)
    elif request.method in ["PUT", "PATCH"]:
        project_serializer = serializers.ProjectSerializer(project, data=request.data, partial=(request.method == "PATCH"))
        if project_serializer.is_valid():
            project_serializer.save()
            return Response(project_serializer.data)
        return Response(project_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        project.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(["GET"])
def download_resume(request):
    from django.conf import settings

    # Get the absolute path to the PDF file
    pdf_path = os.path.join(settings.MEDIA_ROOT, 'resume', 'Damon Diaz-Resume.pdf')
    print(pdf_path)
    # Open the PDF file and return as response
    if os.path.exists(pdf_path):
        response = http.FileResponse(open(pdf_path, 'rb'), content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename="Damon Diaz-Resume.pdf"'
        return response
    else:
        return http.HttpResponseNotFound('Resume not found') 

