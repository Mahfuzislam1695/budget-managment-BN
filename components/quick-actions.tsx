"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, CreditCard, Send, Receipt, TrendingUp, AlertCircle } from "lucide-react"

export function QuickActions() {
  const actions = [
    {
      title: "Create Financial Sanction",
      icon: FileText,
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      title: "Process Bill",
      icon: CreditCard,
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      title: "Generate LC",
      icon: Send,
      color: "bg-purple-500 hover:bg-purple-600",
    },
    {
      title: "Treasury Receipt",
      icon: Receipt,
      color: "bg-orange-500 hover:bg-orange-600",
    },
    {
      title: "Budget Transfer",
      icon: TrendingUp,
      color: "bg-indigo-500 hover:bg-indigo-600",
    },
    {
      title: "Emergency Request",
      icon: AlertCircle,
      color: "bg-red-500 hover:bg-red-600",
    },
  ]

  return (
    <Card className="border-l-4 border-l-gold-500">
      <CardHeader>
        <CardTitle className="text-navy-900">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className={`${action.color} text-white border-none h-20 flex flex-col items-center justify-center space-y-2 hover:scale-105 transition-transform`}
            >
              <action.icon className="h-6 w-6" />
              <span className="text-xs text-center">{action.title}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
