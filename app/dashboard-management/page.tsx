"use client"

import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardManagementMain } from "@/components/dashboard-management/dashboard-management-main"

export default function DashboardManagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 to-ocean-50">
      <DashboardHeader />
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-navy-900">Dashboard & Management</h1>
          <p className="text-gray-600 mt-2">
            Comprehensive reporting, analytics, administration, and organizational management
          </p>
        </div>

        <DashboardManagementMain />
      </main>
    </div>
  )
}
