import { UnderlineLink } from './underlineLink'

export const Footer = () => {
    return (
        <div className="flex items-center justify-center gap-4 w-full h-16">
            <h2 className='text-base text-gray-500 dark:text-gray-400'>© 2024 by <UnderlineLink className='after:bg-gray-400 before:bg-gray-400' href='https://github.com/damiencren'>Damien CREN</UnderlineLink>. All rights reserved.</h2>
        </div>
    )
}