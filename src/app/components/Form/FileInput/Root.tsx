'use client'

import React, { ComponentProps, createContext, useContext, useId, useState } from "react"

export type RootProps = ComponentProps<'div'>

type FileInputContextType = {
  id: string
  files: File[] 
  onFilesSelected: (files: File[], multiple: boolean) => void
}

const FileInputContext = createContext({} as FileInputContextType)


export const Root:React.FC<RootProps> = (props) => {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])


  function onFilesSelected(files: File[], multiple: boolean){
    if(multiple){
      setFiles(state => [...state, ...files])
    }else{
      setFiles(files)
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div className="w-full" {...props}/> 
    </FileInputContext.Provider>
  
  ) 
}

export const useFileInput = () => useContext(FileInputContext)