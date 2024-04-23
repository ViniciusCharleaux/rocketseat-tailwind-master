'use client'

import React from "react";
import { useFileInput } from "./Root";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FileItem } from "./FileItem";

export const FileList:React.FC = () => {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 flex flex-col gap-3">
      {files.map(file => {
        return (
          <FileItem
            name={file.name}
            size={file.size}
          />
        )
      })}
    </div>
  )
}