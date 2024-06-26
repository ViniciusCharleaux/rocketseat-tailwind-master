'use client'

import React from "react";
import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { TabItem } from "./TabItem";


export const SettingTabs:React.FC = () => {
    const [currentTab, setCurrentTab] = React.useState('tab1')

    return (
        <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
            <ScrollArea.Root className="w-full" type="scroll">
                <ScrollArea.Viewport className="w-full overflow-x-scroll">
                    <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
                        <TabItem value="tab1"  isSelected={currentTab === 'tab1'} title="My details"/>
                        <TabItem value="tab2"  isSelected={currentTab === 'tab2'} title="Profile"/>
                        <TabItem value="tab3"  isSelected={currentTab === 'tab3'} title="Password"/>
                        <TabItem value="tab4"  isSelected={currentTab === 'tab4'} title="Team"/>
                        <TabItem value="tab5"  isSelected={currentTab === 'tab5'} title="Plan"/>
                        <TabItem value="tab6"  isSelected={currentTab === 'tab6'} title="Billing"/>
                        <TabItem value="tab7"  isSelected={currentTab === 'tab7'} title="Email"/>
                        <TabItem value="tab8"  isSelected={currentTab === 'tab8'} title="Notifications"/>
                        <TabItem value="tab9"  isSelected={currentTab === 'tab9'} title="Integrations"/>
                        <TabItem value="tab10" isSelected={currentTab === 'tab10'}  title="API"/>
                    </Tabs.List>  
                </ScrollArea.Viewport>

                <ScrollArea.Scrollbar className="flex h-0.5 translate-y1.5 touch-none select-none flex-col bg-zinc-100" orientation="horizontal">
                    <ScrollArea.Thumb className="relative flex-1 bg-zinc-300" />
                </ScrollArea.Scrollbar>
            </ScrollArea.Root>
        </Tabs.Root>      
    )
}