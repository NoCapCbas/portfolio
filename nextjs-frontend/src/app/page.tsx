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

export default function ProjectsPage() {
  const urlBase = process.env.NEXT_PUBLIC_BASE || 'https://admin.damondiaz.xyz';
  // State to store the number of apps
  const [numberOfApps, setNumberOfApps] = useState(0);
  const [skills, setSkills] = useState<Skill[]>([]);

  async function fetchNumberOfApps() {
    try {
      const response = await fetch(`${urlBase}/api/projects-deployed-count`);
      const data = await response.json();
      setNumberOfApps(data.number_of_projects_deployed);
    } catch (error) {
      console.error("Failed to fetch number of apps", error);
    }
  };

  async function fetchSkills() {
    try {
      const response = await fetch(`${urlBase}/api/skills`);
      const data = await response.json();
      setSkills(data);
    } catch (error) {
      console.error("Failed to fetch skills", error);
    }
  }

  // Effect hook to fetch the number of apps on component mount
  useEffect(() => {
    fetchNumberOfApps();
    fetchSkills()
  }, [])

  return (
    <main className="flex w-full h-full justify-center align-items items-center">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
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
