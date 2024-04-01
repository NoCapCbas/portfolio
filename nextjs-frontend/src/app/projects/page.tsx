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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Project {
  title: string,
  image: string,
  time: number,
  description: string,
  is_live: boolean,
  id: string
}

async function getProjects(): Promise<Project[]> {
  // const result = await fetch('htt://localhost:4000/projects');
  
  // delay response
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const result = [
    {
      title: 'test',
      image: 'test.jpg',
      time: 15,
      description: 'test',
      is_live: false,
      id: 'test',
    },
    {
       title: 'test',
      image: 'test.jpg',
      time: 5,
      description: 'test',
      is_live: true,
      id: 'test',    
    },
    {
       title: 'test',
      image: 'test.jpg',
      time: 5,
      description: 'test',
      is_live: false,
      id: 'test',    
    },
    {
       title: 'test',
      image: 'test.jpg',
      time: 5,
      description: 'test',
      is_live: true,
      id: 'test',    
    },
    {
       title: 'test',
      image: 'test',
      time: 5,
      description: 'test',
      is_live: false,
      id: 'test',    
    },
    {
       title: 'test',
      image: 'test',
      time: 5,
      description: 'test',
      is_live: false,
      id: 'test',    
    },
    {
       title: 'test',
      image: 'test',
      time: 5,
      description: 'test',
      is_live: false,
      id: 'test',    
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
              <Avatar>
                <AvatarImage src={'/img/${project.image}'} alt="project img"/>
                <AvatarFallback>
                  {project.title.slice(0,2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.time} mins to cook.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>View Recipe</Button>
              {project.is_live && <Badge variant="secondary">Live!</Badge>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
