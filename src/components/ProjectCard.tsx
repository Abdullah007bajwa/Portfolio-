'use client';
import React from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "./ui/dialog";
import Image from "next/image";
import { Button } from "./ui/button";
import { Project } from "../lib/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const handleCodeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      e.preventDefault();
      const confirmOpen = window.confirm(
        "This link will open in a new window. Do you want to proceed?"
      );
      if (confirmOpen) {
        window.open(project.codeUrl, "_blank");
      }
    }
  };

  return (
    <Dialog>
      <>
        <DialogTrigger asChild>
          <div className="cursor-pointer relative group overflow-hidden rounded-2xl border border-gray-200 shadow-md transition-shadow duration-300 hover:shadow-xl h-full flex flex-col">
            {/* Thumbnail */}
            <div className="relative w-full pb-[100%] bg-white flex-shrink-0">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="contain"
                className="transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            {/* Basic info */}
            <div className="p-4 bg-white h-32 flex flex-col justify-center overflow-hidden">
              <h3 className="text-xl font-semibold line-clamp-1 mb-2 text-gray-700">
                {project.title}
              </h3>
              <p className="text-gray-600 line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-3xl p-0">
          {/* Visually hidden title for accessibility */}
          <DialogTitle className="sr-only">Project Details</DialogTitle>
          <div>
            {/* Detail image */}
            <div className="relative w-full pb-[100%] bg-white">
              <Image
                src={project.detailImage}
                alt={project.title}
                layout="fill"
                objectFit="contain"
              />
            </div>
            {/* Detailed description */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-700">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-6">{project.detailDescription}</p>
              <div className="flex space-x-4">
                <Button asChild variant="glow">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleCodeClick}
                  >
                    View Code
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </>
    </Dialog>
  );
}
