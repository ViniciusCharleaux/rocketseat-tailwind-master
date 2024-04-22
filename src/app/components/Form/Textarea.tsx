import React, { ComponentProps } from "react";


export interface TextAreaProps extends ComponentProps<'textarea'>{}

export const TextArea:React.FC<TextAreaProps> = (props) => {
    return (
        <textarea 
            {...props}
            className="min-h-[120px] resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
        />
    )
}