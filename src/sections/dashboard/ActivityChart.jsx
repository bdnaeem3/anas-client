import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { day: "Mon", value: 92 },
    { day: "Tue", value: 41 },
    { day: "Wed", value: 78 },
    { day: "Thu", value: 0 },
    { day: "Fri", value: 0 },
];

export default () => {
    return (
        <Card className="w-full p-4 rounded-2xl shadow-lg">
            <CardContent className="p-0">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Activity</h2>
                    <span className="text-green-600 text-sm bg-green-100 px-2 py-1 rounded-md">+12%</span>
                </div>
                <p className="text-3xl font-bold">70%</p>
                <ResponsiveContainer width="100%" height={150}>
                    <BarChart data={data}>
                        <XAxis dataKey="day" tick={{ fill: "black" }} />
                        <YAxis hide={true} />
                        <Tooltip cursor={{ fill: "#f0f0f0" }} />
                        <Bar dataKey="value" fill="#333" radius={[5, 5, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};