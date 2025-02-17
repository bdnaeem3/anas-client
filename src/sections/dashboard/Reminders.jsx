import { Card, CardContent } from "@/components/ui/card";

const reminders = [
    { time: "09:30 AM", description: "Check test results", priority: "Low", color: "text-green-600", dotColor: "bg-green-500" },
    { time: "10:00 AM", description: "Client Presentation", priority: "High", color: "text-red-600", dotColor: "bg-red-500" },
];

export default () => {
    return (
        <Card className="w-full p-4 rounded-2xl shadow-lg mt-4">
            <CardContent className="p-0">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Reminders</h2>
                    <span className="text-blue-600 text-sm cursor-pointer">Manage &gt;</span>
                </div>
                {reminders.map((reminder, index) => (
                    <div key={index} className="p-3 border rounded-lg mb-2 flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-medium">{reminder.time}</h3>
                            <p className="text-sm text-gray-600">{reminder.description}</p>
                        </div>
                        <div className="flex items-center">
                            <span className={`${reminder.color} text-sm mr-2`}>{reminder.priority}</span>
                            <span className={`w-2 h-2 rounded-full ${reminder.dotColor}`}></span>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};