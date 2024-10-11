import Image from "next/image";
import { Button } from "./ui/button";

interface TimeLineEventProps {
    logoUrl?: string;
    altText?: string;
    title: string;
    subtitle?: string;
    href?: string;
    badges?: readonly string[];
    period: string;
    description?: string;
    imageUrl?:string
}

export const TimelineEvent = ({logoUrl, altText, title, subtitle, href, badges, period, description, imageUrl} : TimeLineEventProps)  => {
    return(
        <li className="mb-7 ms-4">
            <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-500"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">{period}</time>
            <div className="flex flex-row w-auto gap-4 items-center">
                {imageUrl && (
                    <Image src={imageUrl} height={60} width={60} alt={`Logo ${title}`} />
                )}
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
                </div>
            </div>
        </li>
    )
}
