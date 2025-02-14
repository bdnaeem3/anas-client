import * as React from "react"
import { CalendarIcon, Check, ChevronLeft, ChevronRight, Clock, User, X } from "lucide-react"
import { addDays, format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"

export function ActivityScheduler({ onClose }) {
  console.log('here at line ActivitySchedular')
  const [date, setDate] = React.useState()
  const [selectedPerson, setSelectedPerson] = React.useState("")
  const [openCommandMenu, setOpenCommandMenu] = React.useState(false)

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <Card className="mt-4 p-6">
          <div className="flex items-center justify-between mb-4">
            <Tabs defaultValue="call" className="flex-1">
              <TabsList className="grid w-full grid-cols-7">
                <TabsTrigger value="call">Call</TabsTrigger>
                <TabsTrigger value="meeting">Meeting</TabsTrigger>
                <TabsTrigger value="task">Task</TabsTrigger>
                <TabsTrigger value="deadline">Deadline</TabsTrigger>
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="lunch">Lunch</TabsTrigger>
                <TabsTrigger value="files">Files</TabsTrigger>
              </TabsList>
            </Tabs>
            <Button variant="ghost" size="icon" onClick={onClose} className="ml-2">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-[2fr,1fr] gap-4">
            <div className="space-y-4">
              <div>
                <Input className="text-lg font-medium" placeholder="Add call title" />
              </div>
              <div className="grid grid-cols-[1fr,auto,1fr] gap-2">
                <div className="grid gap-2">
                  <Label>Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="grid gap-2">
                  <Label>Time</Label>
                  <Select>
                    <SelectTrigger className="w-[110px]">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 24 }).map((_, i) => (
                        <SelectItem key={i} value={`${i}:00`}>
                          {`${i}:00`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label>Duration</Label>
                  <Select defaultValue="30">
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="45">45 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Priority</Label>
                <Select defaultValue="normal">
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High Priority</SelectItem>
                    <SelectItem value="normal">Normal Priority</SelectItem>
                    <SelectItem value="low">Low Priority</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Description</Label>
                <Textarea placeholder="Add description or notes..." className="min-h-[100px] resize-none" />
              </div>
              <div className="grid gap-2">
                <Label>Participants</Label>
                <div className="flex flex-col gap-2">
                  <Popover open={openCommandMenu} onOpenChange={setOpenCommandMenu}>
                    <PopoverTrigger asChild>
                      <Button variant="outline" role="combobox" className="w-full justify-start">
                        <User className="mr-2 h-4 w-4" />
                        {selectedPerson || "Select person"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0" side="bottom" align="start">
                      <Command>
                        <CommandInput placeholder="Search people..." />
                        <CommandList>
                          <CommandEmpty>No person found.</CommandEmpty>
                          <CommandGroup>
                            <CommandItem
                              onSelect={(value) => {
                                setSelectedPerson(value)
                                setOpenCommandMenu(false)
                              }}
                            >
                              <User className="mr-2 h-4 w-4" />
                              Benjamin Leon
                            </CommandItem>
                            <CommandItem
                              onSelect={(value) => {
                                setSelectedPerson(value)
                                setOpenCommandMenu(false)
                              }}
                            >
                              <User className="mr-2 h-4 w-4" />
                              Sarah Connor
                            </CommandItem>
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  {selectedPerson && (
                    <div className="flex items-center gap-2 rounded-md border p-2">
                      <User className="h-4 w-4" />
                      <span className="flex-1">{selectedPerson}</span>
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setSelectedPerson("")}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="border-l pl-4">
              <div className="flex items-center justify-between mb-4">
                <Button variant="ghost" size="icon">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm font-medium">{format(date || new Date(), "EEEE, MMMM do")}</span>
                <Button variant="ghost" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground w-16">
                      {format(addDays(new Date().setHours(i + 8, 0), 0), "h:mm a")}
                    </span>
                    <div className="flex-1 h-8 rounded-md border border-dashed"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="outline">
              <Clock className="mr-2 h-4 w-4" />
              Save as draft
            </Button>
            <Button>
              <Check className="mr-2 h-4 w-4" />
              Schedule call
            </Button>
          </div>
        </Card>
      </motion.div>
    </AnimatePresence>
  )
}

