import Image from "next/image"
import { Button } from "./ui/button"
import { UnderlineLink } from "./underlineLink"
import { Github } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

interface ProjectCardProps {
    title: string,
    description: string
    image: string,
    technos: string[]
    href: string
    repository: string
    url: string
}

export const ProjectCard = ({ title, description, image, technos, repository, href, url }: ProjectCardProps) => {
    return (
        <div className="lg:w-1/2  min-h-[400px] w-full p-4">
            <div className="h-full rounded-xl overflow-hidden shadow-lg bg-secondary relative group">
                <div className="w-full h-2/5 relative">
                    <Image className="w-full h-full object-cover group-hover:opacity-50 transition-opacity duration-300 object-top" src={image} alt={title} width={1000} height={1000} />
                    {href !== "" &&
                        <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <UnderlineLink className="text-2xl font-bold" href={href}>{url}</UnderlineLink>
                        </div>
                    }
                </div>
                <div className="flex flex-col p-4 gap-1 h-3/5">
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="text-sm">{description}</p>
                    <div className="flex justify-between flex-grow items-end">
                        <div className="flex gap-2">
                            {technos && technos.map((techno, index) => (
                                <Tooltip key={index}>
                                    <TooltipTrigger>
                                        <Image className='transition-transform duration-150 transform hover:scale-110' src={`/technos_icons/${techno}.svg`} alt={techno} width={25} height={25} />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        {techno}
                                    </TooltipContent>
                                </Tooltip>
                            ))}
                        </div>
                        <div className="flex gap-3 items-end">
                            <a href={repository} target="_blank">
                                <Button className="border rounded-lg shadow-lg" variant={"outline"} size="default">
                                    <Github />
                                    Code
                                </Button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}