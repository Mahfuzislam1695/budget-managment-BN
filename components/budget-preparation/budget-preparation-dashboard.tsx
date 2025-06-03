"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BudgetCircular } from "./budget-circular"
import { PrimaryBudget } from "./primary-budget"
import { RevisedBudget } from "./revised-budget"
import { BudgetAppropriation } from "./budget-appropriation"
import { BudgetAllocation } from "./budget-allocation"
import { FileText, Calculator, RefreshCw, Banknote, Layers, Target, ArrowLeft } from "lucide-react"

interface BudgetPreparationDashboardProps {
  onBack: () => void
}

export function BudgetPreparationDashboard({ onBack }: BudgetPreparationDashboardProps) {
  const [activeModule, setActiveModule] = useState<string | null>(null)

  const modules = [
    {
      id: "budget-circular",
      title: "Budget Circular Management",
      description: "Manage Budget Circular 1 & 2, circulate documents and collect directorate inputs",
      icon: FileText,
      component: BudgetCircular,
      status: "active",
      progress: 75,
    },
    {
      id: "primary-budget",
      title: "Primary Budget",
      description: "Input and approve primary budget allocations across departments",
      icon: Calculator,
      component: PrimaryBudget,
      status: "completed",
      progress: 100,
    },
    {
      id: "revised-budget",
      title: "Revised Budget",
      description: "Handle budget revisions based on changing operational needs",
      icon: RefreshCw,
      component: RevisedBudget,
      status: "active",
      progress: 60,
    },
    {
      id: "budget-appropriation",
      title: "Budget Appropriation",
      description: "Manage budget appropriation requests and approvals from directorates",
      icon: Banknote,
      component: BudgetAppropriation,
      status: "active",
      progress: 45,
    },
    {
      id: "budget-allocation",
      title: "Budget Allocation",
      description: "Allocate approved budget to different directorates and units",
      icon: Layers,
      component: BudgetAllocation,
      status: "pending",
      progress: 30,
    },
  ]

  if (activeModule) {
    const module = modules.find((m) => m.id === activeModule)
    if (module) {
      const Component = module.component
      return (
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={() => setActiveModule(null)}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-navy-900">{module.title}</h1>
              <p className="text-gray-600">{module.description}</p>
            </div>
          </div>
          <Component />
        </div>
      )
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "active":
        return "bg-blue-100 text-blue-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Main Dashboard
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy-900">Budget Preparation Modules</h1>
            <p className="text-gray-600 mt-2">Comprehensive budget preparation and planning system</p>
          </div>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-navy-500">
          <CardContent className="p-6">
            <div className="flex items-center">
              <Target className="h-8 w-8 text-navy-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Modules</p>
                <p className="text-2xl font-bold text-navy-900">5</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-green-900">1</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex items-center">
              <RefreshCw className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active</p>
                <p className="text-2xl font-bold text-blue-900">3</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-yellow-500">
          <CardContent className="p-6">
            <div className="flex items-center">
              <Calculator className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-900">1</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Module Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module) => (
          <Card
            key={module.id}
            className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-ocean-500 group cursor-pointer"
            onClick={() => setActiveModule(module.id)}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-navy-100 rounded-lg group-hover:bg-navy-200 transition-colors">
                    <module.icon className="h-6 w-6 text-navy-700" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-navy-900">{module.title}</CardTitle>
                    <div
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 ${getStatusColor(module.status)}`}
                    >
                      {module.status}
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{module.description}</p>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium">{module.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-navy-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${module.progress}%` }}
                  ></div>
                </div>
              </div>

              <Button className="w-full mt-4 bg-navy-700 hover:bg-navy-800 text-white">Access Module</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
