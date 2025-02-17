import ColorPaletteSelection from "./ColorPaletteSelection";
import TaskList from "./TaskList";
import ActivityChart from "./ActivityChart";
import ProjectsWorked from "./ProjectsWorked";
import MeetingList from "./MeetingList";
import Reminders from "./Reminders";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-3 flex flex-col">
        <div className="grid grid-cols-3 gap-4">
          <ColorPaletteSelection />
          <TaskList />
          <MeetingList />
        </div>
      </div>

      <div className="col-span-1 flex flex-col gap-4">
        <ActivityChart />
        <ProjectsWorked />
        <Reminders />
      </div>
    </div>
  )
}
