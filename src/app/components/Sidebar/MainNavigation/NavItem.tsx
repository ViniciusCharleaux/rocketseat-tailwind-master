import { ChevronDown } from "lucide-react";
import React, { ElementType } from "react";

export interface NavItemProps{
    title:string
    icon: ElementType
}

export const NavItem:React.FC<NavItemProps> = ({title, icon: ICon}) => {
    return (
        <a href="" className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50">
            <ICon className="h-5 w-5 text-zinc-500"/>
            <span className="group-hover:text-violet-500 font-medium text-zinc-700">{title}</span>
            <ChevronDown className="group-hover:text-violet-400 ml-auto h-5 w-5 text-zinc-400"/>
        </a>
    )
}