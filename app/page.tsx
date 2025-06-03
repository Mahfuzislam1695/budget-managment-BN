"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardHeader } from "@/components/dashboard-header"
import { BudgetStats } from "@/components/budget-stats"
import { ModuleCard } from "@/components/module-card"
import { QuickActions } from "@/components/quick-actions"
import { RecentActivities } from "@/components/recent-activities"
import { FileText, Calculator, CreditCard, Send, Receipt, TrendingUp, BarChart3, Settings, Ship } from "lucide-react"

export default function Dashboard() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null)
  const router = useRouter()

  const budgetPreparationModules = [
    {
      title: "Budget Circular Management",
      description: "Manage Budget Circular 1 & 2, circulate documents and collect directorate inputs",
      icon: FileText,
      features: ["Circulate by DOB", "Requirement Input by Directorate", "Final Amount Input and Approval"],
      status: "active" as const,
    },
    {
      title: "Primary Budget",
      description: "Input and approve primary budget allocations across departments",
      icon: Calculator,
      features: ["Final Amount Input", "DOB Approval Process", "Department Allocation"],
      status: "completed" as const,
    },
    {
      title: "Revised Budget",
      description: "Handle budget revisions based on changing operational needs",
      icon: TrendingUp,
      features: ["Revision Circulation", "Updated Requirements", "Final Approval Process"],
      status: "pending" as const,
    },
  ]

  const budgetExecutionModules = [
    {
      title: "Financial Sanction",
      description: "Create, approve and manage financial sanctions with auto-generation capabilities",
      icon: CreditCard,
      features: ["Create Financial Sanction", "Approval Workflow", "Auto-Generate Options", "Comprehensive Reports"],
      status: "active" as const,
    },
    {
      title: "Bill Management",
      description: "Complete bill lifecycle management from creation to approval",
      icon: Receipt,
      features: ["Create Bills", "Approval Process", "Bill Reports", "Payment Tracking"],
      status: "active" as const,
    },
    {
      title: "LC & Remittance",
      description: "Manage Letters of Credit and remittance transactions",
      icon: Send,
      features: ["Create LC", "Approve LC", "Remittance Management", "Transaction Reports"],
      status: "active" as const,
    },
  ]

  const dashboardModules = [
    {
      title: "Reports & Analytics",
      description: "Comprehensive reporting and analytics for all financial operations",
      icon: BarChart3,
      features: ["Expenditure Reports", "Budget Transfer Reports", "Coast Guard Reports", "Custom Analytics"],
      status: "active" as const,
    },
    {
      title: "Administration",
      description: "User management, role assignment and system administration",
      icon: Settings,
      features: ["User Management", "Role Management", "Access Control", "System Settings"],
      status: "active" as const,
    },
    {
      title: "Ship/Org Management",
      description: "Manage ships, organizations and their financial operations",
      icon: Ship,
      features: ["Ship/Org Categories", "Signature Management", "Organizational Structure", "Financial Tracking"],
      status: "active" as const,
    },
  ]

  const handleModuleClick = (moduleTitle: string) => {
    setSelectedModule(moduleTitle)

    // Navigate based on module title
    switch (moduleTitle) {
      // Budget Preparation Modules
      case "Budget Circular Management":
      case "Primary Budget":
      case "Revised Budget":
        router.push("/budget-preparation")
        break

      // Budget Execution Modules
      case "Financial Sanction":
      case "Bill Management":
      case "LC & Remittance":
        router.push("/budget-execution")
        break

      // Dashboard & Management Modules
      case "Reports & Analytics":
      case "Administration":
      case "Ship/Org Management":
        router.push("/dashboard-management")
        break

      default:
        console.log(`No route defined for ${moduleTitle}`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 to-ocean-50">
      <DashboardHeader />

      <main className="container mx-auto px-6 py-8">
        <BudgetStats />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <QuickActions />
          </div>
          <div>
            <RecentActivities />
          </div>
        </div>

        {/* Budget Preparation Modules */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-1 h-8 bg-navy-600 mr-4"></div>
            <h2 className="text-2xl font-bold text-navy-900">Budget Preparation Modules</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {budgetPreparationModules.map((module, index) => (
              <ModuleCard key={index} {...module} onClick={() => handleModuleClick(module.title)} />
            ))}
          </div>
        </section>

        {/* Budget Execution Modules */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-1 h-8 bg-ocean-600 mr-4"></div>
            <h2 className="text-2xl font-bold text-navy-900">Budget Execution Modules</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {budgetExecutionModules.map((module, index) => (
              <ModuleCard key={index} {...module} onClick={() => handleModuleClick(module.title)} />
            ))}
          </div>
        </section>

        {/* Dashboard & Management Modules */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-1 h-8 bg-gold-600 mr-4"></div>
            <h2 className="text-2xl font-bold text-navy-900">Dashboard & Management</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboardModules.map((module, index) => (
              <ModuleCard key={index} {...module} onClick={() => handleModuleClick(module.title)} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
