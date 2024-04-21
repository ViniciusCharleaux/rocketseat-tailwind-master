import { Mail, UploadCloud, User } from "lucide-react";
import { SettingTabs } from "./components/SettingsTabs";
import {InputControl, InputPrefix, InputRoot} from '@/app/components/Input'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingTabs/>

      <div className="mt-6 flex flex-col">
        <div className="flex justify-between items-center pb-5 border-b border-zinc-200">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
          </div>
          <div className="flex items-center gap-2">
              <button type="button" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50">Cancel</button>
              <button type="submit" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700" form="settings">Save</button>
          </div>
        </div>

        <form id="settings" action="" className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200">
          <div className="grid grid-cols-form gap-3">
            <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">Name</label>
            <div className="grid gap-6 grid-cols-2">
              <InputRoot>
                <InputControl id="firstName" defaultValue="Vinicius"/>
              </InputRoot>

              <InputRoot>
                <InputControl defaultValue="Charleaux"/>
              </InputRoot>
            </div>
            <div />
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email Address</label>
            <div className="grid gap-6 grid-cols-1">
              <InputRoot>
              <InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500"/>
              </InputPrefix>
                <InputControl id="email" defaultValue="vinicius.charleaux@gmail.com"/>
              </InputRoot>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="photo" className="text-sm font-medium text-zinc-700">
              Your photo
              <span className="block text-sm font-normal text-zinc-500 mt-0.5">This will be displayed on your profile.</span>
            </label>
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
                <User className="w-8 h-8 text-violet-500"/>
              </div>

              <label htmlFor="photo" className="group flex-1 flex cursor-pointer flex-col justify-center shadow-sm items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500">
                <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
                  <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-700" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-sm"> 
                    <span className="font-semibold text-violet-700">Click to upload</span>
                    {' '} or drag and drop
                  </span>
                  <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</span>
                </div>
              </label>
              <input type="file" className="sr-only" id="photo"/>

            </div>
            <div />
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">Role</label>
            <div className="grid gap-6 grid-cols-1">
              <InputRoot>
                <InputControl id="role" defaultValue="CTO"/>
              </InputRoot>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="country" className="text-sm font-medium text-zinc-700">Country</label>
            <div >
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="timezone" className="text-sm font-medium text-zinc-700">Timezone</label>
            <div >
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="block text-sm font-normal text-zinc-500 mt-0.5">Write a short introduction</span>
            </label>
            <div></div>
            <div />
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="projects" className="text-sm font-medium text-zinc-700">
              Portfolio projects
              <span className="block text-sm font-normal text-zinc-500 mt-0.5">Share a few snippets of your work.</span>
            </label>
            <div>
            </div>
            <div />
          </div>

          <div className="flex items-center justify-end pt-5 gap-2">
            <button type="button" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50">Cancel</button>
            <button type="submit" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700" >Save</button>
          </div>
        </form>
      </div>
      
    </>
  );
}
