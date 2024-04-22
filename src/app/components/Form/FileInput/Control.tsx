'use client'

import React, { ChangeEvent, ComponentProps } from "react"
import { useFileInput } from "./Root"

export type ControlProps = ComponentProps<'input'>

export const Control:React.FC<ControlProps> = ({multiple = false, ...props}) => {
  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>){
    if(!event.target.files?.length){
      return 
    }

    const files = Array.from(event.target.files)
    onFilesSelected(files, multiple)
  }

  return (
    <input type="file" className="sr-only" id={id} {...props} onChange={handleFilesSelected} multiple={multiple}/>
  )
}