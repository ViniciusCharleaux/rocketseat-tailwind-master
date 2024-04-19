import { Search } from "lucide-react";
import React, { ComponentProps } from "react";

export type InputPrefixProps = ComponentProps<'div'>

export const InputPrefix:React.FC<InputPrefixProps> = ({...props}) => {
    return (
        <div {...props} />
    )
}

export type InputControlProps = ComponentProps<'input'>

export const InputControl:React.FC<InputControlProps> = ({...props}) => {
    return (
        <input 
            className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600" 
            placeholder="Search"
            {...props}
        />
    )
}

export type InputRootProps = ComponentProps<'div'>

export const InputRoot:React.FC<InputRootProps> = ({...props}) => {
    return (
        <div {...props} className="flex placeholder:w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm" />
    )
}