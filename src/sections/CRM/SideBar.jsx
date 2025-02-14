import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  AlertCircle,
  BarChart3,
  Building2,
  ChevronRight,
  FileStack,
  FolderKanban,
  Info,
  Mail,
  Plus,
  User,
  Users,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

export default function Sidebar() {
  const [openSections, setOpenSections] = React.useState(["required-fields"])
  const [showRequired, setShowRequired] = React.useState(true)

  const toggleSection = (sectionId) => {
    setOpenSections((prev) => (prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId]))
  }

  const sections = [
    {
      id: "required-fields",
      label: "Required fields",
      icon: AlertCircle,
      badge: {
        text: "PROFESSIONAL",
        variant: "blue",
      },
      children: showRequired ? (
        <Card className="mx-4 mb-4">
          <div className="p-4">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-medium">Required Fields</h3>
              <Button variant="ghost" size="icon" className="h-6 w-6 -mr-2" onClick={() => setShowRequired(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Improve data quality by marking crucial deal fields as required for your team.
            </p>
            <div className="flex gap-2">
              <Button size="sm" className="bg-green-600 text-white hover:bg-green-700">
                Configure
              </Button>
              <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                Dismiss
              </Button>
            </div>
          </div>
        </Card>
      ) : null,
    },
    {
      id: "summary",
      label: "Deal Summary",
      icon: BarChart3,
      info: "Overview of deal value, probability, and key metrics",
    },
    {
      id: "details",
      label: "Deal Details",
      icon: FileStack,
    },
    {
      id: "source",
      label: "Lead Source",
      icon: FolderKanban,
      info: "Track where this deal originated from",
    },
    {
      id: "person",
      label: "Contact Person",
      icon: User,
    },
    {
      id: "organization",
      label: "Organization",
      icon: Building2,
    },
    {
      id: "products",
      label: "Products",
      icon: FileStack,
      badge: {
        text: "NEW",
        variant: "purple",
      },
    },
    {
      id: "participants",
      label: "Participants",
      icon: Users,
      count: 1,
    },
    {
      id: "smart-bcc",
      label: "Smart BCC",
      icon: Mail,
      info: "Automatically capture email communications",
    },
  ]

  const getBadgeStyles = (variant) => {
    switch (variant) {
      case "blue":
        return "bg-blue-50 text-blue-700 border-blue-100"
      case "green":
        return "bg-green-50 text-green-700 border-green-100"
      case "yellow":
        return "bg-yellow-50 text-yellow-700 border-yellow-100"
      case "purple":
        return "bg-purple-50 text-purple-700 border-purple-100"
      default:
        return "bg-gray-50 text-gray-700 border-gray-100"
    }
  }

  return (
    <TooltipProvider delayDuration={0}>
      <div className="w-80 border-r bg-white flex flex-col">
        <ScrollArea className="flex-1">
          <div className="p-2">
            {sections.map((section, index) => (
              <React.Fragment key={section.id}>
                {index > 0 && <Separator className="my-2" />}
                <div className="relative">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className={cn(
                      "w-full flex items-center justify-between px-2 py-2 rounded-md text-sm",
                      "hover:bg-gray-50 transition-colors duration-200",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                      openSections.includes(section.id) && "bg-gray-50",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <section.icon
                        className={cn("h-4 w-4", openSections.includes(section.id) ? "text-blue-600" : "text-gray-500")}
                      />
                      <span className="font-medium">{section.label}</span>
                      {section.badge && (
                        <span
                          className={cn(
                            "px-2 py-0.5 rounded-md text-xs font-medium border",
                            getBadgeStyles(section.badge.variant),
                          )}
                        >
                          {section.badge.text}
                        </span>
                      )}
                      {section.count !== undefined && (
                        <span className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 text-xs">
                          {section.count}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {section.info && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 text-gray-400" />
                          </TooltipTrigger>
                          <TooltipContent side="right" className="max-w-xs">
                            {section.info}
                          </TooltipContent>
                        </Tooltip>
                      )}
                      <ChevronRight
                        className={cn(
                          "h-4 w-4 text-gray-400 transition-transform duration-200",
                          openSections.includes(section.id) && "rotate-90",
                        )}
                      />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openSections.includes(section.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        {section.children || (
                          <div className="py-2 px-4">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full justify-start text-gray-600 hover:text-gray-900"
                            >
                              <Plus className="h-4 w-4 mr-2" />
                              Add {section.label.toLowerCase()}
                            </Button>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </React.Fragment>
            ))}
          </div>
        </ScrollArea>
      </div>
    </TooltipProvider>
  )
}

