"use client"

import * as React from "react"
import {BookOpen, Bot, Command, LifeBuoy, Send,} from "lucide-react"

import {NavMain} from "@/app/components/nav-main"
import {NavSecondary} from "@/app/components/nav-secondary"
import {NavUser} from "@/app/components/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link";
import { FaBucket } from "react-icons/fa6";
import { VscJson } from "react-icons/vsc";

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Buckets",
            url: "/buckets",
            icon: FaBucket,
            items: [
                {
                    title: "Create",
                    url: "/buckets/create",
                },
            ],
        },
        {
            title: "Objects",
            url: "/objects",
            icon: VscJson,
        }
    ],
    navSecondary: [
        {
            title: "Support",
            url: "#",
            icon: LifeBuoy,
        },
        {
            title: "Feedback",
            url: "#",
            icon: Send,
        },
    ],
    projects: [
        // {
        //     name: "Design Engineering",
        //     url: "#",
        //     icon: Frame,
        // },
        // {
        //     name: "Sales & Marketing",
        //     url: "#",
        //     icon: PieChart,
        // },
        // {
        //     name: "Travel",
        //     url: "#",
        //     icon: Map,
        // },
    ],
}

export function AppSidebar({ ...props }) {
    return (
        <Sidebar variant="inset" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="#">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <Command className="size-4" />
                                </div>
                                <Link href={"/buckets"}>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold">DriftPix</span>
                                        <span className="truncate text-xs">Enterprise</span>
                                    </div>
                                </Link>

                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                {/*<NavProjects projects={data.projects} />*/}
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    )
}
