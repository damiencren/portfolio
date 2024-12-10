import React, { ReactNode } from 'react';

interface UnderlineLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

export const UnderlineLink  = ({ children, href, className } : UnderlineLinkProps) => {
  return (
    <a href={href} target="_blank" className={`relative inline-block cursor-pointer transition-all ease-in-out`}>
      <span className={`font-bold after:bg-foreground before:bg-foreground before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute  after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]  ${className}`}>
        {children}
      </span>
    </a>
  );
};