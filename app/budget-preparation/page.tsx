"use client"

import { useState } from "react"
import { BudgetPreparationDashboard } from "@/components/budget-preparation/budget-preparation-dashboard"

export default function BudgetPreparationPage() {
  const [showDashboard, setShowDashboard] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 to-ocean-50">
      <div className="container mx-auto px-6 py-8">
        <BudgetPreparationDashboard onBack={() => setShowDashboard(false)} />
      </div>
    </div>
  )
}
