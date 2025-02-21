import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CreateMeetingModal from "@/modals/CreateMeetingModal";
import { Video, MessageCircle, Plus } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";

export default () => {
    const [openModal, setOpenModal] = useState(false)
    const { meetings } = useSelector(state => state.Auth)

    const toggleModal = () => {
        setOpenModal(prev => !prev)
    }

    return (
        <Card className="w-full p-4 rounded-2xl shadow-lg">
            <CreateMeetingModal isOpen={openModal} onClose={toggleModal} />
            <CardContent className="p-0">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                        <h2 className="text-lg font-semibold">Today's meetings</h2>
                        <span className="text-gray-600 text-sm flex items-center justify-center text-gray-600 text-sm border rounded-[50%] w-6 h-6 ml-2 bg-gray-300">{meetings.length}</span>
                    </div>
                    <Button
                        variant="outline"
                        onClick={toggleModal}
                    >
                        Add Meeting
                    </Button>
                </div>

                <div className="grid grid-cols-2 gap-2 max-h-[225px] overflow-auto">
                    {meetings.map((meeting, index) => {
                        const period = meeting.time.split(':')[0] >= 12 ? "PM" : "AM";
                        return (
                            <div key={index} className={`p-2 rounded-lg shadow-md ${period == 'PM' ? 'bg-red-500' : 'bg-gray-400'} text-white flex flex-col justify-between`}>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs">
                                        {period}
                                    </span>
                                    <div className="w-8 h-8 bg-black/20 flex items-center justify-center rounded-full">
                                        {
                                            meeting.meetingLink
                                                ? <Video className="text-white w-5 h-5" />
                                                : <MessageCircle className="text-white w-5 h-5" />
                                        }
                                    </div>
                                </div>
                                <p className="text-lg font-semibold">{meeting.time}</p>
                                <p className="text-xs text-white/80">{meeting.title}</p>
                            </div>
                        )
                    })}
                    <div className="p-3 rounded-lg shadow-md bg-blue-500 text-white flex flex-col justify-center items-center cursor-pointer" onClick={toggleModal}>
                        <Plus className="w-6 h-6" />
                        <p className="text-sm mt-2">Schedule meeting</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};