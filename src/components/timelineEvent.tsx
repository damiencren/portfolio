import Image from "next/image";
import { Button } from "./ui/button";
import { UnderlineLink } from "./underlineLink";

interface TimeLineEventProps {
    title: string;
    period: string;
    description?: string;
    imageUrl?:string
    links?: {href:string, title:string}[]
}

export const TimelineEvent = ({ title, period, description, imageUrl, links} : TimeLineEventProps)  => {
    return(
        <li className="mb-7 ms-4">
            <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-500"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">{period}</time>
            <div className="flex flex-row w-auto gap-4 items-center">
                {imageUrl && (
                    <Image className="shadow-lg" src={imageUrl} height={60} width={60} alt={`Logo ${title}`} />
                )}
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        {description}
                    
                        {links && 
                            links.map((link, index) => (
                                <UnderlineLink className='after:bg-gray-400 before:bg-gray-400' key={index} href={link.href}>{link.title}</UnderlineLink>
                            ))
                        }
                    </p>
                </div>
            </div>
        </li>
    )
}
