"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, CheckCircle, Clock, AlertCircle, Download, Send, Zap, BarChart3 } from "lucide-react"

interface FinancialSanction {
  id: string
  sanctionNo: string
  directorate: string
  purpose: string
  amount: string
  requestDate: string
  approvalDate: string
  status: "draft" | "submitted" | "approved" | "rejected" | "processed"
  approver: string
  budgetHead: string
  priority: "high" | "medium" | "low"
}

export function FinancialSanction() {
  const [activeTab, setActiveTab] = useState("create")

  const financialSanctions: FinancialSanction[] = [
    {
      id: "1",
      sanctionNo: "FS-2024-001",
      directorate: "Naval Operations",
      purpose: "Quarterly operational expenses",
      amount: "৳ 15,00,00,000",
      requestDate: "2024-03-01",
      approvalDate: "2024-03-03",
      status: "approved",
      approver: "Director, DOB",
      budgetHead: "Operational Expenses",
      priority: "high",
    },
    {
      id: "2",
      sanctionNo: "FS-2024-002",
      directorate: "Naval Training",
      purpose: "Training equipment procurement",
      amount: "৳ 8,50,00,000",
      requestDate: "2024-03-02",
      approvalDate: "",
      status: "submitted",
      approver: "",
      budgetHead: "Training & Development",
      priority: "medium",
    },
    {
      id: "3",
      sanctionNo: "FS-2024-003",
      directorate: "Naval Engineering",
      purpose: "Emergency ship maintenance",
      amount: "৳ 22,75,00,000",
      requestDate: "2024-03-03",
      approvalDate: "",
      status: "draft",
      approver: "",
      budgetHead: "Maintenance & Repair",
      priority: "high",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800"
      case "processed":
        return "bg-blue-100 text-blue-800"
      case "submitted":
        return "bg-yellow-100 text-yellow-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      case "draft":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4" />
      case "submitted":
        return <Clock className="h-4 w-4" />
      case "rejected":
        return <AlertCircle className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-navy-900">Financial Sanction Management</h1>
          <p className="text-gray-600 mt-2">Create, approve, and manage financial sanctions</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <BarChart3 className="h-4 w-4 mr-2" />
            Reports
          </Button>
          <Button className="bg-navy-700 hover:bg-navy-800">
            <FileText className="h-4 w-4 mr-2" />
            New Sanction
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="create">Create Sanction</TabsTrigger>
          <TabsTrigger value="approve">Approve Sanction</TabsTrigger>
          <TabsTrigger value="auto-generate">Auto-Generate</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="create" className="space-y-6">
          <Card className="border-l-4 border-l-navy-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-navy-600" />
                Create Financial Sanction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="sanction-no">Sanction Number</Label>
                    <Input id="sanction-no" placeholder="Auto-generated" readOnly className="bg-gray-50" />
                  </div>
                  <div>
                    <Label htmlFor="directorate">Requesting Directorate</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select directorate" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="naval-operations">Naval Operations</SelectItem>
                        <SelectItem value="naval-training">Naval Training</SelectItem>
                        <SelectItem value="naval-engineering">Naval Engineering</SelectItem>
                        <SelectItem value="naval-intelligence">Naval Intelligence</SelectItem>
                        <SelectItem value="naval-medical">Naval Medical</SelectItem>
                        <SelectItem value="naval-logistics">Naval Logistics</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="budget-head">Budget Head</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget head" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="operational">Operational Expenses</SelectItem>
                        <SelectItem value="training">Training & Development</SelectItem>
                        <SelectItem value="maintenance">Maintenance & Repair</SelectItem>
                        <SelectItem value="procurement">Procurement</SelectItem>
                        <SelectItem value="medical">Medical Services</SelectItem>
                        <SelectItem value="logistics">Supply & Logistics</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="amount">Sanction Amount</Label>
                    <Input id="amount" placeholder="৳ 0.00" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="priority">Priority Level</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="purpose">Purpose of Sanction</Label>
                    <Textarea
                      id="purpose"
                      rows={4}
                      placeholder="Describe the purpose and justification for this financial sanction"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="justification">Detailed Justification</Label>
                    <Textarea
                      id="justification"
                      rows={4}
                      placeholder="Provide detailed justification and supporting information"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="supporting-docs">Supporting Documents</Label>
                    <Input id="supporting-docs" type="file" multiple className="mt-1" />
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="bg-navy-700 hover:bg-navy-800">
                  <Send className="h-4 w-4 mr-2" />
                  Submit for Approval
                </Button>
                <Button variant="outline">Save as Draft</Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Template
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="approve" className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-blue-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Sanctions</p>
                    <p className="text-2xl font-bold text-blue-900">24</p>
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
                    <p className="text-2xl font-bold text-yellow-900">8</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Approved</p>
                    <p className="text-2xl font-bold text-green-900">15</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <BarChart3 className="h-8 w-8 text-purple-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Value</p>
                    <p className="text-2xl font-bold text-purple-900">৳ 185Cr</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sanctions Table */}
          <Card>
            <CardHeader>
              <CardTitle>Financial Sanctions for Approval</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Sanction No.</TableHead>
                    <TableHead>Directorate</TableHead>
                    <TableHead>Purpose</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {financialSanctions.map((sanction) => (
                    <TableRow key={sanction.id}>
                      <TableCell className="font-mono text-sm">{sanction.sanctionNo}</TableCell>
                      <TableCell className="font-medium">{sanction.directorate}</TableCell>
                      <TableCell className="max-w-xs truncate">{sanction.purpose}</TableCell>
                      <TableCell className="font-mono font-semibold">{sanction.amount}</TableCell>
                      <TableCell>
                        <Badge className={getPriorityColor(sanction.priority)}>{sanction.priority}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(sanction.status)}>
                          {getStatusIcon(sanction.status)}
                          <span className="ml-1">{sanction.status}</span>
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            Review
                          </Button>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Approve
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Approval Form */}
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                DOB Approval Process
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="selected-sanction">Select Sanction</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select sanction for approval" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="FS-2024-002">FS-2024-002 - Naval Training</SelectItem>
                        <SelectItem value="FS-2024-003">FS-2024-003 - Naval Engineering</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="approved-amount">Approved Amount</Label>
                    <Input id="approved-amount" placeholder="৳ 0.00" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="approval-authority">Approving Authority</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select approving authority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="director">Director, DOB</SelectItem>
                        <SelectItem value="additional-director">Additional Director, DOB</SelectItem>
                        <SelectItem value="joint-director">Joint Director, DOB</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="approval-remarks">Approval Remarks</Label>
                    <Textarea
                      id="approval-remarks"
                      rows={6}
                      placeholder="Enter approval remarks and conditions"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button className="bg-green-600 hover:bg-green-700">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Approve Sanction
                </Button>
                <Button variant="outline">Approve with Conditions</Button>
                <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
                  Reject Sanction
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="auto-generate" className="space-y-6">
          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="h-5 w-5 mr-2 text-purple-600" />
                Auto-Generate Financial Sanctions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="auto-type">Auto-Generation Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select auto-generation type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="quarterly">Quarterly Operational</SelectItem>
                        <SelectItem value="monthly">Monthly Recurring</SelectItem>
                        <SelectItem value="emergency">Emergency Sanctions</SelectItem>
                        <SelectItem value="maintenance">Scheduled Maintenance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="frequency">Generation Frequency</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                        <SelectItem value="semi-annual">Semi-Annual</SelectItem>
                        <SelectItem value="annual">Annual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="start-date">Start Date</Label>
                    <Input id="start-date" type="date" className="mt-1" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="template">Sanction Template</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select template" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="operational">Operational Expenses Template</SelectItem>
                        <SelectItem value="training">Training Expenses Template</SelectItem>
                        <SelectItem value="maintenance">Maintenance Template</SelectItem>
                        <SelectItem value="procurement">Procurement Template</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="auto-amount">Base Amount</Label>
                    <Input id="auto-amount" placeholder="৳ 0.00" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="escalation">Annual Escalation %</Label>
                    <Input id="escalation" placeholder="5.0" className="mt-1" />
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Zap className="h-4 w-4 mr-2" />
                  Setup Auto-Generation
                </Button>
                <Button variant="outline">Preview Generated Sanctions</Button>
                <Button variant="outline">Manage Templates</Button>
              </div>
            </CardContent>
          </Card>

          {/* Auto-Generation Rules */}
          <Card>
            <CardHeader>
              <CardTitle>Active Auto-Generation Rules</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Rule Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Frequency</TableHead>
                    <TableHead>Base Amount</TableHead>
                    <TableHead>Next Generation</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Quarterly Operations</TableCell>
                    <TableCell>Operational</TableCell>
                    <TableCell>Quarterly</TableCell>
                    <TableCell className="font-mono">৳ 15,00,00,000</TableCell>
                    <TableCell>2024-04-01</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                        <Button size="sm" variant="outline">
                          Pause
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <Card className="border-l-4 border-l-ocean-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-ocean-600" />
                Financial Sanction Reports
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="report-type">Report Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select report type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="summary">Summary Report</SelectItem>
                        <SelectItem value="detailed">Detailed Report</SelectItem>
                        <SelectItem value="directorate">Directorate-wise</SelectItem>
                        <SelectItem value="budget-head">Budget Head-wise</SelectItem>
                        <SelectItem value="status">Status Report</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="date-from">From Date</Label>
                    <Input id="date-from" type="date" className="mt-1" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="report-format">Format</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pdf">PDF</SelectItem>
                        <SelectItem value="excel">Excel</SelectItem>
                        <SelectItem value="csv">CSV</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="date-to">To Date</Label>
                    <Input id="date-to" type="date" className="mt-1" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="filter-directorate">Filter by Directorate</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="All Directorates" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Directorates</SelectItem>
                        <SelectItem value="naval-operations">Naval Operations</SelectItem>
                        <SelectItem value="naval-training">Naval Training</SelectItem>
                        <SelectItem value="naval-engineering">Naval Engineering</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="filter-status">Filter by Status</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="All Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="bg-ocean-600 hover:bg-ocean-700">
                  <Download className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
                <Button variant="outline">Preview Report</Button>
                <Button variant="outline">Schedule Report</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
