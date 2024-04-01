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
import Link from "next/link";

export default function loading() {
  return (
    <main className="flex w-full h-full justify-center align-items items-center">
      <div className="flex flex-col align-items">
          <Card className="flex flex-col justify-center mx-[20px] bg-transparent border-none text-white">
            <CardHeader className="flex-col gap-4 items-center text-center">
                <CardTitle className="text-6xl font-bold">Damon Diaz</CardTitle>
                <CardDescription className="text-2xl font-bold text-white">{"{Software Engineer}"}</CardDescription>
                <Badge className="text-black bg-white text-xs" variant="default">Number of apps deployed: 0</Badge>
            </CardHeader>
            <CardContent>
              <div className="flex flex-row justify-center align-items h-[50px]">
              </div>
            </CardContent>
            <CardFooter className="flex justify-center space-x-[50px]">
              <Button variant="default" className="border-white border-[1px]"><Link href="/projects">View Projects</Link></Button>
              <Button variant="default" className="border-white border-[1px]"><Link href="https://www.linkedin.com/in/damondiaz">Contact Me</Link></Button>
            </CardFooter>
          </Card>
      </div>
    </main>
  )
}
