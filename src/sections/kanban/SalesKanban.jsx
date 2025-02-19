import { useState } from "react"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import { Plus, MoreHorizontal, DollarSign, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { AddDealDialog } from "./AddDealDialog"
import CustomBreadcrumb from "@/theme/override/Breadcrumb"

const initialTasks = [
  {
    id: "1",
    title: "Acme Corp Deal",
    stage: "Qualified",
    priority: "High",
    value: 50000,
    dueDate: "2023-07-15",
    assignee: { name: "John Doe", avatar: "/avatars/john-doe.png" },
    progress: 25,
  },
  {
    id: "2",
    title: "TechStart Inc Partnership",
    stage: "Contact Made",
    priority: "Medium",
    value: 25000,
    dueDate: "2023-07-20",
    assignee: { name: "Jane Smith", avatar: "/avatars/jane-smith.png" },
    progress: 40,
  },
  {
    id: "3",
    title: "Global Solutions Project",
    stage: "Demo Scheduled",
    priority: "Low",
    value: 15000,
    dueDate: "2023-07-25",
    assignee: { name: "Bob Johnson", avatar: "/avatars/bob-johnson.png" },
    progress: 60,
  },
  {
    id: "4",
    title: "Innovate Ltd Contract",
    stage: "Proposal Made",
    priority: "High",
    value: 75000,
    dueDate: "2023-07-30",
    assignee: { name: "Alice Brown", avatar: "/avatars/alice-brown.png" },
    progress: 80,
  },
  {
    id: "5",
    title: "Future Systems Agreement",
    stage: "Negotiations Started",
    priority: "Medium",
    value: 40000,
    dueDate: "2023-08-05",
    assignee: { name: "Charlie Green", avatar: "/avatars/charlie-green.png" },
    progress: 90,
  },
]

const stages = ["Qualified", "Contact Made", "Demo Scheduled", "Proposal Made", "Negotiations Started"]

export function SalesKanban({ isSidebarOpen, setIsSidebarOpen }) {
  const [tasks, setTasks] = useState(initialTasks)

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }

    const newTasks = Array.from(tasks)
    const [reorderedItem] = newTasks.splice(
      newTasks.findIndex((task) => task.id === draggableId),
      1,
    )
    newTasks.splice(newTasks.findIndex((task) => task.stage === destination.droppableId) + destination.index, 0, {
      ...reorderedItem,
      stage: destination.droppableId,
    })

    setTasks(newTasks)
  }

  const handleAddDeal = (data) => {
    setIsSidebarOpen(false)
    // Add new deal logic here
  }

  const calculateTotalValue = (stage) => {
    return tasks.filter((task) => task.stage === stage).reduce((total, task) => total + task.value, 0)
  }

  const TaskCard = ({ task, isDragging, isGhost = false }) => (
    <Card
      className={`shadow-sm hover:shadow-md transition-all duration-200 ${isDragging && !isGhost ? "bg-blue-100 dark:bg-blue-900" : ""
        } ${isSidebarOpen
          ? "opacity-20 blur-sm bg-gray-50/50 dark:bg-gray-700/50"
          : isGhost
            ? "opacity-40 bg-blue-100/80 dark:bg-gray-700/80"
            : "bg-gray-50 dark:bg-gray-700"
        }`}
    >
      <CardHeader className="p-3 md:p-4 pb-1 md:pb-2 flex flex-row justify-between items-start">
        <CardTitle className="text-xs md:text-sm font-medium">{task.title}</CardTitle>
        <Button variant="secondary" size="sm" className="h-6 w-6 md:h-8 md:w-8 p-0">
          <MoreHorizontal className="h-3 w-3 md:h-4 md:w-4" />
        </Button>
      </CardHeader>
      <CardContent className="p-3 md:p-4 pt-0 pb-2">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center text-xs md:text-sm text-gray-500 dark:text-gray-400">
            <DollarSign className="h-3 w-3 md:h-4 md:w-4 mr-1" />
            {task.value.toLocaleString("en-US", { style: "currency", currency: "USD" })}
          </div>
          <Badge
            variant={task.priority === "High" ? "destructive" : task.priority === "Medium" ? "default" : "secondary"}
            className="text-xs"
          >
            {task.priority}
          </Badge>
        </div>
        <div className="flex items-center text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-2">
          <Calendar className="h-3 w-3 md:h-4 md:w-4 mr-1" />
          {task.dueDate}
        </div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <Avatar className="h-5 w-5 md:h-6 md:w-6 mr-2">
              <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
              <AvatarFallback>
                {task.assignee.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{task.assignee.name}</span>
          </div>
        </div>
        <Progress value={task.progress} className="h-1.5 md:h-2" />
      </CardContent>
    </Card>
  )

  return (
    <>
      <CustomBreadcrumb
        heading="Sales Pipeline"
      />
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="h-full bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 transition-all duration-500">
          <AddDealDialog isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} onSave={handleAddDeal} />

          <DragDropContext onDragEnd={onDragEnd}>
            <div className="flex space-x-4 md:space-x-6 overflow-x-auto pb-6 -mx-4 px-4 md:mx-0 md:px-0">
              {stages.map((stage) => (
                <Droppable key={stage} droppableId={stage}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={`flex-shrink-0 w-[280px] md:w-[300px] lg:w-80 ${snapshot.isDraggingOver ? "bg-blue-100 dark:bg-blue-900" : ""
                        }`}
                    >
                      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 md:p-4 h-full border border-gray-200 dark:border-gray-700">
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <h2 className="font-semibold text-sm md:text-base text-gray-700 dark:text-gray-300">{stage}</h2>
                            <div className="flex items-center mt-1">
                              <DollarSign className="h-3 w-3 md:h-4 md:w-4 text-gray-500 dark:text-gray-400" />
                              <span className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400">
                                {calculateTotalValue(stage).toLocaleString("en-US", { style: "currency", currency: "USD" })}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs px-3 py-2">
                              {tasks.filter((task) => task.stage === stage).length}
                            </Badge>
                            <Button variant="secondary" onClick={() => setIsSidebarOpen(true)} className="hidden md:flex">
                              <Plus />
                            </Button>
                          </div>
                        </div>
                        <ScrollArea className="h-[calc(100vh-280px)] md:h-[calc(100vh-220px)]">
                          {tasks
                            .filter((task) => task.stage === stage)
                            .map((task, index) => (
                              <Draggable key={task.id} draggableId={task.id} index={index}>
                                {(provided, snapshot) => (
                                  <>
                                    {/* Ghost card that stays in place */}
                                    {snapshot.isDragging && (
                                      <div className="mb-3 md:mb-4 pointer-events-none">
                                        <TaskCard task={task} isDragging={false} isGhost={true} />
                                      </div>
                                    )}
                                    {/* Actual draggable card */}
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      className={`mb-3 md:mb-4 transition-all duration-200 ${snapshot.isDragging ? "z-10 shadow-lg scale-105 rotate-3" : ""
                                        }`}
                                      style={{
                                        ...provided.draggableProps.style,
                                        transform: snapshot.isDragging
                                          ? `${provided.draggableProps.style?.transform} rotate(9deg)`
                                          : provided.draggableProps.style?.transform,
                                      }}
                                    >
                                      <TaskCard task={task} isDragging={snapshot.isDragging} />
                                    </div>
                                  </>
                                )}
                              </Draggable>
                            ))}
                          {provided.placeholder}
                        </ScrollArea>
                      </div>
                    </div>
                  )}
                </Droppable>
              ))}
            </div>
          </DragDropContext>
        </div>
      </div>
    </>
  )
}

