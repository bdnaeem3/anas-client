import { useState } from "react"
import { CommandMenu } from "@/sections/CRM/CommandMenu"
import { DealView } from "@/sections/CRM/DealView"
import { UserNav } from "@/sections/CRM/NavBar"
import  Sidebar  from "@/sections/CRM/SideBar"

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-muted">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex flex-1 flex-col">
        <main className="flex-1 bg-secondary/30">
          <DealView />
        </main>
      </div>
    </div>
  )
}

