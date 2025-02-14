import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Pin } from "lucide-react"

export function DealTimeline() {
  const activities = [
    {
      type: "note",
      user: {
        name: "Sarah Connor",
        avatar: "/placeholder-user.jpg",
        initials: "SC",
      },
      content:
        "Called the client to discuss the proposal. They seem very interested and would like to schedule a follow-up meeting next week.",
      date: "2 hours ago",
      pinned: true,
      color: "bg-yellow-100 border-yellow-200",
    },
    {
      type: "email",
      user: {
        name: "John Smith",
        avatar: "/placeholder-user.jpg",
        initials: "JS",
      },
      content: "Sent initial proposal for review",
      date: "Yesterday at 4:30 PM",
      pinned: false,
      color: "bg-purple-100 border-purple-200",
    },
    {
      type: "system",
      content: "Deal moved to Proposal Made stage",
      date: "Yesterday at 2:15 PM",
      color: "bg-blue-100 border-blue-200",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <Card key={index} className={`${activity.pinned ? "bg-blue-50 border-blue-400" : ""}`}>
          <div className="p-4">
            <div className="mb-2 flex items-start justify-between gap-4">
              <div className="flex items-center gap-2">
                {activity.type !== "system" && (
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={activity.user.avatar} />
                    <AvatarFallback>{activity.user.initials}</AvatarFallback>
                  </Avatar>
                )}
                <div>
                  {activity.type !== "system" && <div className="font-medium">{activity.user.name}</div>}
                  <div className="text-sm text-muted-foreground">{activity.date}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {activity.pinned && <Pin className="h-4 w-4 text-primary" />}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>{activity.pinned ? "Unpin" : "Pin"}</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <p className="text-sm">{activity.content}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}

