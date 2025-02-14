import { useState } from "react"
import { SalesKanban } from "./SalesKanban"
import { AddDealDialog } from "./AddDealDialog"

export default function Kanban() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div>
      <SalesKanban isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <AddDealDialog
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onSave={(data) => {
          // Handle save
          setIsSidebarOpen(false)
        }}
      />
    </div>
  )
}

