import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pause } from "lucide-react";

export default () => {
    return (
        <Card className="w-full bg-white text-black p-4 rounded-2xl shadow-lg">
            <CardContent className="flex flex-col items-center p-0">
                <h2 className="text-lg font-semibold">Color Palette Selection</h2>
                <p className="text-sm text-gray-600">Over9k: Gamers App</p>

                <div className="my-6">
                    <Button className="w-24 h-24 rounded-full bg-orange-500 flex items-center justify-center shadow-md">
                        <Pause className="text-white w-12 h-12" />
                    </Button>
                </div>

                <div className="flex justify-between w-full text-center text-sm gap-4">
                    <div className="flex-1 bg-gray-300 py-3 rounded-[12px]">
                        <p className="text-gray-600">Today</p>
                        <p className="font-semibold">00:57:56</p>
                    </div>
                    <div className="flex-1 bg-gray-300 py-3 rounded-[12px]">
                        <p className="text-gray-600">Limits</p>
                        <p className="font-semibold">06:00:00</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};