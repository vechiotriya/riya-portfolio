import React from "react";
import Tag from "./tag";
import { Briefcase, GraduationCap, Heart, MapPin } from "lucide-react";
import { StatProps } from "@/constants/types";
import { stats } from "@/constants/data";


const Stat: React.FC<StatProps> = ({ title, value }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-6 px-9 pixel-shadow bg-white border-4 border-black">
      <span
        className={`pixel-font mb-2 text-violet-300 ${value === "∞" ? "text-4xl" : "text-2xl"}`}
      >
        {value}
      </span>
      <span className="text-xs text-gray-600">{title}</span>
    </div>
  );
};
const About = () => {

  return (
    <section className="flex flex-col gap-6 items-center w-full py-20 px-6">
      <Tag
        text="CHARACTER PROFILE"
        className="bg-linear-to-r from-purple-200 to-pink-200 text-white"
      />
      <span className="text-gray-600 mb-8">
        Learn more about the player behind the code
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full px-16 gap-9">
        <div className="grid grid-cols-2 gap-4">
          {stats.map(({ title, value }) => {
            return <Stat key={title} title={title} value={value} />;
          })}
        </div>
        <div className="p-6 bg-white border-4 border-black pixel-shadow">
          <div className="flex items-start gap-3 mb-4 pb-4 border-b-2 border-black">
            <MapPin className="w-5 h-5 mt-1 text-amber-300" />
            <div>
              <h3 className="mb-1 pixel-font text-sm text-black">LOCATION</h3>
              <p className="text-sm text-gray-600">Panjim, Goa</p>
            </div>
          </div>
          <div className="flex items-start gap-3 mb-4 pb-4 border-b-2 border-black">
            <Briefcase className="w-5 h-5 mt-1 text-amber-300" />
            <div>
              <h3 className="mb-1 pixel-font text-sm text-black">
                CURRENT ROLE
              </h3>
              <p className="text-sm text-gray-600">
                Junior React Native Developer @ UNM
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <GraduationCap className="w-5 h-5 mt-1 text-amber-300" />
            <div>
              <h3 className="mb-1 pixel-font text-sm text-black">EDUCATION</h3>
              <p className="text-sm text-gray-600">
                MCA(Master of Computer Applications)
              </p>
            </div>
          </div>
        </div>
        <div className="p-8 bg-white border-4 border-black pixel-shadow">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-5 h-5" />
            <h3 className="pixel-font text-sm text-black">ABOUT ME</h3>
          </div>
          <div className="space-y-4 text-gray-600 text-sm">
            <p>
              {`I'm a junior software developer passionate about building efficient and user-friendly applications. With experience in JavaScript, React, React Native, and Java, I have worked across domains like game development, mobile apps, and automation testing through personal projects and/or at workplace, making me highly versatile with a quick turnaround in teams working with tech stacks unknown to me. Always eager to learn and grow, I thrive in dynamic environments where I can collaborate and create impactful solutions.`}
            </p>
          </div>
        </div>
        <div className="p-6 bg-black text-white border-4 border-black pixel-shadow">
          <h4 className="mb-3 pixel-font text-sm text-white">CORE VALUES</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white"></div>
              <span>Write clean, maintainable code</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white"></div>
              <span>Never stop learning and improving</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white"></div>
              <span>Collaborate and communicate effectively</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white"></div>
              <span>Deliver value to users and clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
