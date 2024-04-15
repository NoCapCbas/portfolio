"use client"

import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FaGithub } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Project {
  id: number,
  name: string,
  short_description: string,
  long_description: string,
  link: string,
  repo_link: string,
  app_video: string,
  is_live: boolean,
  skills: string[],
}

export default async function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://localhost/api/projects');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <main className="flex flex-col w-full h-full justify-center align-items items-center px-[20px] xs:px-[20px] sm:px-[20px] md:px-[20px] lg:px-[20px] xl:px-[0px]">
      <div className="flex flex-col justify-start w-full py-[20px]">
        <h1 className="text-white">Projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-[50px] xl:py-[50px] overflow-y-auto w-full" >
        {projects.map(project => (
          <Card key={project.id} className="flex flex-col justify-between mx-[20px]">
            <CardHeader className="flex-row gap-4 items-center">
              <div>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.short_description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{project.long_description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <a href={project.repo_link}>
                <Badge variant="secondary">
                  <FaGithub className="w-[30px] h-[30px]"/>
                </Badge>
              </a>
              <a href={project.link}>
              {project.is_live && <Button>View Project</Button>}
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
