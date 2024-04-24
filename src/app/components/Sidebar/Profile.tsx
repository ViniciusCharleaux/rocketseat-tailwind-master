import { LogOut } from 'lucide-react'
import { Button } from '../Button'
import React from 'react'

export const Profile:React.FC = () => {
  return (
    <div className="flex justify-between items-center gap-3">
      <img
        src="https://github.com/viniciusCharleaux.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Vinicius Charleaux
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          vinicius.charleaux@gmail.com
        </span>
      </div>
      <Button variant='ghost' type="button" >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}