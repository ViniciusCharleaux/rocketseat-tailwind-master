import { ChevronDown } from "lucide-react";
import React, { ElementType } from "react";

export interface NavItemProps{
    title:string
    icon: ElementType
}

export const NavItem:React.FC<NavItemProps> = ({title, icon: ICon}) => {
    return (
        <a href="" className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50 dark:hover:bg-zinc-800">
            <ICon className="h-5 w-5 text-zinc-500"/>
            <span className="group-hover:text-violet-500 font-medium text-zinc-700 dark:text-zinc-100 dark:group-hover:text-violet-300">{title}</span>
            <ChevronDown className="group-hover:text-violet-400 ml-auto h-5 w-5 text-zinc-400"/>
        </a>
    )
}