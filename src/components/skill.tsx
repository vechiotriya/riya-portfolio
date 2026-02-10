"use client";
import { useState } from "react";
import Tag from "./tag";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import {
  Atom,
  Cat,
  Code2,
  Database,
  Flame,
  GlobeLock,
  MapPinned,
  Palette,
  ShieldCheck,
  Smartphone,
  Sparkle,
  Star,
  StarHalf,
  Toolbox,
} from "lucide-react";
import { SkillArray } from "@/constants/types";

const Ratings = ({ rating }: { rating: number }) => {
  if (rating === 0) return null;
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  return (
    <div className="flex">
      {Array.from({ length: fullStars }).map((_, index) => (
        <Star color={"black"} key={"star" + index} />
      ))}
      {halfStar && <StarHalf color={"black"} key="half-star" />}
    </div>
  );
};
const SkillItem = ({
  skill,
  icon,
  rating,
}: {
  skill: string;
  icon: React.ReactNode;
  rating: number;
}) => {
  return (
    <div className="flex flex-col p-6 border-4 border-black bg-white pixel-shadow pixel-font text-sm gap-2">
      <div className="flex items-center flex-row gap-3 mb-2">
        <div className="flex items-center justify-center bg-black w-8 h-8 text-white">
          {icon}
        </div>
        <span>{skill}</span>
      </div>
      <Ratings rating={rating} />
    </div>
  );
};

const Skill: React.FC = () => {
    const skillData: SkillArray = {
    language: [
      ["JavaScript", 4, <Code2 key="js" color="#FFFFFF" className="w-4 h-4" />],
      ["TypeScript", 4, <Code2 key="ts" color="#FFFFFF" className="w-4 h-4" />],
      ["Java", 3, <Code2 key="java" color="#FFFFFF" className="w-4 h-4" />],
      ["SQL", 3, <Database key="db" color="#FFFFFF" className="w-4 h-4" />],
    ],
    frameworks: [
      ["React.js", 3.5, <Atom key="react" color="#FFFFFF" className="w-4 h-4" />],
      ["React Native", 5, <Atom key="native" color="#FFFFFF" className="w-4 h-4" />],
      ["Redux Toolkit", 3, <Atom key="rtk" color="#FFFFFF" className="w-4 h-4" />],
      ["Selenium", 4, <ShieldCheck key="selenium" color="#FFFFFF" className="w-4 h-4" />],
      ["Appium", 2, <ShieldCheck key="appium" color="#FFFFFF" className="w-4 h-4" />],
      ["Next.js", 2.5, <Atom key="next" color="#FFFFFF" className="w-4 h-4" />],
      ["Tailwind", 4, <Palette key="tailwind" color="#FFFFFF" className="w-4 h-4" />],
      ["Mapbox", 3, <MapPinned key="map" color="#FFFFFF" className="w-4 h-4" />],
      ["ThirdWeb", 3, <GlobeLock key="third" color="#FFFFFF" className="w-4 h-4" />],
      ["Expo", 4, <Smartphone key="expo" color="#FFFFFF" className="w-4 h-4" />],
    ],
    tools: [
      ["Git", 0, <Cat key="git" color="#FFFFFF" className="w-4 h-4" />],
      ["Firebase", 0, <Flame key="firebase" color="#FFFFFF" className="w-4 h-4" />],
      ["ESLint", 0, <Toolbox key="eslint" color="#FFFFFF" className="w-4 h-4" />],
      ["Android Studio", 0, <Toolbox key="android" color="#FFFFFF" className="w-4 h-4" />],
      ["VSCode", 0, <Toolbox key="vscode" color="#FFFFFF" className="w-4 h-4" />],
    ],
    practices: [
      ["Agile", 0, <Sparkle key="agile" color="#FFFFFF" className="w-4 h-4" />],
      ["Test Automation", 0, <Sparkle key="test" color="#FFFFFF" className="w-4 h-4" />],
      ["TDD", 0, <Sparkle key="tdd" color="#FFFFFF" className="w-4 h-4" />],
      ["BDD", 0, <Sparkle key="bdd" color="#FFFFFF" className="w-4 h-4" />],
      ["Code Refactoring", 0, <Sparkle key="refactor" color="#FFFFFF" className="w-4 h-4" />],
    ],
  };
  const [active, setActive] = useState(skillData["language"]);

  return (
    <section className="flex flex-col items-center py-20">
      <Tag
        text="Skill Tree"
        className="bg-linear-to-r from-blue-300 to-emerald-300 mb-6 text-white"
      />
      <span className="text-gray-600 mb-8">
        Level up your understanding of my expertise
      </span>
      <ToggleGroup
        type="single"
        onValueChange={(value) => {
          setActive(skillData[value as keyof typeof skillData]);
        }}
        size="lg"
        defaultValue="language"
        variant="outline"
        spacing={2}
        color="#0000"
        className="mb-12"
      >
        <ToggleGroupItem value="language" aria-label="Toggle language">
          Language
        </ToggleGroupItem>
        <ToggleGroupItem value="frameworks" aria-label="Toggle frameworks">
          Frameworks/Libraries
        </ToggleGroupItem>
        <ToggleGroupItem value="tools" aria-label="Toggle tools">
          Tools
        </ToggleGroupItem>
        <ToggleGroupItem value="practices" aria-label="Toggle practices">
          Practices
        </ToggleGroupItem>
      </ToggleGroup>
      <div className="grid grid-cols-3 gap-6">
        {active.map((skill) => (
          <SkillItem
            key={skill[0]}
            skill={skill[0]}
            rating={skill[1]}
            icon={skill[2]}
          />
        ))}
      </div>
    </section>
  );
};

export default Skill;