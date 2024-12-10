import Image from "next/image";
import { DATA } from "./data/resume";
import { ProjectCard } from "@/components/projectCard";
import { TimelineEvent } from "@/components/timelineEvent";
import BlurFade from "@/components/ui/blur-fade";
import TypingAnimation from "@/components/ui/typing-animation";
import { Button } from "@/components/ui/button";
import { Download, Github, Instagram, Mail } from "lucide-react";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import ShineBorder from "@/components/ui/shine-border";
import { ThemeButton } from "@/components/themeButton";
import ReactMarkdown from 'react-markdown';
import { UnderlineLink } from "@/components/underlineLink";

const BLUR_FADE_DELAY = 0.04;


export default function Home() {

  const iconComponents = {
    Github,
    Mail,
    Instagram,
    Download,
  };

  return (
    <main className="min-h-[100vh] p-8 mt-10">
      <DotPattern className={cn(
        "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
        "fixed"
      )} />
      <ThemeButton />

      <div className="flex flex-col mx-auto w-full max-w-2xl gap-8 w-full">
        <section id="hero">
          <BlurFade
            delay={BLUR_FADE_DELAY}>
            <div className="flex flex-col gap-4">
              <div className="gap-8 flex justify-between items-center">
                <div className="flex-col flex gap-4">
                  <TypingAnimation className="text-base text-5xl text-left font-inter font-extrabold tracking-tight" duration={100} text={DATA.name} />
                  <p className="text-md">{DATA.description}</p>
                </div>
                <Image className="shadow-lg rounded-full w-32 h-32 p-0 hidden sm:block" src={DATA.avatarUrl} alt="moi" height={100} width={100} />
              </div>
              <div className="flex gap-2 flex-wrap">
                {DATA.socials.map((social, index) => {
                  const IconComponent = iconComponents[social.icon];
                  return (
                    <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" download={social.label === "CV"}>
                      <Button variant={social.variant} size="default">
                        {IconComponent && <IconComponent />}
                        <span className="ml-2">{social.label}</span>
                      </Button>
                    </a>
                  );
                })}
              </div>
            </div>
          </BlurFade>
        </section>
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="flex min-h-0 flex-col gap-y-3">
              <h2 className="text-2xl font-bold">A propos</h2>
              <ReactMarkdown className="text-justify"
                components={{
                  a: ({ href, children }) => (
                    <UnderlineLink href={href}>{children}</UnderlineLink>
                  )
                }}
              >
                {DATA.aboutText}
              </ReactMarkdown>
            </div>
          </BlurFade>
        </section>
        <section id="work">

          <BlurFade
            delay={BLUR_FADE_DELAY * 3}>
            <div className="flex min-h-0 flex-col gap-y-3">

              <h2 className="text-2xl font-bold">Experience</h2>

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
            delay={BLUR_FADE_DELAY * 4}>
            <div className="mt-[-30px] flex min-h-0 flex-col gap-y-3 items-center">
              <h2 className="text-2xl font-bold">Sélection de mes projets</h2>
              <ShineBorder className="justify-center dark:bg-card lg:w-[840px] w-full" color={"white"} borderWidth={2} borderRadius={15} duration={15}>
                <div className="dark:bg-card flex flex-wrap justify-center">
                  {DATA.projects.map((project, id) =>
                    <ProjectCard
                      key={id}
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      dates={project.dates}
                      technos={[...project.technos]}
                      href={project.href}
                      url={project.url}
                      repository={project.repository}
                    />
                  )}
                </div>
              </ShineBorder>
            </div>
          </BlurFade>
        </section>
        <section id="education">
          <BlurFade
            delay={BLUR_FADE_DELAY * 5}>
            <div className="flex min-h-0 flex-col gap-y-3">
              <h2 className="text-2xl font-bold">Etudes</h2>

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
            delay={BLUR_FADE_DELAY * 6}>
            <div className="flex min-h-0 flex-col gap-y-3">
              <h2 className="text-2xl font-bold">Hackatons</h2>

              <ol className="relative border-s border-gray-300 dark:border-gray-700">
                {DATA.hackathons.map((hackathon, id) =>
                  <TimelineEvent
                    key={id}
                    title={hackathon.title}
                    description={hackathon.description}
                    period={hackathon.dates}
                    imageUrl={hackathon.image}
                    links={[...hackathon.links]}
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
