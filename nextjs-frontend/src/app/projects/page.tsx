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
  description: string,
  live_link: string,
  repo_link: string,
  app_video: string,
  skill_names: string[],
}

export default function ProjectsPage() {
  const urlBase = process.env.NEXT_PUBLIC_BASE || 'https://admin.damondiaz.xyz';

  const [projects, setProjects] = useState<Project[]>([]);

  async function fetchProjects() {
    try {
      const response = await fetch(`${urlBase}/api/projects`);
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <main className="flex flex-col w-full h-full justify-start align-items items-start px-[20px] xs:px-[20px] sm:px-[20px] md:px-[20px] lg:px-[20px] xl:px-[0px]">
      <div className="flex flex-col justify-start w-full py-[20px]">
        <h1 className="text-white">Projects</h1>
      </div>
      <div className="grid grid-cols-1 gap-8 py-[50px] xl:py-[50px] overflow-y-auto w-full" >
        {projects.map(project => (
          <Card key={project.id} className="flex flex-col justify-between mx-[20px]">
            <CardHeader className="flex-row gap-4 items-center">
              <div>
                <CardTitle>{project.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
              <div>
              {project.skill_names.map((skill,index) => (
                <Badge key={index} variant="secondary" className="m-1">{skill}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">

              <a href={project.repo_link}>
                <Badge variant="secondary">
                  <FaGithub className="w-[30px] h-[30px]"/>
                </Badge>
              </a>
              <a href={project.live_link}>
                {project.live_link && <Button>View Live Project</Button>}
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
