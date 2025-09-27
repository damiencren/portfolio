import Image from "next/image";
import { DATA } from "./data/resume";
import { ProjectCard } from "@/components/projectCard";
import { TimelineEvent } from "@/components/timelineEvent";
import BlurFade from "@/components/ui/blur-fade";
import TypingAnimation from "@/components/ui/typing-animation";
import { Button } from "@/components/ui/button";
import { Download, Github, Instagram, Mail, FileText } from "lucide-react";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { ThemeButton } from "@/components/themeButton";
import NavBar from "@/components/navBar";
import { Badge } from "@/components/ui/badge";

const BLUR_FADE_DELAY = 0.1;


export default function Home() {

  const iconComponents = {
    Github,
    Mail,
    Instagram,
    Download,
    FileText,
  };

  return (
    <main className="min-h-[100vh] p-8 mt-10 font-inter">
      <div className="fixed inset-0 -z-10 dark:bg-black bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_700px_at_48%_200px,rgba(96,165,250,0.2),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_70%_500px,rgba(34,197,94,0.18),transparent)]" />
      </div>
      <DotPattern className={cn(
        "[mask-image:radial-gradient(650px_circle_at_center,rgba(255,255,255,0.5),transparent)]",
        "fixed"
      )} />
      <NavBar />
      <ThemeButton />

      <div className="flex flex-col mx-auto max-w-2xl gap-10 w-full">
        <section id="hero" className="scroll-mt-4">
          <BlurFade
            delay={BLUR_FADE_DELAY}>
            <div className="flex flex-col gap-4">
              <div className="gap-8 flex justify-between items-center">
                <div className="flex-col flex gap-4">
                  <TypingAnimation className="text-5xl text-left font-extrabold tracking-tight" duration={90} text={DATA.name} />
                  <p className="text-md">{DATA.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {DATA.socials.map((social, index) => {
                      const IconComponent = iconComponents[social.icon];
                      return (
                        <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" download={social.icon}>
                          <Button variant={social.variant} size="default">
                            {IconComponent && <IconComponent />}
                            <span>{social.label}</span>
                          </Button>
                        </a>
                      );
                    })}
                  </div>
                </div>
                <Image className="shadow-lg rounded-full w-32 h-32 p-0 hidden sm:block" src={DATA.avatarUrl} alt="portrait" height={100} width={100} />
              </div>
            </div>
          </BlurFade>
        </section>
        <section id="about" className="scroll-mt-4">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="flex min-h-0 flex-col gap-y-3">
              <h2 className="text-2xl font-bold">About</h2>
              <p>{DATA.aboutText}</p>

              <div className="mt-2 flex flex-wrap gap-2">
                {DATA.stack.map((techno, id) =>
                  <Badge className="w-fit" key={id}>
                    <Image className='p-1'src={`/technos_icons/${techno}.svg`} alt={techno} width={25} height={25} />
                    {techno}
                  </Badge>
                )}
              </div>
            </div>
          </BlurFade>
        </section>
        <section id="work" className="scroll-mt-4">
          <BlurFade
            delay={BLUR_FADE_DELAY * 3}>
            <div className="flex min-h-0 flex-col gap-y-3">
              <h2 className="text-2xl font-bold">Experience</h2>
              <ol className="relative border-s border-gray-300 dark:border-gray-700">
                {DATA.work.map((work, id) =>
                  <TimelineEvent
                    key={id}
                    title={work.company}
                    description={work.description}
                    href={work.href}
                    period={work.start}
                    imageUrl={work.logoUrl}
                  />
                )}
              </ol>
            </div>
          </BlurFade>
        </section>

        <section id="projects" className="scroll-mt-4">
          <BlurFade
            delay={BLUR_FADE_DELAY * 4}>
            <div className="flex min-h-0 flex-col gap-y-3 items-center">
              <h2 className="text-2xl font-bold pt-1">Selected Projects</h2>
              <div className="flex flex-wrap justify-center lg:w-[850px] w-full">
                {DATA.projects.map((project, id) =>
                  <ProjectCard
                    key={id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    technos={[...project.technos]}
                    href={project.href}
                    url={project.url}
                    repository={project.repository}
                  />
                )}
              </div>
            </div>
          </BlurFade>
        </section>
        <section id="education" className="scroll-mt-4">
          <BlurFade
            delay={BLUR_FADE_DELAY * 5}>
            <div className="flex min-h-0 flex-col gap-y-3">
              <h2 className="text-2xl font-bold">Education</h2>
              <ol className="relative border-s border-gray-300 dark:border-gray-700">
                {DATA.education.map((education, id) =>
                  <TimelineEvent
                    key={id}
                    title={education.school}
                    href={education.href}
                    description={education.degree}
                    period={education.start}
                    imageUrl={education.logoUrl}
                  />
                )}
              </ol>
            </div>
          </BlurFade>
        </section>
        <section id="events" className="scroll-mt-4">
          <BlurFade
            delay={BLUR_FADE_DELAY * 6}>
            <div className="flex min-h-0 flex-col gap-y-3">
              <h2 className="text-2xl font-bold">Events</h2>

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
