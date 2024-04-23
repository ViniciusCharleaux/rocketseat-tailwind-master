import { NextPage } from "next";
import { Logo } from "./logo";
import { MainNavigation } from "./MainNavigation";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import { InputControl, InputPrefix, InputRoot } from "../Input";
import { Search } from "lucide-react";


export const Sidebar:NextPage = () => {
    return (
        <aside className="border-b border-zinc-200 bottom-0 space-y-6 fixed left-0 top-0 right-0 z-20 p-4 bg-white lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:relative">
            <Logo />
            <InputRoot>
                <InputPrefix>
                    <Search className="h-5 w-5 text-zinc-500"/>
                </InputPrefix>
                <InputControl placeholder="search"/>
            </InputRoot>

            <MainNavigation/>
            <UsedSpaceWidget/>
            <div className="h-px bg-zinc-200" />
            <Profile />
        </aside>
    )
}