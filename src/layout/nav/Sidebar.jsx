import React from "react"
import {
    AudioWaveform,
    BookOpen,
    Bot,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/ui/nav-main.jsx"
import { NavProjects } from "@/components/ui/nav-projects.jsx"
import { NavUser } from "@/components/ui/nav-user"
import { TeamSwitcher } from "@/components/ui/team-switcher.jsx"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarProvider,
} from "@/components/ui/sidebar"
import TalkPilot from '/assets/talkpilot.svg'

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "https://github.com/shadcn.png",
    },
    teams: [
        {
            name: "Acme Inc",
            logo: TalkPilot,
            plan: "Enterprise",
        },
    ],
    navMain: [
        {
            title: "Playground",
            url: "#",
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: "History",
                    url: "#",
                },
                {
                    title: "Starred",
                    url: "#",
                },
                {
                    title: "Settings",
                    url: "#",
                },
            ],
        },
        {
            title: "Models",
            url: "#",
            icon: Bot,
            items: [
                {
                    title: "Genesis",
                    url: "#",
                },
                {
                    title: "Explorer",
                    url: "#",
                },
                {
                    title: "Quantum",
                    url: "#",
                },
            ],
        },
        {
            title: "Documentation",
            url: "#",
            icon: BookOpen,
            items: [
                {
                    title: "Introduction",
                    url: "#",
                },
                {
                    title: "Get Started",
                    url: "#",
                },
                {
                    title: "Tutorials",
                    url: "#",
                },
                {
                    title: "Changelog",
                    url: "#",
                },
            ],
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings2,
            items: [
                {
                    title: "General",
                    url: "#",
                },
                {
                    title: "Team",
                    url: "#",
                },
                {
                    title: "API Settings",
                    url: "#",
                },
                {
                    title: "Limits",
                    url: "#",
                },
            ],
        },
    ],
    projects: [
        {
            name: "Design Engineering",
            url: "#",
            icon: Frame,
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Travel",
            url: "#",
            icon: Map,
        },
    ],
}

export default function SideBar({
    children,
    ...props
}) {
    return (
        <div>
            <SidebarProvider defaultOpen={false}>
                <Sidebar collapsible="icon" {...props} className="sidebar-height">
                    <SidebarHeader>
                        <TeamSwitcher teams={data.teams} />
                    </SidebarHeader>
                    <SidebarContent>
                        <NavMain items={data.navMain} />
                        <NavProjects projects={data.projects} />
                    </SidebarContent>
                    <SidebarFooter>
                        <NavUser user={data.user} />
                    </SidebarFooter>
                </Sidebar>

                {/* Main content */}
                <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
            </SidebarProvider>
        </div>
    )
}

