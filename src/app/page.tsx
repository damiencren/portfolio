import Image from "next/image";
import { DATA } from "./data/resume";
import { ProjectCard } from "@/components/projectCard";
import { TimelineEvent } from "@/components/timelineEvent";
import BlurFade from "@/components/ui/blur-fade";
import TypingAnimation from "@/components/ui/typing-animation";
import Meteors from "@/components/ui/meteors";
import { Button } from "@/components/ui/button";
import { Github, Images, Instagram, Linkedin, Mail, Moon, Sun } from "lucide-react";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import RetroGrid from "@/components/ui/retro-grid";
import ShineBorder from "@/components/ui/shine-border";
import { useTheme } from "next-themes";
import { ThemeButton } from "@/components/themeButton";
import { small } from "framer-motion/client";

const BLUR_FADE_DELAY = 0.04;
const theme = useTheme;


export default function Home() {

  return (
    <main className="min-h-[100dvh] p-8 mt-10">
        <DotPattern className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "fixed"
        )}/>
        <ThemeButton/>

      <div className="flex flex-col mx-auto w-full max-w-2xl gap-6">
        <section id="hero">
          <BlurFade
          delay={BLUR_FADE_DELAY}>
            <div className="flex flex-col gap-4">
              <div className="gap-8 flex justify-between items-center">
                <div className="flex-col flex gap-4">
                  <TypingAnimation className="text-base text-4xl text-left font-extrabold tracking-tight" duration={100} text={DATA.name}/>
                  <p className="text-md">{DATA.description}</p>
                </div>
                <Image className="rounded-full object-cover w-32 h-32 p-1" src={DATA.avatarUrl} alt="moi" height={100} width={100}/>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button variant={"outline"} size="sm">
                  <Github/>
                  <span className="ml-2">@damiencren</span>
                </Button>
                <Button variant={"secondary"} size="sm">
                  <Mail/>
                  <span className="ml-2">cren.damien@gmail.com</span>
                </Button>
                <Button variant={"secondary"} size="sm">
                  <Instagram/>
                  <span className="ml-2">damien-photos</span>
                </Button>
              </div>
            </div>
          </BlurFade>
        </section>
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY*2}>
          <div className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-base text-xl font-bold">A propos</h2>
            <p className="text-justify">{DATA.aboutText}</p>
          </div>
          </BlurFade>
        </section>
        <section id="work">

          <BlurFade
            delay={BLUR_FADE_DELAY*3}>
            <div className="flex min-h-0 flex-col gap-y-3">

              <h2 className="text-base text-xl font-bold">Work</h2>
                  
              <ol className="relative border-m border-gray-300 dark:border-gray-700">                  
                {DATA.work.map((work, id) =>
                  <TimelineEvent
                  key={id}
                  title={work.title}
                  description={work.description}
                  period={work.start}
                  imageUrl={work.logoUrl}
                  />
                )}
              </ol>
            </div>
          </BlurFade>
        </section>
        
        <section id="projects">
          <BlurFade 
          delay={BLUR_FADE_DELAY*4}>
            <div className="flex min-h-0 flex-col gap-y-3 items-center">
              <h2 className="text-base text-xl font-bold">Selection de mes projets</h2>
              <ShineBorder className="p-0" color={"white"} borderWidth={2} borderRadius={15} duration={15}>
              <div className="relative w-[90vw] flex flex-wrap justify-center gap-4 p-8 w-max md:w-[850px]">
                <RetroGrid className="absolute inset-0 border rounded-xl"/>
                    {DATA.projects.map((project, id) =>
                        <ProjectCard
                        key={id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        dates={project.dates}
                        />
                    )}
              </div>
              </ShineBorder>
            </div>
          </BlurFade>
        </section>
        <section id="education">
          <BlurFade
          delay={BLUR_FADE_DELAY*5}>
          <div className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-xl font-bold">Education</h2>
                
            <ol className="relative border-s border-gray-300 dark:border-gray-700">                  
              {DATA.education.map((education, id) =>
                <TimelineEvent
                key={id}
                title={education.school}
                description={education.degree}
                period={education.start}
                imageUrl={education.logoUrl}
                />
              )}
            </ol>
          </div>
          </BlurFade>
        </section>
        <section id="hackatons">
          <BlurFade
          delay={BLUR_FADE_DELAY*6}>
          <div className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-xl font-bold">Hackatons</h2>
                
            <ol className="relative border-s border-gray-300 dark:border-gray-700">                  
              {DATA.hackathons.map((hackathon, id) =>
                <TimelineEvent
                key={id}
                title={hackathon.title}
                description={hackathon.description}
                period={hackathon.dates}
                imageUrl={hackathon.image}
                />
              )}
            </ol>
          </div>
          </BlurFade>
        </section>
      </div>
    </main>
  );
}
