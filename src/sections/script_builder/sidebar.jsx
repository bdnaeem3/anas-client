import { MessageSquare, Workflow, Square } from "lucide-react"
import React from "react" // Import React

export function Sidebar() {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType)
    event.dataTransfer.effectAllowed = "move"
  }

  return (
    <aside className="fixed left-0 top-0 z-50 h-screen w-[250px] border-r bg-background p-4">
      <div className="mb-4 text-lg font-semibold">Nodes</div>
      <div className="space-y-4">
        <div
          className="flex cursor-grab items-center gap-2 rounded-lg border bg-card p-3 shadow-sm"
          onDragStart={(e) => onDragStart(e, "text")}
          draggable
        >
          <MessageSquare className="h-5 w-5" />
          <span>Text</span>
        </div>
        <div
          className="flex cursor-grab items-center gap-2 rounded-lg border bg-card p-3 shadow-sm"
          onDragStart={(e) => onDragStart(e, "action")}
          draggable
        >
          <Workflow className="h-5 w-5" />
          <span>Action</span>
        </div>
        <div
          className="flex cursor-grab items-center gap-2 rounded-lg border bg-card p-3 shadow-sm"
          onDragStart={(e) => onDragStart(e, "group")}
          draggable
        >
          <Square className="h-5 w-5" />
          <span>Group</span>
        </div>
      </div>
    </aside>
  )
}

