from rest_framework import serializers
from .models import Skill, Project

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill 
        fields = ['name', 'description', 'svg_icon_text']

class ProjectSerializer(serializers.ModelSerializer):

    skill_names = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = ['id', 'name', 'description', 'live_link', 'repo_link', 'app_video', 'skill_names']

    def get_skill_names(self, obj):
        return [skill.name for skill in obj.skills.all()]
