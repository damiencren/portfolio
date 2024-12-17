import Image from "next/image"
import { Button } from "./ui/button"
import { UnderlineLink } from "./underlineLink"
import { Github } from "lucide-react"

interface ProjectCardProps {
    title: string,
    description: string
    dates: string,
    image: string,
    technos: string[]
    href: string
    repository: string
    url: string
}

export const ProjectCard = ({ title, description, dates, image, technos, repository, href, url }: ProjectCardProps) => {
    return (
        <div className="lg:w-1/2  min-h-[400px] w-full p-2">
            <div className="h-full border border-0 rounded-xl overflow-hidden shadow-lg bg-secondary relative group">
                <div className="w-full h-2/5 relative">
                        <div className="w-full h-full">
                            <Image className="w-full h-full object-cover group-hover:opacity-50 transition-opacity duration-300 object-top" src={image} alt={title} width={1000} height={1000} />
                            {href !== "" &&
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <UnderlineLink className="text-2xl font-bold" href={href}>{url}</UnderlineLink>
                            </div>
                            }
                        </div>
                </div>
                <div className="flex flex-col p-4 gap-1 h-3/5">
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="text-sm">{description}</p>
                    <div className="flex justify-between flex-grow items-end">
                        <div className="flex gap-2">
                            {technos && technos.map((techno, index) => (
                                <Image className='transition-transform duration-200 transform hover:scale-110' key={index} src={`/technos_icons/${techno}.svg`} alt={techno} title={techno} width={25} height={25} />
                            ))}
                        </div>
                        <div className="flex gap-3 items-end">
                            <a href={repository} target="_blank">
                                <Button className="border rounded-lg shadow-lg" variant={"outline"} size="default">
                                    <Github />
                                    <span className="ml-2">Voir le code</span>
                                </Button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}