'use client'

import React from "react";
import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

export interface TabItemProps{
    value: string
    title: string
    isSelected?: boolean
}

export const TabItem:React.FC<TabItemProps> = ({value, title, isSelected = false}) => {
    return (
        <Tabs.Trigger 
            value={value} 
            className="px-1 relative pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700"
        >
            <span>{title}</span>
            {isSelected && (
                <motion.div 
                    className="absolute left-0 right-0 h-0.5 bg-violet-700 -bottom-px"
                    layoutId="activeTab"
                />
            )}
        </Tabs.Trigger>  
    )
}