import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useDispatch } from "react-redux";
import { addMeeting } from "@/actions/auth";

export default function CreateMeetingModal({ isOpen, onClose }) {
  const dispatch = useDispatch()
  const [meetingTitle, setMeetingTitle] = useState("");
  const [meetingTime, setMeetingTime] = useState("");
  const [meetingLink, setMeetingLink] = useState("");

  const handleCreate = () => {
    if (!meetingTitle.trim()) return;

    dispatch(addMeeting({
      title: meetingTitle,
      time: meetingTime,
      meetingLink: meetingLink
    }))
    setMeetingTitle("");
    setMeetingTime("");
    setMeetingLink("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent aria-describedby={meetingTitle} className="p-6 rounded-2xl">
        <DialogHeader>
          <DialogTitle>Create Meeting</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="Meeting Title"
            value={meetingTitle}
            onChange={(e) => setMeetingTitle(e.target.value)}
          />
          <Input
            type="time"
            value={meetingTime}
            onChange={(e) => setMeetingTime(e.target.value)}
            className="border rounded-md p-2"
          />
          <Input
            placeholder="Meeting Link (If video call)"
            value={meetingLink}
            onChange={(e) => setMeetingLink(e.target.value)}
            className="border rounded-md p-2"
          />
        </div>
        <DialogFooter className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleCreate}>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
