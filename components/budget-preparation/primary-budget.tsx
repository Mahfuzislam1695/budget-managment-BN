"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, CheckCircle, FileText, TrendingUp, Download, Save } from "lucide-react"

interface BudgetAllocation {
  id: string
  directorate: string
  category: string
  requestedAmount: string
  approvedAmount: string
  percentage: number
  status: "pending" | "approved" | "revised"
}

export function PrimaryBudget() {
  const [totalBudget, setTotalBudget] = useState("৳ 2,50,00,00,000")
  const [allocatedAmount, setAllocatedAmount] = useState("৳ 2,35,75,00,000")

  const budgetAllocations: BudgetAllocation[] = [
    {
      id: "1",
      directorate: "Naval Operations",
      category: "Operational Expenses",
      requestedAmount: "৳ 45,00,00,000",
      approvedAmount: "৳ 42,00,00,000",
      percentage: 16.8,
      status: "approved",
    },
    {
      id: "2",
      directorate: "Naval Training",
      category: "Training & Development",
      requestedAmount: "৳ 32,50,00,000",
      approvedAmount: "৳ 30,00,00,000",
      percentage: 12.0,
      status: "approved",
    },
    {
      id: "3",
      directorate: "Naval Engineering",
      category: "Maintenance & Repair",
      requestedAmount: "৳ 67,75,00,000",
      approvedAmount: "৳ 65,00,00,000",
      percentage: 26.0,
      status: "approved",
    },
    {
      id: "4",
      directorate: "Naval Intelligence",
      category: "Intelligence Operations",
      requestedAmount: "৳ 25,00,00,000",
      approvedAmount: "৳ 22,50,00,000",
      percentage: 9.0,
      status: "revised",
    },
    {
      id: "5",
      directorate: "Naval Medical",
      category: "Medical Services",
      requestedAmount: "৳ 18,75,00,000",
      approvedAmount: "৳ 18,75,00,000",
      percentage: 7.5,
      status: "approved",
    },
    {
      id: "6",
      directorate: "Naval Logistics",
      category: "Supply & Logistics",
      requestedAmount: "৳ 55,25,00,000",
      approvedAmount: "৳ 52,50,00,000",
      percentage: 21.0,
      status: "approved",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800"
      case "revised":
        return "bg-yellow-100 text-yellow-800"
      case "pending":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const calculateRemainingBudget = () => {
    const total = Number.parseFloat(totalBudget.replace(/[৳,]/g, ""))
    const allocated = Number.parseFloat(allocatedAmount.replace(/[৳,]/g, ""))
    return `৳ ${(total - allocated).toLocaleString()}`
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-navy-900">Primary Budget Management</h1>
          <p className="text-gray-600 mt-2">Manage primary budget allocation for FY 2024-25</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Budget
          </Button>
          <Button className="bg-navy-700 hover:bg-navy-800">
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      {/* Budget Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-navy-500">
          <CardContent className="p-6">
            <div className="flex items-center">
              <Calculator className="h-8 w-8 text-navy-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Budget</p>
                <p className="text-2xl font-bold text-navy-900">{totalBudget}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Allocated</p>
                <p className="text-2xl font-bold text-green-900">{allocatedAmount}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardContent className="p-6">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Remaining</p>
                <p className="text-2xl font-bold text-orange-900">{calculateRemainingBudget()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardContent className="p-6">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Allocation %</p>
                <p className="text-2xl font-bold text-purple-900">94.3%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Budget Input Form */}
      <Card className="border-l-4 border-l-navy-500">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calculator className="h-5 w-5 mr-2 text-navy-600" />
            Primary Budget Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="fiscal-year">Fiscal Year</Label>
                <Select defaultValue="2024-25">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024-25">2024-25</SelectItem>
                    <SelectItem value="2025-26">2025-26</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="total-budget">Total Approved Budget</Label>
                <Input
                  id="total-budget"
                  value={totalBudget}
                  onChange={(e) => setTotalBudget(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="budget-source">Budget Source</Label>
                <Select defaultValue="government">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="government">Government Allocation</SelectItem>
                    <SelectItem value="development">Development Fund</SelectItem>
                    <SelectItem value="special">Special Allocation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="approval-date">DOB Approval Date</Label>
                <Input id="approval-date" type="date" defaultValue="2024-01-30" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="effective-date">Effective Date</Label>
                <Input id="effective-date" type="date" defaultValue="2024-04-01" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="dob-remarks">DOB Approval Remarks</Label>
                <Textarea
                  id="dob-remarks"
                  rows={3}
                  defaultValue="Primary budget approved as per government allocation for FY 2024-25"
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Budget Allocation Table */}
      <Card>
        <CardHeader>
          <CardTitle>Directorate-wise Budget Allocation</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Directorate</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Requested Amount</TableHead>
                <TableHead>Approved Amount</TableHead>
                <TableHead>Percentage</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {budgetAllocations.map((allocation) => (
                <TableRow key={allocation.id}>
                  <TableCell className="font-medium">{allocation.directorate}</TableCell>
                  <TableCell>{allocation.category}</TableCell>
                  <TableCell className="font-mono">{allocation.requestedAmount}</TableCell>
                  <TableCell className="font-mono font-semibold">{allocation.approvedAmount}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="w-12 bg-gray-200 rounded-full h-2 mr-2">
                        <div
                          className="bg-navy-600 h-2 rounded-full"
                          style={{ width: `${allocation.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm">{allocation.percentage}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(allocation.status)}>{allocation.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                      <Button size="sm" variant="outline">
                        Details
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Final Approval Section */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center">
            <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
            Final DOB Approval
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="approving-authority">Approving Authority</Label>
                <Select defaultValue="dob-director">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dob-director">Director, DOB</SelectItem>
                    <SelectItem value="additional-director">Additional Director, DOB</SelectItem>
                    <SelectItem value="joint-director">Joint Director, DOB</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="approval-reference">Approval Reference No.</Label>
                <Input id="approval-reference" placeholder="DOB/PB/2024-25/001" className="mt-1" />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="final-remarks">Final Approval Remarks</Label>
                <Textarea
                  id="final-remarks"
                  rows={4}
                  placeholder="Enter final approval remarks and conditions"
                  className="mt-1"
                />
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <Button className="bg-green-600 hover:bg-green-700">
              <CheckCircle className="h-4 w-4 mr-2" />
              Final Approval
            </Button>
            <Button variant="outline">Save as Draft</Button>
            <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
              Request Revision
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
