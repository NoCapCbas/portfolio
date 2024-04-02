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

async function getProjects(): Promise<Project[]> {
  // const result = await fetch('htt://localhost:4000/projects');
  
  // delay response
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const result = [
    {
      id: 1,
      name: 'To Do',
      short_description: 'short desc',
      long_description: 'long desc',
      link: 'http://test.com',
      repo_link: 'http://test.com',
      app_video:'http://test.com',
      is_live:true,
      skills: [1, 2, 3]
    },
    {
      id: 2,
      name: 'To Do',
      short_description: 'short desc',
      long_description: 'long desc',
      link: 'http://test.com',
      repo_link: 'http://test.com',
      app_video:'http://test.com',
      is_live:true,
      skills: [1, 2, 3]
    },
    {
      id: 3,
      name: 'To Do',
      short_description: 'short desc',
      long_description: 'long desc',
      link: 'http://test.com',
      repo_link: 'http://test.com',
      app_video:'http://test.com',
      is_live:true,
      skills: [1, 2, 3]
    },
    {
      id: 4,
      name: 'To Do',
      short_description: 'short desc',
      long_description: 'long desc',
      link: 'http://test.com',
      repo_link: 'http://test.com',
      app_video:'http://test.com',
      is_live:true,
      skills: [1, 2, 3]
    },
    {
      id: 5,
      name: 'To Do',
      short_description: 'short desc',
      long_description: 'long desc',
      link: 'http://test.com',
      repo_link: 'http://test.com',
      app_video:'http://test.com',
      is_live:true,
      skills: [1, 2, 3]
    },
    {
      id: 6,
      name: 'To Do',
      short_description: 'short desc',
      long_description: 'long desc',
      link: 'http://test.com',
      repo_link: 'http://test.com',
      app_video:'http://test.com',
      is_live:true,
      skills: [1, 2, 3]
    },
    {
      id: 7,
      name: 'To Do',
      short_description: 'short desc',
      long_description: 'long desc',
      link: 'http://test.com',
      repo_link: 'http://test.com',
      app_video:'http://test.com',
      is_live:true,
      skills: [1, 2, 3]
    },

  ];
  return result;
  // return result.json()
}

export default async function ProjectsPage() {
  const projects = await getProjects();

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
              <a href="{project.link}">
                <Badge variant="secondary">
                  <FaGithub className="w-[30px] h-[30px]"/>
                </Badge>
              </a>
              <a href="{project.repo_link}">
              {project.is_live && <Button>View Project</Button>}
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
