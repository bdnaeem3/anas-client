import { useCallback, useRef, useState } from "react"
import ReactFlow, {
  Background,
  Controls,
  Position,
  addEdge,
  useEdgesState,
  useNodesState,
  Handle,
} from "reactflow"
import { Input } from "@/components/ui/input"
import { Sidebar } from "./sidebar"
import "reactflow/dist/style.css"
import { MessageSquare, MoreHorizontal } from "lucide-react"

let id = 0

const TextNode = ({ data }) => (
  <div className="w-[320px] bg-white">
    <Input placeholder="Enter your text" className="py-5" defaultValue={data.text} onChange={(e) => data.onChange?.(e.target.value)} />
  </div>
)

const ActionNode = ({ data }) => (
  <div className="flex w-[320px] items-center bg-white">
    <Input placeholder="Enter action" defaultValue={data.text} onChange={(e) => data.onChange?.(e.target.value)} />
    <Handle
      type="source"
      position={Position.Right}
      className="h-4 w-4 rounded-full border-2 border-foreground bg-background"
    />
  </div>
)

const GroupNode = ({ data }) => (
    <div
      className="px-2 py-3 bg-white border border-slate-100 flex flex-col"
      style={{ width: "auto", minHeight: "50px" }}
    >
      <div className="flex items-center px-3 h-[42px] ">
        <MessageSquare className="h-4 w-4 text-blue-500 mr-4 flex-shrink-0" />
        <Input
          placeholder="Group Name"
          defaultValue={data.label}
          onChange={(e) => data.onLabelChange?.(e.target.value)}
          className="border-0 p-0 h-7 !text-base font-semibold focus-visible:ring-0 bg-transparent"
        />
        {/* <button className="ml-auto text-slate-400 hover:text-slate-600">
          <MoreHorizontal className="h-4 w-4" />
        </button> */}
      </div>
      {/* <div className="flex-grow py-3 px-4 space-y-2">{data.children}</div> */}
      <Handle
        type="target"
        position={Position.Right}
        className="w-[6px] h-[6px] min-w-[6px] !bg-slate-300 !border-slate-400"
        style={{ right: -3 }}
      />
    </div>
  )

const nodeTypes = {
  text: TextNode,
  action: ActionNode,
  group: GroupNode,
}

export default function Flow() {
  const reactFlowWrapper = useRef(null)
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [reactFlowInstance, setReactFlowInstance] = useState(null)

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges])

  const onDragOver = useCallback((event) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
  }, [])

  const isInsideGroup = useCallback(
    (position) => {
      if (!reactFlowInstance) return null

      const groupNodes = nodes.filter((node) => node.type === "group")

      return groupNodes.find((node) => {
        const nodeWidth = 400 // Fixed width for groups
        const nodeHeight = 400 // Fixed height for groups

        return (
          position.x > node.position.x &&
          position.x < node.position.x + nodeWidth &&
          position.y > node.position.y &&
          position.y < node.position.y + nodeHeight
        )
      })
    },
    [nodes, reactFlowInstance],
  )

  const onDrop = useCallback(
    (event) => {
      event.preventDefault()

      if (!reactFlowWrapper.current || !reactFlowInstance) return

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect()
      const type = event.dataTransfer.getData("application/reactflow")

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      })

      // Only allow Text and Action nodes to be dropped inside a group
      if (type !== "group") {
        const parentGroup = isInsideGroup(position)
        if (!parentGroup) {
          // If not dropped in a group, don't create the node
          return
        }

        // Calculate position relative to the group
        const nodesInGroup = nodes.filter((n) => n.parentNode === parentGroup.id)
        const nodeLength = nodesInGroup.length === 0 ? 1 : nodesInGroup.length + 1.3
        console.log(nodesInGroup.length, nodeLength)
        const yOffset = nodeLength * (nodesInGroup.length === 0 ? 67 : 50) // Stack nodes with 50px vertical spacing

        const newNode = {
          id: `${type}-${id++}`,
          type,
          position: {
            x: 1, // 1px from left edge of group
            y: yOffset,
          },
          data: {
            text: "",
            onChange: (text) => {
              setNodes((nds) =>
                nds.map((node) => (node.id === `${type}-${id - 1}` ? { ...node, data: { ...node.data, text } } : node)),
              )
            },
          },
          parentNode: parentGroup.id,
          extent: "parent",
          draggable: false,
          style: {
            padding: '15px',
          }
        }

        setNodes((nds) => nds.concat(newNode))
        return
      }

      // Create a new empty group
      const newGroup = {
        id: `${type}-${id++}`,
        type,
        position,
        data: {
          label: "Greeting",
          onLabelChange: (label) => {
            setNodes((nds) =>
              nds.map((node) => (node.id === `${type}-${id - 1}` ? { ...node, data: { ...node.data, label } } : node)),
            )
          },
        },
        style: {
          width: 350,
          height: 400,
          padding: "0",
          border: '0',
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
          backgroundColor: '#FFFFFF',
        },
      }

      setNodes((nds) => nds.concat(newGroup))
    },
    [isInsideGroup, reactFlowInstance, setNodes, nodes],
  )

  return (
    <div className="h-screen w-full">
      {/* <div className="ml-[250px] h-full" ref={reactFlowWrapper}> */}
      {/* <Sidebar /> */}
      <div className="h-full" ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={setReactFlowInstance}
          onDragOver={onDragOver}
          onDrop={onDrop}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background className="bg-gray-50" />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  )
}

