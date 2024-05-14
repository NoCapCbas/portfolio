import Link from "next/link"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full py-[5px] flex flex-col items-center justify-center bg-white dark:bg-gray-900">
      <div className="container flex flex-col gap-2 items-center justify-center md:justify-between lg:justify-between xl:justify-between px-4 text-center md:flex-row md:gap-4 md:px-6">
        <div className="flex items-center gap-2 text-sm sm:justify-center sm:gap-4 md:order-2 lg:order-1 lg:justify-start xl:order-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="https://damondiaz.xyz">
                  <HomeIcon className="h-5 w-5 text-black" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Home</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="https://www.linkedin.com/in/damondiaz">
                  <LinkedinIcon className="h-5 w-5 text-black" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="https://github.com/NoCapCbas">
                  <GithubIcon className="h-5 w-5 text-black" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Github</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="/download-resume">
                  <FileIcon className="h-5 w-5 text-black" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Download Resume</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="https://codecrusades.substack.com">
                  <BlogIcon className="h-5 w-5 text-black" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Code Blog</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

        </div>
        <p className="text-xs text-gray-500 sm:order-2 md:text-sm/relaxed lg:order-1 lg:text-sm/relaxed xl:order-3 text-black dark:text-gray-400">
          Made by <a href="/" className="text-black">Damon Diaz</a>
        </p>
      </div>
    </footer>
  )
}

interface HomeIconProps {
  [key: string]: any;
}

const HomeIcon: React.FC<HomeIconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 9l9-7 9 7v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

interface FileIconProps {
  [key: string]: any;
}

const FileIcon: React.FC<FileIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  )
}

interface GithubIconProps {
  [key: string]: any;
}

const GithubIcon: React.FC<GithubIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

interface LinkedinIconProps {
  [key: string]: any;
}

const LinkedinIcon: React.FC<LinkedinIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

interface BlogIconProps {
  [key: string]: any;
}

const BlogIcon: React.FC<BlogIconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 17H3V7h18v10zM15 9h3M15 13h5M6 9h5M6 13h5M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
    </svg>
  );
}

