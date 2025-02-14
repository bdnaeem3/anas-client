import { getBezierPath } from "reactflow"
import { PlusCircle } from "lucide-react"

export function EdgeWithButton({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  data,
}) {
  const [edgePath, centerX, centerY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  })

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path stroke-2 stroke-muted-foreground"
        d={edgePath}
        markerEnd={markerEnd}
      />
      <foreignObject
        width={20}
        height={20}
        x={centerX - 10}
        y={centerY - 10}
        className="overflow-visible"
        onClick={(event) => {
          event.stopPropagation()
          data?.onAddClick?.()
        }}
      >
        <div className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-background shadow-sm hover:bg-muted">
          <PlusCircle className="h-4 w-4" />
        </div>
      </foreignObject>
    </>
  )
}

