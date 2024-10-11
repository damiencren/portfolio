import Image from "next/image"
import { Separator } from "./ui/separator"
import { Card } from "./ui/card"
import { Button } from "./ui/button"

interface ProjectCardProps {
    title:string,
    description:string
    dates:string,
    image:string,

}

export const ProjectCard = ({title, description, dates, image} : ProjectCardProps) => {
    return(
        <div className="w-[380px] h-[400px] border border-gray-300 border rounded-md gap-10 overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg group">
            <div className="w-full h-2/5 relative">
                <Image className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-60" src={image} alt={title} width={1000}  height={1000}/>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-col gap-2">
                        <Button>Github</Button>
                        <Button>Site Web</Button>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <h1 className="text-lg">{title}</h1>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    )
}