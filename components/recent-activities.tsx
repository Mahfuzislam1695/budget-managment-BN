"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User, FileText } from "lucide-react"

export function RecentActivities() {
  const activities = [
    {
      id: 1,
      action: "Budget Circular 2 approved",
      user: "DOB Admin",
      time: "2 hours ago",
      type: "approval",
      status: "completed",
    },
    {
      id: 2,
      action: "Financial Sanction FS-2024-156 created",
      user: "Finance Officer",
      time: "4 hours ago",
      type: "creation",
      status: "pending",
    },
    {
      id: 3,
      action: "LC-2024-089 processed",
      user: "Accounts Department",
      time: "6 hours ago",
      type: "processing",
      status: "completed",
    },
    {
      id: 4,
      action: "Quarterly Target Q2 submitted",
      user: "Directorate A",
      time: "1 day ago",
      type: "submission",
      status: "review",
    },
    {
      id: 5,
      action: "Bill B-2024-234 approved",
      user: "Approval Authority",
      time: "1 day ago",
      type: "approval",
      status: "completed",
    },
  ]

  const statusColors = {
    completed: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    review: "bg-blue-100 text-blue-800",
  }

  return (
    <Card className="border-l-4 border-l-ocean-500">
      <CardHeader>
        <CardTitle className="text-navy-900 flex items-center">
          <Clock className="h-5 w-5 mr-2" />
          Recent Activities
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="p-2 bg-navy-100 rounded-full">
                <FileText className="h-4 w-4 text-navy-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <User className="h-3 w-3 text-gray-400" />
                  <span className="text-xs text-gray-500">{activity.user}</span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              </div>
              <Badge className={statusColors[activity.status as keyof typeof statusColors]}>{activity.status}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
