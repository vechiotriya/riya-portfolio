import { ReactNode } from "react";

export interface ProjectItemProps {
  type: "work" | "personal";
  timeline: string;
  image: string;
  name: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export type SkillTuple = [string, number, ReactNode];

export type SkillArray = Record<string, SkillTuple[]>;

export interface StatProps {
  title: string;
  value: string;
}

export interface SocialLinkProps {
  icon: React.ReactNode;
  label: string;
  url: string;
  username: string;
}