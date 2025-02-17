import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const data = [
    { name: "Over9k", value: 44, color: "#FFD700" },
    { name: "MagnumShop", value: 24, color: "#32CD32" },
    { name: "Doctor+", value: 18, color: "#DC143C" },
    { name: "AfterMidnight", value: 14, color: "#4169E1" },
  ];

export default () => {
  return (
    <Card className="w-full p-4 rounded-2xl shadow-lg">
      <CardContent className="p-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Projects worked</h2>
          <span className="text-red-600 text-sm bg-red-100 px-2 py-1 rounded-md">-5%</span>
        </div>
        <div className="flex justify-center items-center">
          <ResponsiveContainer width="40%" height={100}>
            <PieChart>
              <Pie data={data} dataKey="value" innerRadius={30} outerRadius={40} paddingAngle={5}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="ml-4">
            {data.map((entry) => (
              <div key={entry.name} className="flex items-center mb-1">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }}></span>
                <span className="ml-2 text-sm">{entry.name} - {entry.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};