import { ArrowDown, ChevronDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DealHistory() {
  const historyItems = [
    {
      type: "stage",
      from: "Contact Made",
      to: "Qualified",
      date: "Today at 7:39 AM",
      user: "Crazy Volt (Web App)",
      changes: 2,
    },
    {
      type: "status",
      from: "Won",
      to: "Open",
      date: "Yesterday at 6:39 PM",
      user: "Crazy Volt (Web App)",
    },
    {
      type: "status",
      from: "Open",
      to: "Won",
      date: "Yesterday at 6:39 PM",
      user: "Crazy Volt (Web App)",
    },
    {
      type: "stage",
      from: "Contact Made",
      to: "Qualified",
      date: "Yesterday at 6:35 PM",
      user: "Crazy Volt (Web App)",
      changes: 2,
    },
    {
      type: "note",
      content: "[Sample] This lead comes from LinkedIn. It looks promising. I'll draft a proposal.",
      date: "Last Saturday at 8:00 AM",
      user: "Crazy Volt",
    },
    {
      type: "creation",
      date: "Last Saturday at 8:00 AM",
      user: "Crazy Volt (API)",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Button variant="ghost" className="px-0 font-medium">
          History
          <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </div>
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full justify-start border-b rounded-none h-9 bg-transparent">
          <TabsTrigger
            value="all"
            className="rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            All
          </TabsTrigger>
          <TabsTrigger
            value="activities"
            className="rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Activities (0)
          </TabsTrigger>
          <TabsTrigger
            value="notes"
            className="rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Notes (1)
          </TabsTrigger>
          <TabsTrigger
            value="email"
            className="rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Email (0)
          </TabsTrigger>
          <TabsTrigger
            value="files"
            className="rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Files
          </TabsTrigger>
          <TabsTrigger
            value="documents"
            className="rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Documents
          </TabsTrigger>
          <TabsTrigger
            value="invoices"
            className="rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Invoices
          </TabsTrigger>
          <TabsTrigger
            value="changelog"
            className="rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Changelog
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="relative">
        <div className="absolute left-2 top-0 bottom-0 w-px bg-border" />
        <div className="space-y-4">
          {historyItems.map((item, index) => (
            <div key={index} className="relative pl-10">
              <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-background bg-border" />
              {item.type === "note" ? (
                <Card className="bg-yellow-50 border-yellow-100">
                  <div className="p-4">
                    <div className="mb-1 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{item.date}</span>
                        <span>•</span>
                        <span>{item.user}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          Add a comment
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm">{item.content}</p>
                  </div>
                </Card>
              ) : (
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-1">
                    <div className="text-sm">
                      {item.type === "stage" && (
                        <>
                          Stage: {item.from} → {item.to}
                        </>
                      )}
                      {item.type === "status" && (
                        <>
                          Status: {item.from} → {item.to}
                        </>
                      )}
                      {item.type === "creation" && <>Deal created</>}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{item.date}</span>
                      <span>•</span>
                      <span>{item.user}</span>
                    </div>
                  </div>
                  {item.changes && (
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <ArrowDown className="mr-2 h-4 w-4" />
                      {item.changes} CHANGES
                    </Button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

