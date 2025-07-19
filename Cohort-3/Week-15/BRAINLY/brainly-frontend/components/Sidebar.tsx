


import { Logo } from "../icons/Logo";
import { SidebarItem } from "./SidebarItem";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon"



export function Sidebar() {
    return <div className="h-screen bg-white border-r border-gray-200 w-72 fixed left-0 top-0 pl-6">
        <div className="flex text-2xl pt-8 items-center">
            <div className="pr-4 text-purple-600 ">
                <Logo/>
            </div>
            <div className="pl-2">
            Brainly
            </div>
        </div>


        <div className="pt-4 pl-4">
            <SidebarItem text="Twitter" icon={<TwitterIcon/>} />
            <SidebarItem text="Youtube" icon={<YoutubeIcon/>} />
        </div>

        

    </div>
}