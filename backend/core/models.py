from django.db import models

# Create your models here.

class Skill(models.Model):
     # svg icons provided by 
     # https://devicon.dev
    name = models.CharField(max_length=500, blank=False, null=False)
    description = models.CharField(max_length=2500,blank=False, null=False)
    svg_icon_text = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name
       
class Project(models.Model):
    name = models.CharField(max_length=50,blank=False, null=False)
    description = models.CharField(max_length=250, blank=False, null=False)
    live_link = models.URLField(blank=True, null=True)
    repo_link = models.URLField(blank=True, null=True)
    app_video = models.FileField(upload_to="videos/", blank=True, null=True)
    skills = models.ManyToManyField(Skill, blank=False)

    def __str__(self):
        return self.name
#    
