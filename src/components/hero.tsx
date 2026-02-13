import { Code, CodeXml, Laptop, Smartphone, Sparkles } from "lucide-react";
import { motion, MotionValue, useTransform } from "motion/react";
import { Button } from "./ui/button";
import Tag from "./tag";
import Image from "next/image";
import { scrollToSection } from "@/lib/utils";

type HeroProps = {
  scrollY: MotionValue<number>;
};
const Hero = ({ scrollY }: HeroProps) => {
  const scrollOffset = useTransform(scrollY, (v) => v / 2);
  return (
    <section id="hero" className="relative h-[70%] pb-19 pt-5 flex items-center justify-center overflow-hidden bg-linear-to-b from-white to-gray-50">
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-20 grid-rows-20 w-full h-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="border-2 border-black/30"></div>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          y: scrollOffset,
        }}
      >
        <motion.div
          className="absolute top-20 left-[10%]"
          style={{ y: scrollY.get() * 0.25 }}
        >
          <Sparkles className="w-12 h-12 text-purple-400 opacity-40" />
        </motion.div>
        <motion.div
          className="absolute top-45 left-[17%]"
          style={{ y: scrollY.get() * 0.2 }}
        >
          <Smartphone className="w-12 h-13 text-amber-600 opacity-40" />
        </motion.div>
        <motion.div
          className="absolute top-27 right-[15%]"
          style={{ y: scrollY.get() * 0.3 }}
        >
          <Sparkles className="w-16 h-16 text-pink-400 opacity-30" />
        </motion.div>
        <motion.div
          className="absolute bottom-52 left-[20%]"
          style={{ y: scrollY.get() * 0.35 }}
        >
          <Sparkles className="w-10 h-10 text-blue-400 opacity-35" />
        </motion.div>

        <motion.div
          className="absolute bottom-40 right-[20%]"
          style={{ y: scrollY.get() * 0.1 }}
        >
          <CodeXml className="w-20 h-20 text-green-500 opacity-25" />
        </motion.div>
        <motion.div
          className="absolute bottom-70 right-[20%]"
          style={{ y: scrollY.get() * 0.25 }}
        >
          <Laptop className="w-15 h-15 text-cyan-700 opacity-25" />
        </motion.div>
        <motion.div
          className="absolute top-15 right-[25%]"
          style={{ y: scrollY.get() * 0.3 }}
        >
          <Code className="w-14 h-14 text-yellow-400 opacity-30" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-[15%]"
          style={{ y: scrollY.get() * 0.2 }}
        >
          <Code className="w-16 h-16 text-purple-400 opacity-20" />
        </motion.div>
      </motion.div>

      <div className="relative z-10 text-center px-6 md:max-w-5xl mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-40 h-40 border-8 border-black bg-white pixel-shadow overflow-hidden">
              <Image
                src="/images/profile.jpeg"
                alt="Riya Vechiot"
                width={300}
                height={500}
                loading="eager"
              />
            </div>
            <motion.div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-400 border-4 border-black"
            initial={{x:0, y: 0 }}
            animate={{ y: [0,160,160],x:[0,0,-150], transition: { repeat: Infinity,  duration: 6,ease:'easeIn'} }}
            ></motion.div>
            <motion.div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-400 border-4 border-black"
            initial={{ y: 0,x:0 }}
            animate={{ y: [0,-160,-160],x:[0,0,150], transition: { repeat: Infinity, duration: 6,ease:'easeIn' } }}></motion.div>
          </div>
        </div>

        <Tag
          text="Riya Vechiot"
          className="my-6 bg-linear-to-r from-pink-300 to-purple-200 text-white"
        />
        <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
          <span className="pixel-font text-3xl md:text-4xl block mb-4 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            MOBILE APP
          </span>
          <span className="pixel-font text-3xl md:text-4xl block relative text-black">
            DEVELOPER
            <div className="absolute -bottom-2 left-0 right-0 h-2 bg-linear-to-r from-pink-400 via-purple-400 to-blue-400"></div>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Building magical mobile experiences that users love ✨
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Button asChild onClick={()=>{scrollToSection("project")}}>
            <motion.button whileHover={{ y: -2,transition:{duration:0.1} }} whileTap={{ scale: 0.97 }}>
              VIEW PROJECTS
            </motion.button>
          </Button>
          <Button variant={"secondary"} asChild onClick={()=>{scrollToSection("contact")}}>
            <motion.button whileHover={{ y: -2,transition:{duration:0.1}  }} whileTap={{ scale: 0.97 }}>
            CONTACT ME
            </motion.button>
            </Button>
        </div>

        <div className="flex flex-col items-center absolute -bottom-18 left-47 md:left-62 pixel-float">
          <div className="w-6 h-9 border-4 border-black flex flex-col items-center justify-start p-2 bg-linear-to-b from-pink-200 to-purple-200">
            <div className="w-1 h-2 bg-black animate-bounce"></div>
          </div>
          <div className="pixel-font text-xs mt-2 text-center text-black">
            SCROLL
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
