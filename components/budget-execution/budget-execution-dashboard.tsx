"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FinancialSanction } from "./financial-sanction"
import { BillManagement } from "./bill-management"
import { LCRemittance } from "./lc-remittance"
import { FileText, Receipt, CreditCard, Send, ArrowLeft, CheckCircle, Clock, AlertTriangle } from "lucide-react"
import Link from "next/link"

interface BudgetExecutionDashboardProps {
  onBack: () => void
}

export function BudgetExecutionDashboard({ onBack }: BudgetExecutionDashboardProps) {
  const [activeModule, setActiveModule] = useState<string | null>(null)

  const modules = [
    {
      id: "financial-sanction",
      title: "Financial Sanction",
      description: "Create, approve and manage financial sanctions with auto-generation capabilities",
      icon: FileText,
      component: FinancialSanction,
      status: "active",
      progress: 85,
      stats: { total: 24, pending: 8, approved: 15 },
    },
    {
      id: "bill-management",
      title: "Bill Management",
      description: "Complete bill lifecycle management from creation to approval and payment",
      icon: Receipt,
      component: BillManagement,
      status: "active",
      progress: 72,
      stats: { total: 156, pending: 23, approved: 98 },
    },
    {
      id: "lc-remittance",
      title: "LC & Remittance",
      description: "Manage Letters of Credit and international remittance transactions",
      icon: CreditCard,
      component: LCRemittance,
      status: "active",
      progress: 68,
      stats: { total: 45, pending: 12, approved: 28 },
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
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Main Dashboard
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-navy-900">Budget Execution Modules</h1>
            <p className="text-gray-600 mt-2">Comprehensive budget execution and financial management system</p>
          </div>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-navy-500">
          <CardContent className="p-6">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-navy-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Transactions</p>
                <p className="text-2xl font-bold text-navy-900">225</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-yellow-500">
          <CardContent className="p-6">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending Approval</p>
                <p className="text-2xl font-bold text-yellow-900">43</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Processed</p>
                <p className="text-2xl font-bold text-green-900">141</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardContent className="p-6">
            <div className="flex items-center">
              <Send className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Value</p>
                <p className="text-2xl font-bold text-purple-900">৳ 230Cr</p>
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

              {/* Module Stats */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="text-center p-2 bg-blue-50 rounded">
                  <div className="text-lg font-bold text-blue-600">{module.stats.total}</div>
                  <div className="text-xs text-gray-600">Total</div>
                </div>
                <div className="text-center p-2 bg-yellow-50 rounded">
                  <div className="text-lg font-bold text-yellow-600">{module.stats.pending}</div>
                  <div className="text-xs text-gray-600">Pending</div>
                </div>
                <div className="text-center p-2 bg-green-50 rounded">
                  <div className="text-lg font-bold text-green-600">{module.stats.approved}</div>
                  <div className="text-xs text-gray-600">Approved</div>
                </div>
              </div>

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

      {/* Quick Actions */}
      <Card className="border-l-4 border-l-gold-500">
        <CardHeader>
          <CardTitle className="text-navy-900">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button
              variant="outline"
              className="bg-blue-500 hover:bg-blue-600 text-white border-none h-20 flex flex-col items-center justify-center space-y-2"
            >
              <FileText className="h-6 w-6" />
              <span className="text-xs text-center">New Financial Sanction</span>
            </Button>
            <Button
              variant="outline"
              className="bg-green-500 hover:bg-green-600 text-white border-none h-20 flex flex-col items-center justify-center space-y-2"
            >
              <Receipt className="h-6 w-6" />
              <span className="text-xs text-center">Create Bill</span>
            </Button>
            <Button
              variant="outline"
              className="bg-purple-500 hover:bg-purple-600 text-white border-none h-20 flex flex-col items-center justify-center space-y-2"
            >
              <CreditCard className="h-6 w-6" />
              <span className="text-xs text-center">Open LC</span>
            </Button>
            <Button
              variant="outline"
              className="bg-orange-500 hover:bg-orange-600 text-white border-none h-20 flex flex-col items-center justify-center space-y-2"
            >
              <Send className="h-6 w-6" />
              <span className="text-xs text-center">Process Remittance</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activities */}
      <Card className="border-l-4 border-l-ocean-500">
        <CardHeader>
          <CardTitle className="text-navy-900 flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2" />
            Recent Activities & Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="p-2 bg-green-100 rounded-full">
                <CheckCircle className="h-4 w-4 text-green-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">Financial Sanction FS-2024-156 approved</p>
                <p className="text-xs text-gray-500">Approved by Director, DOB • 2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="p-2 bg-yellow-100 rounded-full">
                <Clock className="h-4 w-4 text-yellow-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">LC-2024-089 pending approval</p>
                <p className="text-xs text-gray-500">Submitted by Naval Training • 4 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="p-2 bg-blue-100 rounded-full">
                <Receipt className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">Bill BILL-2024-234 processed for payment</p>
                <p className="text-xs text-gray-500">Processed by Accounts Department • 6 hours ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
