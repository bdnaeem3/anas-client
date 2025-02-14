import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Check } from "lucide-react"

export function DealStages() {
  const stages = [
    { name: "Qualified", completed: true, current: false, color: "text-blue-500" },
    { name: "Contact Made", completed: true, current: false, color: "text-green-500" },
    { name: "Meeting Scheduled", completed: true, current: false, color: "text-yellow-500" },
    { name: "Proposal Made", completed: false, current: true, color: "text-green-500" },
    { name: "Negotiation", completed: false, current: false, color: "text-purple-500" },
    { name: "Closed", completed: false, current: false, color: "text-pink-500" },
  ]

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        {stages.map((stage, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`h-auto w-40 flex-col gap-2 p-0 ${
                    stage.current ? stage.color : stage.completed ? "text-muted-foreground" : "text-muted-foreground/60"
                  }`}
                >
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                      stage.current
                        ? `${stage.color} bg-${stage.color.split("-")[1]}-100`
                        : stage.completed
                          ? "border-muted-foreground bg-muted"
                          : "border-muted-foreground/30"
                    }`}
                  >
                    {stage.completed ? <Check className="h-4 w-4" /> : <span className="text-sm">{index + 1}</span>}
                  </div>
                  <span className="text-sm">{stage.name}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{stage.name}</p>
                {stage.current && <p className="text-xs text-muted-foreground">Current stage</p>}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
      <Progress
        value={66}
        className="h-1"
        indicatorClassName="bg-gradient-to-r from-blue-500 via-green-500 to-orange-500"
      />
    </div>
  )
}

