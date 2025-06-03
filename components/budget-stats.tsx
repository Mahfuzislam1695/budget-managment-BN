"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, DollarSign, Target } from "lucide-react"

export function BudgetStats() {
  const stats = [
    {
      title: "Total Budget FY 2024-25",
      value: "৳ 45,250 Crore",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Expenditure to Date",
      value: "৳ 28,150 Crore",
      change: "62.2%",
      trend: "up",
      icon: TrendingUp,
      color: "text-blue-600",
    },
    {
      title: "Remaining Balance",
      value: "৳ 17,100 Crore",
      change: "37.8%",
      trend: "down",
      icon: TrendingDown,
      color: "text-orange-600",
    },
    {
      title: "Quarterly Target",
      value: "৳ 11,312 Crore",
      change: "On Track",
      trend: "up",
      icon: Target,
      color: "text-purple-600",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="border-l-4 border-l-navy-500 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
            <stat.icon className={`h-5 w-5 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-navy-900">{stat.value}</div>
            <p className={`text-xs ${stat.color} flex items-center mt-1`}>
              {stat.trend === "up" ? (
                <TrendingUp className="h-3 w-3 mr-1" />
              ) : (
                <TrendingDown className="h-3 w-3 mr-1" />
              )}
              {stat.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
