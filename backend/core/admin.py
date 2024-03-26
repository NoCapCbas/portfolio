from django.contrib import admin
from . import models
# user: cbas
# password: N***********3
# Register your models here.


class ProjectAdmin(admin.ModelAdmin):
    model = models.Project
    list_display = ['name', 'is_live', 'link', 'repo_link', 'list_display_skills']

    def list_display_skills(self, obj):
        return ', '.join(skill.name for skill in obj.skills.all())
    

admin.site.register(models.Project, ProjectAdmin)

admin.site.register(models.Skill)

