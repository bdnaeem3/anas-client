import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { X, Plus } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const pipelineStages = ["Qualified", "Contact Made", "Demo Scheduled", "Proposal Made", "Negotiations Started"]

export function AddDealDialog({ isOpen, onClose, onSave }) {
  const [selectedStage, setSelectedStage] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      // Add a slight delay before starting the animation
      const timer = setTimeout(() => setIsAnimating(true), 50)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 500)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isOpen && !isAnimating) {
    return null
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-all duration-500 ease-in-out ${
          isAnimating ? (isOpen ? "bg-opacity-50" : "bg-opacity-0") : "bg-opacity-0"
        } ${isAnimating ? "visible" : "invisible"}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 w-full sm:w-[800px] md:w-[900px] bg-background shadow-lg transform transition-all duration-500 ease-in-out ${
          isAnimating
            ? isOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
            : "translate-x-full opacity-0"
        } z-50`}
        style={{
          transitionDelay: isOpen ? "50ms" : "0ms",
        }}
      >
        <div
          className={`h-full flex flex-col transition-all duration-500 ease-in-out ${
            isAnimating ? (isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0") : "scale-95 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-lg font-semibold">Add deal</h2>
            <Button variant="secondary" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto p-6">
            <div className="flex space-x-6">
              {/* Left Column - Deal Information */}
              <div className="flex-1 space-y-4">
                <div>
                  <Label>Contact person</Label>
                  <Input placeholder="Search or add person" />
                </div>

                <div>
                  <Label>Organization</Label>
                  <Input placeholder="Search or add organization" />
                </div>

                <div>
                  <Label>Title</Label>
                  <Input placeholder="Deal title" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Value</Label>
                    <Input type="number" placeholder="0.00" />
                  </div>
                  <div>
                    <Label>Currency</Label>
                    <Select defaultValue="PKR">
                      <SelectTrigger>
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="PKR">Pakistan Rupee</SelectItem>
                        <SelectItem value="USD">US Dollar</SelectItem>
                        <SelectItem value="EUR">Euro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label>Pipeline stage</Label>
                  <div className="flex gap-1 mt-2">
                    <TooltipProvider>
                      {pipelineStages.map((stage, index) => (
                        <Tooltip key={stage}>
                          <TooltipTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className={`flex-1 h-8 ${
                                index <= selectedStage ? "bg-green-500 text-white hover:bg-green-600" : ""
                              }`}
                              onClick={() => setSelectedStage(index)}
                            >
                              {index + 1}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{stage}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </TooltipProvider>
                  </div>
                </div>

                <div>
                  <Label>Labels</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Add labels" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hot">Hot Lead</SelectItem>
                      <SelectItem value="cold">Cold Lead</SelectItem>
                      <SelectItem value="warm">Warm Lead</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Expected close date</Label>
                  <Input type="date" />
                </div>

                <div>
                  <Label>Owner</Label>
                  <Select defaultValue="you">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="you">Crazy Volt (You)</SelectItem>
                      <SelectItem value="john">John Doe</SelectItem>
                      <SelectItem value="jane">Jane Smith</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Source channel</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">Website</SelectItem>
                      <SelectItem value="referral">Referral</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Vertical Separator */}
              <Separator orientation="vertical" className="h-auto" />

              {/* Right Column - Person Information */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-4">PERSON</h3>
                <Separator className="mb-4" />

                <div className="space-y-6">
                  {/* Phone Section */}
                  <div className="space-y-4">
                    <Label>Phone</Label>
                    <div className="space-y-3">
                      <div className="grid grid-cols-[1fr,auto] gap-2">
                        <Input placeholder="Phone number" />
                        <Select defaultValue="work">
                          <SelectTrigger className="w-[100px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="work">Work</SelectItem>
                            <SelectItem value="home">Home</SelectItem>
                            <SelectItem value="mobile">Mobile</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Plus className="h-4 w-4 mr-2" /> Add phone
                      </Button>
                    </div>
                  </div>

                  {/* Email Section */}
                  <div className="space-y-4">
                    <Label>Email</Label>
                    <div className="space-y-3">
                      <div className="grid grid-cols-[1fr,auto] gap-2">
                        <Input placeholder="Email address" />
                        <Select defaultValue="work">
                          <SelectTrigger className="w-[100px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="work">Work</SelectItem>
                            <SelectItem value="personal">Personal</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Plus className="h-4 w-4 mr-2" /> Add email
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t p-6">
            <div className="flex justify-end space-x-4">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={() => onSave({})}>Save</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

