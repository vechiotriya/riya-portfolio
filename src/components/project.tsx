"use client";
import Image from "next/image";
import Tag from "./tag";
import { Button } from "./ui/button";
import {
  CalendarRangeIcon,
  ExternalLink,
  Github,
} from "lucide-react";
import { ProjectItemProps } from "@/constants/types";
import { projects } from "@/constants/data";

const ProjectItem: React.FC<ProjectItemProps> = ({
  type,
  timeline,
  image,
  name,
  description,
  tags,
  demoUrl,
  githubUrl,
}) => {
  return (
    <div className="relative bg-white pixel-shadow border-4 border-black overflow-hidden hover:border-purple-400 hover:scale-[110%]">
      <div className="relative h-48 overflow-hidden border-b-4 border-black">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover relative bg-position-[50%_25%]"
          style={{ imageRendering: "pixelated" }}
        />
        <Tag
          size="small"
          text={type == "work" ? "WORK" : "PROJECT"}
          shadow={false}
          className={`absolute top-2 right-3 bg-linear-to-r ${type == "work" ? "from-orange-300 to-blue-500" : "from-indigo-400 to-pink-300"} text-white text-[10px] border-gray-600 border-dotted`}
        />
      </div>
      <div className="flex flex-col p-4 gap-3">
        <h6 className="pixel-font text-md text-black">{name}</h6>
        <div className="flex items-center">
          <CalendarRangeIcon className="w-3 h-3 inline mr-1 text-gray-500" />
          <span className="text-xs text-gray-500">{timeline}</span>
        </div>
        <span className="text-sm text-gray-600">{description}</span>
        <div className="flex flex-wrap w-87 gap-2">
          {tags.map((tag: string, index: number) => (
            <Tag key={index} size="small" text={tag} shadow={false} />
          ))}
        </div>
        {type == "personal" && (
          <div className="flex gap-2">
            {demoUrl && (
              <Button
                className="flex gap-3"
                size={"sm"}
                onClick={() => {
                  window.open(demoUrl);
                }}
              >
                <ExternalLink className="w-3 h-3" />
                <span>DEMO</span>
              </Button>
            )}
            <Button
              className="flex gap-3"
              size={"sm"}
              variant={"secondary"}
              onClick={() => {
                window.open(githubUrl);
              }}
            >
              <Github className="w-3 h-3" />
              <span>CODE</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
const Project = () => {

  return (
    <section className="flex flex-col items-center w-full py-20 px-6 bg-gray-50">
      <Tag
        text="QUEST LOG"
        className="bg-linear-to-r from-yellow-300 to-pink-300 mb-6 text-white"
      />
      <span className="text-gray-600 mb-8">
        Professional adventures and side quests
      </span>
      <div className="grid grid-cols-3 gap-8">
        {projects.length > 0
          ? projects.map((project, index) => (
              <ProjectItem
                timeline={project.timeline}
                type={project.type}
                key={index}
                image={project.image}
                name={project.name}
                description={project.description}
                tags={project.tags}
                demoUrl={project.demoUrl}
                githubUrl={project.githubUrl}
              />
            ))
          : null}
      </div>
    </section>
  );
};

export default Project;
