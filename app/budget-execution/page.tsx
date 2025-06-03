"use client"

import { useState } from "react"
import { BudgetExecutionDashboard } from "@/components/budget-execution/budget-execution-dashboard"

export default function BudgetExecutionPage() {
  const [showDashboard, setShowDashboard] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 to-ocean-50">
      <div className="container mx-auto px-6 py-8">
        <BudgetExecutionDashboard onBack={() => setShowDashboard(false)} />
      </div>
    </div>
  )
}
