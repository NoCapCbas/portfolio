from django.db import models

# Create your models here.

class Skill(models.Model):
    name = models.CharField(max_length=500, blank=False, null=False)
    description = models.CharField(max_length=2500,blank=False, null=False)
    svg_icon_text = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name
       
class Project(models.Model):
    name = models.CharField(max_length=500,blank=False, null=False)
    short_description = models.CharField(max_length=300,blank=False, null=False)
    long_description = models.CharField(max_length=5000, blank=False, null=False)
    link = models.URLField(blank=False, null=False)
    repo_link = models.URLField(blank=False, null=False)
    app_video = models.FileField(upload_to="videos/", blank=True, null=True)
    skills = models.ManyToManyField(Skill, blank=True)
    is_live = models.BooleanField(default=False, blank=False, null=False)

    def __str__(self):
        return self.name
   
