import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pause, Play } from "lucide-react";
import CreateTaskModal from "@/modals/CreateTaskModal";
import { useState } from "react";
import { useSelector } from "react-redux";

export default () => {
    const [openModal, setOpenModal] = useState(false)

    const toggleModal = () => {
        setOpenModal(prev => !prev)
    }

    const { tasks } = useSelector(state => state.Auth)

    return (
        <Card className="w-full p-4 rounded-2xl shadow-lg">
            <CreateTaskModal isOpen={openModal} onClose={toggleModal} />
            <CardContent className="p-0 max-h-[270px] overflow-auto">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                        <h2 className="text-lg font-semibold">Today's tasks</h2>
                        <span className="flex items-center justify-center text-gray-600 text-sm border rounded-[50%] w-6 h-6 ml-2 bg-gray-300">{tasks.length}</span>
                    </div>
                    <Button
                        variant="outline"
                        onClick={toggleModal}
                    >
                        Add Task
                    </Button>
                </div>

                {tasks.map((task, index) => (
                    <div
                        key={index}
                        className={`flex items-center justify-between p-3 rounded-lg shadow-md my-2 ${task.isActive ? "bg-orange-100" : "bg-gray-100"}`}
                    >
                        <Button className={`w-10 h-10 rounded-full flex items-center justify-center ${task.isActive ? "bg-orange-500" : "bg-blue-500"}`}>
                            {task.isActive ? <Pause className="text-white w-5 h-5" /> : <Play className="text-white w-5 h-5" />}
                        </Button>
                        <div className="flex flex-col flex-1 ml-3">
                            <p className="text-sm font-semibold">{task.title}</p>
                            <p className="text-xs text-gray-600">{task.subtitle}</p>
                        </div>
                        <button className="text-gray-400">⭐</button>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};