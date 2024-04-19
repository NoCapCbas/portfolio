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
import Link from "next/link";

interface Skill {
  description: string,
  svg_icon_text: string,
}

export default async function ProjectsPage() {
  // State to store the number of apps
  const [numberOfApps, setNumberOfApps] = useState(0);
  const [skills, setSkills] = useState<Skill[]>([]);

  // Effect hook to fetch the number of apps on component mount
  useEffect(() => {
    async function fetchNumberOfApps() {
      try {
        const response = await fetch('https://damondiaz.xyz/api/projects-deployed-count');
        const data = await response.json();
        setNumberOfApps(data.number_of_projects_deployed);
      } catch (error) {
        console.error("Failed to fetch number of apps", error);
      }
    };

    async function fetchSkills() {
      try {
        const response = await fetch('https://damondiaz.xyz/api/skills');
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        console.error("Failed to fetch skills", error);
      }
    }

    fetchNumberOfApps();
    fetchSkills()
  }, [])

  return (
    <main className="flex w-full h-full justify-center align-items items-center">
      <div className="flex flex-col align-items">
          <Card className="flex flex-col justify-center mx-[20px] bg-transparent border-none text-white">
            <CardHeader className="flex-col gap-4 items-center text-center">
                <CardTitle className="text-6xl font-bold">Damon Diaz</CardTitle>
                <CardDescription className="text-2xl font-bold text-white">{"{Software Engineer}"}</CardDescription>
                <Badge className="text-black bg-white text-xs" variant="secondary">Number of apps deployed: {numberOfApps}</Badge>
            </CardHeader>
            <CardContent>
              <div className="flex flex-row justify-center align-items h-[50px]">
                {skills.map((skill, index) => (
                  <div key={index} className="m-2 max-w-[30px] max-h-[30px] min-w-[30px] min-h-[30px]" title={skill.description}>
                    <div dangerouslySetInnerHTML={{ __html: skill.svg_icon_text }} />
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-center space-x-[50px]">
              <Button variant="default" className="border-white border-[1px]"><Link href="/projects">View Projects</Link></Button>
              <Button variant="default" className="border-white border-[1px]"><Link href="https://www.linkedin.com/in/damondiaz">Contact Me</Link></Button>
            </CardFooter>
          </Card>
      </div>
    </main>
  );
}
