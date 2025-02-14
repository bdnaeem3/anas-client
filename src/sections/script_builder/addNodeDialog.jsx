import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Workflow } from "lucide-react"

export function AddNodeModal({ isOpen, onClose, onSelect }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Card className="cursor-pointer hover:bg-muted transition-colors" onClick={() => onSelect("text")}>
              <CardHeader className="flex flex-row items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                <CardTitle>Text</CardTitle>
              </CardHeader>
            </Card>
          </div>
          <div className="grid gap-2">
            <Card className="cursor-pointer hover:bg-muted transition-colors" onClick={() => onSelect("action")}>
              <CardHeader className="flex flex-row items-center gap-2">
                <Workflow className="h-5 w-5" />
                <CardTitle>Action</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

