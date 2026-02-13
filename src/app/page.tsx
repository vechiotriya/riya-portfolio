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
  const scrollY = useScroll().scrollY;
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Pixel Pet Companion */}
      <PixelPet scrollY={scrollY} />
      {/* Hero Section with Parallax */}
      <Hero scrollY={scrollY} />
      <div className="relative z-10 bg-white">
        <Skill />
        <Project />
        <About />
        <Contact />
      </div>
      <Toaster />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
