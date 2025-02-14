import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Calendar, Check, FileText, Mail, MessageSquare, Phone, PlusCircle, Share2, Star } from "lucide-react"
import { DealStages } from "./dealStages"
import { DealTimeline } from "./DealTimeLine"
import { ActivityScheduler } from "./ActivitySchedular"
import { DealHistory } from "./DealHistory"
import { motion, AnimatePresence } from "framer-motion"

export function DealView() {
  const [showActivityScheduler, setShowActivityScheduler] = useState(false)

  useEffect(() => {
    console.log(showActivityScheduler)
  }, [showActivityScheduler])

  return (
    <div className="flex h-[calc(100vh-4rem)] gap-4 p-4">
      <div className="flex flex-1 flex-col gap-4">
        <Card className="bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">Willamette Co deal</h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Created 2 days ago</span>
                <span>•</span>
                <span>Last updated 4 hours ago</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Star className="h-4 w-4 text-yellow-500" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Mark as important</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Share deal</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Button className="bg-green-400 text-white hover:bg-green-500">
                <Check className="mr-2 h-4 w-4" />
                Mark as won
              </Button>
            </div>
          </div>
        </Card>

        <Card className="flex-1 rounded-b-md">
          <div className="border-b bg-muted/80 p-4">
            <DealStages />
          </div>
          <Tabs defaultValue="activity" className="h-[calc(100%-8rem)]">
            {/* <TabsList className="w-full justify-start gap-4 rounded-none border-b bg-card px-4">
              <TabsTrigger
                value="activity"
                className="relative h-11 rounded-none border-b-2 border-transparent px-4 pb-3 pt-2 font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-foreground"
              >
                Activity
              </TabsTrigger>
              <TabsTrigger
                value="notes"
                className="relative h-11 rounded-none border-b-2 border-transparent px-4 pb-3 pt-2 font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-foreground"
              >
                Notes
              </TabsTrigger>
              <TabsTrigger
                value="files"
                className="relative h-11 rounded-none border-b-2 border-transparent px-4 pb-3 pt-2 font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-foreground"
              >
                Files
              </TabsTrigger>
              <TabsTrigger
                value="emails"
                className="relative h-11 rounded-none border-b-2 border-transparent px-4 pb-3 pt-2 font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-foreground"
              >
                Emails
              </TabsTrigger>
            </TabsList> */}
            <TabsContent value="activity" className="h-full overflow-auto p-4">
              <div className="mb-4 flex gap-2">
                <Button variant="outline" size="sm" className=" text-sm gap-2" onClick={() => setShowActivityScheduler(!showActivityScheduler)}>
                  <Calendar className="h-4 w-4 text-blue-500" />
                  Schedule
                </Button>
                <Button variant="outline" size="sm" className=" text-sm gap-2">
                  <Phone className="h-4 w-4 text-green-500" />
                  Call
                </Button>
                <Button variant="outline" size="sm" className=" text-sm gap-2">
                  <Mail className="h-4 w-4 text-purple-500" />
                  Email
                </Button>
                <Button variant="outline" size="sm" className=" text-sm gap-2">
                  <MessageSquare className="h-4 w-4 text-orange-500" />
                  Note
                </Button>
                <Button variant="outline" size="sm" className=" text-sm gap-2">
                  <FileText className="h-4 w-4 text-pink-500" />
                  Task
                </Button>
              </div>
              {showActivityScheduler && <ActivityScheduler onClose={() => setShowActivityScheduler(false)} />}
              <div className="mt-6">
                <DealTimeline />
              </div>
              <div className="mt-6">
                <DealHistory />
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>

      <Card className="w-80 overflow-hidden bg-card/50">
        <div className="border-b p-4">
          <h2 className="font-semibold">Deal Details</h2>
        </div>
        <div className="space-y-4 p-4">
          <div>
            <label className="text-sm font-medium">Value</label>
            <div className="mt-1 flex items-center gap-2">
              <div className="text-3xl font-bold text-green-500">$24,000</div>
              <Button variant="ghost" size="sm" className="h-6 gap-1 px-2 text-xs">
                <PlusCircle className="h-3 w-3" />
                Add products
              </Button>
            </div>
          </div>
          <Separator />
          <div>
            <label className="text-sm font-medium">Probability</label>
            <div className="mt-2">
              <div className="mb-1 flex items-center justify-between text-sm">
                <span>Closing probability</span>
                <span className="font-medium text-blue-600">75%</span>
              </div>
              <Progress value={75} className="h-2" indicatorClassName="bg-blue-500" />
            </div>
          </div>
          <Separator />
          <div>
            <label className="text-sm font-medium">Expected close date</label>
            <div className="mt-1 text-sm text-orange-600">March 15, 2024</div>
          </div>
          <Separator />
          <div>
            <label className="text-sm font-medium">Owner</label>
            <div className="mt-1 flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-purple-500" />
              <span className="text-sm">Sarah Connor</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

