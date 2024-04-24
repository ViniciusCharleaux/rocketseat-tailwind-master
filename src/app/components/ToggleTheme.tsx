'use client'

import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { Moon, Sun } from "lucide-react";

export const ToggleTheme:React.FC = () => {
  const [isDarkEnabled, setIsDarkEnabled] = useState(false)

  useEffect(() => {
    const localTheme = localStorage.getItem('localTheme')

    if(localTheme && JSON.parse(localTheme) === 'dark'){
      setIsDarkEnabled(true)
    }
  },[])

  useEffect(() => {
    if(isDarkEnabled){
      document.documentElement.classList.add('dark')
      localStorage.setItem('localTheme', JSON.stringify('dark'))

    }else{
      document.documentElement.classList.remove('dark')
      localStorage.setItem('localTheme', JSON.stringify('light'))
    }
  },[isDarkEnabled])


  return (
    <Button variant="ghost" onClick={() => setIsDarkEnabled(prev => !prev)}>
      {isDarkEnabled ? (
        <Sun className="w-6 h-6"/>
      ) : (
        <Moon className="w-6 h-6"/>
      )}
    </Button>
  )
}