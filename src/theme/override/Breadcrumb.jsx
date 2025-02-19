import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import {
    SidebarInset,
    SidebarTrigger,
} from "@/components/ui/sidebar"

const CustomBreadcrumb = ({ heading, links }) => {
    const [portalAvailable, setPortalAvailable] = useState(null);

    useEffect(() => {
        return () => {
            setPortalAvailable(document.getElementById("breadcrumb-portal"));
        }
    }, []);

    return portalAvailable ? createPortal(
        <div>
            <SidebarInset>
                <header>
                    <div className="px-4 flex flex-col ">
                        {/* Main content */}
                        <div className="flex justify-between md:items-center gap-4 md:flex-row flex-col">
                            <div className="space-y-2">
                                <h1 className="text-2xl font-bold tracking-tight">{heading}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex px-4 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b border-border">
                        <SidebarTrigger className="-ml-1 bg-gray-50" />
                        {/* <Separator orientation="vertical" className="mr-2 h-4" /> */}
                        <Breadcrumb>
                        {/* //! Create an array for breadcrumb */}
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="#">Settings</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>API Settings</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
            </SidebarInset>
        </div>,
        portalAvailable
    ) : null
}

export default CustomBreadcrumb