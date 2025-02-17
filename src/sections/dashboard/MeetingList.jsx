import { Card, CardContent } from "@/components/ui/card";
import { Video, MessageCircle, Plus } from "lucide-react";

export default () => {
    const meetings = [
        { time: "10:00", period: "AM", title: "Present the project and gather feedback", icon: <MessageCircle className="text-white w-5 h-5" />, bgColor: "bg-red-500" },
        { time: "01:00", period: "PM", title: "Meeting with UX team", icon: <Video className="text-white w-5 h-5" />, bgColor: "bg-gray-400" },
        { time: "03:00", period: "PM", title: "Onboarding of the project", icon: <MessageCircle className="text-white w-5 h-5" />, bgColor: "bg-gray-400" },
    ];

    return (
        <Card className="w-full p-4 rounded-2xl shadow-lg">
            <CardContent className="p-0">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                        <h2 className="text-lg font-semibold">Today's meetings</h2>
                        <span className="text-gray-600 text-sm flex items-center justify-center text-gray-600 text-sm border rounded-[50%] w-6 h-6 ml-2 bg-gray-300">{meetings.length}</span>
                    </div>
                    <a href="#" className="text-blue-600 text-sm">View all &gt;</a>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    {meetings.map((meeting, index) => (
                        <div key={index} className={`p-2 rounded-lg shadow-md ${meeting.bgColor} text-white flex flex-col justify-between`}>
                            <div className="flex justify-between items-center">
                                <span className="text-xs">{meeting.period}</span>
                                <div className="w-8 h-8 bg-black/20 flex items-center justify-center rounded-full">
                                    {meeting.icon}
                                </div>
                            </div>
                            <p className="text-lg font-semibold">{meeting.time}</p>
                            <p className="text-xs text-white/80">{meeting.title}</p>
                        </div>
                    ))}
                    <div className="p-3 rounded-lg shadow-md bg-blue-500 text-white flex flex-col justify-center items-center">
                        <Plus className="w-6 h-6" />
                        <p className="text-sm mt-2">Schedule meeting</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};