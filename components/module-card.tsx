"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"

interface ModuleCardProps {
  title: string
  description: string
  icon: LucideIcon
  features: string[]
  status: "active" | "pending" | "completed"
  onClick: () => void
}

export function ModuleCard({ title, description, icon: Icon, features, status, onClick }: ModuleCardProps) {
  const statusColors = {
    active: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    completed: "bg-blue-100 text-blue-800",
  }

  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-ocean-500 group">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-navy-100 rounded-lg group-hover:bg-navy-200 transition-colors">
              <Icon className="h-6 w-6 text-navy-700" />
            </div>
            <div>
              <CardTitle className="text-lg text-navy-900">{title}</CardTitle>
              <Badge className={`mt-1 ${statusColors[status]}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-700">
              <div className="w-2 h-2 bg-ocean-400 rounded-full mr-2"></div>
              {feature}
            </div>
          ))}
        </div>
        <Button onClick={onClick} className="w-full bg-navy-700 hover:bg-navy-800 text-white">
          Access Module
        </Button>
      </CardContent>
    </Card>
  )
}
