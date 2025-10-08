import Image from "next/image";
import { UnderlineLink } from "./underlineLink";

interface TimeLineEventProps {
    title: string;
    period: string;
    description?: string;
    href?: string;
    imageUrl?: string
    links?: { href: string, title: string }[]
}

export const TimelineEvent = ({ title, period, description, href, imageUrl, links }: TimeLineEventProps) => {
    return (
        <li className="mb-7 ms-4">
            <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-500"></div>
            <time className="text-sm font-normal leading-none text-gray-500 dark:text-gray-500">{period}</time>
            <div className="flex flex-row w-auto mt-1 gap-4 items-center">
                {imageUrl && (
                    <Image className="shadow-lg rounded-sm" src={imageUrl} height={65} width={65} alt={`Logo ${title}`} />
                )}
                <div className="flex flex-col">
                    {href ? (
                        <UnderlineLink href={href}>{title}</UnderlineLink>
                    ) : (
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                    )}
                    <p className="text-base font-normal text-justify text-gray-500 dark:text-gray-400">
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
