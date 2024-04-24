'use client'


import {
  Search,
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
  LifeBuoy,
  Cog,
  Menu,
} from 'lucide-react'

import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import * as Collapsible from '@radix-ui/react-collapsible'

import { Button } from '../Button'
import { MainNavigation } from './MainNavigation'
import { NavItem } from './MainNavigation/NavItem'
import { InputControl, InputPrefix, InputRoot } from '../Input'
import { Logo } from './logo'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 dark:bg-zinc-900 dark:border-zinc-900 bg-white p-4 data-[state=open]:bottom-0 lg:right-auto  lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
         <InputRoot>
            <InputPrefix>
                <Search className="h-5 w-5 text-zinc-500"/>
            </InputPrefix>
            <InputControl placeholder="Search"/>
        </InputRoot>

        <MainNavigation/>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Support" icon={LifeBuoy} />
            <NavItem title="Settings" icon={Cog} />
          </nav>

          <UsedSpaceWidget />

          <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}