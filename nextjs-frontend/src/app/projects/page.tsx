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

interface Recipe {
  title: string,
  image: string,
  time: number,
  description: string,
  vegan: boolean,
  id: string
}

async function getRecipes(): Promise<Recipe[]> {
  // const result = await fetch('htt://localhost:4000/recipes');
  
  // delay response
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const result = [
    {
      title: 'test',
      image: 'test.jpg',
      time: 15,
      description: 'test',
      vegan: true,
      id: 'test',
    },
    {
       title: 'test',
      image: 'test.jpg',
      time: 5,
      description: 'test',
      vegan: false,
      id: 'test',    
    },
    {
       title: 'test',
      image: 'test.jpg',
      time: 5,
      description: 'test',
      vegan: false,
      id: 'test',    
    },
    {
       title: 'test',
      image: 'test.jpg',
      time: 5,
      description: 'test',
      vegan: false,
      id: 'test',    
    },
    {
       title: 'test',
      image: 'test',
      time: 5,
      description: 'test',
      vegan: false,
      id: 'test',    
    },

  ];
  return result;
  // return result.json()
}

export default async function ProjectsPage() {
  const recipes = await getRecipes();

  return (
    <main>
      <nav>
        <h1 className="text-white px-[20px] xl:px-[0px]">Projects</h1>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-[25px] xl:py-[5px]" >
        {recipes.map(recipe => (
          <Card key={recipe.id} className="flex flex-col justify-between mx-[20px]">
            <CardHeader className="flex-row gap-4 items-center">
              <Avatar>
                <AvatarImage src={'/img/${recipe.image}'} alt="recipe img"/>
                <AvatarFallback>
                  {recipe.title.slice(0,2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.time} mins to cook.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{recipe.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>View Recipe</Button>
              {recipe.vegan && <Badge variant="secondary">Vegan!</Badge>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
