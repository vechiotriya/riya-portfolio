"use client";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { PixelPet } from "@/components/pixelPet";
import Project from "@/components/project";
import Skill from "@/components/skill";
import { useScroll } from "motion/react";
import { Toaster } from "sonner";

export default function Home() {
const scrollY=useScroll().scrollY;
  return (
    <div className="min-h-screen bg-white relative">
      {/* Pixel Pet Companion */}
      <PixelPet scrollY={scrollY} />

      {/* Hero Section with Parallax */}
      <Hero scrollY={scrollY} />
      <main className="flex flex-col justify-center items-center">
    <Skill/>
    <Project/>
    <About/>
    <Contact/>
      </main>
      <Toaster />
      <footer >
      <Footer />
      </footer>
    </div>
  );
}
