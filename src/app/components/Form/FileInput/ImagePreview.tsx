'use client'

import { User } from "lucide-react"
import React, { useMemo } from "react"
import { useFileInput } from "./Root"

export const ImagePreview:React.FC = () => {
  const { files } = useFileInput()

  const previewUrl = useMemo(() => {
    if(files.length === 0){
      return null
    }

    return URL.createObjectURL(files[0])
  },[files])

  if(previewUrl === null){
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
        <User className="w-8 h-8 text-violet-500"/>
      </div>
    )
  }else{
    return (
      <img src={previewUrl} alt="" className="h-16 w-16 rounded-full object-cover"/>
    )
  }

  
 
}