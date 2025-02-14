export function PipelineStages() {
    const stages = [
      { name: "Qualified", days: 3, active: true },
      { name: "Contact Made", days: 0 },
      { name: "Meeting Scheduled", days: 0 },
      { name: "Proposal Made", days: 0 },
      { name: "Negotiations Started", days: 0 },
    ]
  
    return (
      <div className="flex h-16">
        {stages.map((stage, index) => (
          <div
            key={index}
            className={`flex flex-1 items-center justify-center border-r px-4 text-sm
              ${stage.active ? "bg-green-600 text-white" : "bg-gray-100 text-gray-600"}`}
          >
            <span>{stage.name}</span>
            <span className="ml-2">{stage.days} days</span>
          </div>
        ))}
      </div>
    )
  }
  
  