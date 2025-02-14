import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function RequiredFields() {
  return (
    <Card className="h-fit w-80 p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-semibold">Required fields</h2>
        <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-600">PROFESSIONAL</span>
      </div>

      <p className="mb-4 text-sm text-gray-500">
        A simple way to improve your data quality. Mark fields as required to ensure your team enters crucial deal data.
      </p>

      <div className="flex gap-2">
        <Button size="sm" className="bg-green-600 hover:bg-green-700">
          Set up
        </Button>
        <Button size="sm" variant="link" className="text-blue-600">
          Dismiss
        </Button>
      </div>
    </Card>
  )
}

