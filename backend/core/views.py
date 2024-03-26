from django.shortcuts import render
from . import forms
from . import models
from django.core.paginator import Paginator


# Create your views here.
def main(request):
    context = {}

    number_of_projects_deployed = models.Project.objects.filter(is_live=True).count()
    context['number_of_projects_deployed'] = number_of_projects_deployed
    return render(request, 'core/main.html', context)

def projects(request):

    context = {}

    projects_queryset = models.Project.objects.filter(is_live=True)
    paginator = Paginator(projects_queryset, 2)
    
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    context['page_obj'] = page_obj
    return render(request, 'core/projects.html', context)

def resume(request):
    from django import http
    from django.conf import settings
    import os

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
