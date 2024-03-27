from rest_framework import serializers
from .models import Skill, Project

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill 
        fields = ['name', 'description', 'svg_icon_text']

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['__all__']
