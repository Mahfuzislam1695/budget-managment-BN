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
import { Receipt, CheckCircle, Clock, AlertCircle, Download, Send, BarChart3, FileText } from "lucide-react"

interface Bill {
  id: string
  billNo: string
  vendor: string
  description: string
  amount: string
  billDate: string
  dueDate: string
  status: "draft" | "submitted" | "approved" | "paid" | "rejected"
  directorate: string
  category: string
  priority: "high" | "medium" | "low"
  paymentMethod: string
}

export function BillManagement() {
  const [activeTab, setActiveTab] = useState("create")

  const bills: Bill[] = [
    {
      id: "1",
      billNo: "BILL-2024-001",
      vendor: "Marine Equipment Ltd.",
      description: "Navigation equipment maintenance",
      amount: "৳ 5,50,000",
      billDate: "2024-03-01",
      dueDate: "2024-03-15",
      status: "approved",
      directorate: "Naval Operations",
      category: "Maintenance",
      priority: "high",
      paymentMethod: "Bank Transfer",
    },
    {
      id: "2",
      billNo: "BILL-2024-002",
      vendor: "Training Solutions Inc.",
      description: "Simulator software license",
      amount: "৳ 12,75,000",
      billDate: "2024-03-02",
      dueDate: "2024-03-16",
      status: "submitted",
      directorate: "Naval Training",
      category: "Software",
      priority: "medium",
      paymentMethod: "Cheque",
    },
    {
      id: "3",
      billNo: "BILL-2024-003",
      vendor: "Ship Repair Yard",
      description: "Hull maintenance and painting",
      amount: "৳ 25,00,000",
      billDate: "2024-03-03",
      dueDate: "2024-03-17",
      status: "draft",
      directorate: "Naval Engineering",
      category: "Maintenance",
      priority: "high",
      paymentMethod: "Bank Transfer",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-800"
      case "approved":
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
      case "paid":
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
          <h1 className="text-3xl font-bold text-navy-900">Bill Management</h1>
          <p className="text-gray-600 mt-2">Create, approve, and track bills for payment processing</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <BarChart3 className="h-4 w-4 mr-2" />
            Bill Reports
          </Button>
          <Button className="bg-navy-700 hover:bg-navy-800">
            <Receipt className="h-4 w-4 mr-2" />
            Create New Bill
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="create">Create Bill</TabsTrigger>
          <TabsTrigger value="approve">Approve Bills</TabsTrigger>
          <TabsTrigger value="reports">Bill Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="create" className="space-y-6">
          <Card className="border-l-4 border-l-navy-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Receipt className="h-5 w-5 mr-2 text-navy-600" />
                Create New Bill
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="bill-no">Bill Number</Label>
                    <Input id="bill-no" placeholder="Auto-generated" readOnly className="bg-gray-50" />
                  </div>
                  <div>
                    <Label htmlFor="vendor-name">Vendor/Supplier Name</Label>
                    <Input id="vendor-name" placeholder="Enter vendor name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="vendor-address">Vendor Address</Label>
                    <Textarea id="vendor-address" rows={3} placeholder="Enter vendor address" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="bill-amount">Bill Amount</Label>
                    <Input id="bill-amount" placeholder="৳ 0.00" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="bill-date">Bill Date</Label>
                    <Input id="bill-date" type="date" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="due-date">Due Date</Label>
                    <Input id="due-date" type="date" className="mt-1" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="bill-directorate">Requesting Directorate</Label>
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
                    <Label htmlFor="bill-category">Bill Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                        <SelectItem value="procurement">Procurement</SelectItem>
                        <SelectItem value="services">Services</SelectItem>
                        <SelectItem value="utilities">Utilities</SelectItem>
                        <SelectItem value="software">Software</SelectItem>
                        <SelectItem value="training">Training</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="payment-method">Payment Method</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                        <SelectItem value="cheque">Cheque</SelectItem>
                        <SelectItem value="cash">Cash</SelectItem>
                        <SelectItem value="online">Online Payment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="bill-priority">Priority</Label>
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
                  <div>
                    <Label htmlFor="bill-description">Description</Label>
                    <Textarea
                      id="bill-description"
                      rows={4}
                      placeholder="Describe the goods/services provided"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="supporting-documents">Supporting Documents</Label>
                  <Input id="supporting-documents" type="file" multiple className="mt-1" />
                  <p className="text-sm text-gray-500 mt-1">
                    Upload invoice, delivery receipt, and other supporting documents
                  </p>
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
                  <Receipt className="h-8 w-8 text-blue-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Bills</p>
                    <p className="text-2xl font-bold text-blue-900">156</p>
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
                    <p className="text-2xl font-bold text-yellow-900">23</p>
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
                    <p className="text-2xl font-bold text-green-900">98</p>
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
                    <p className="text-2xl font-bold text-purple-900">৳ 45.2Cr</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bills Table */}
          <Card>
            <CardHeader>
              <CardTitle>Bills Pending Approval</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Bill No.</TableHead>
                    <TableHead>Vendor</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bills.map((bill) => (
                    <TableRow key={bill.id}>
                      <TableCell className="font-mono text-sm">{bill.billNo}</TableCell>
                      <TableCell className="font-medium">{bill.vendor}</TableCell>
                      <TableCell className="max-w-xs truncate">{bill.description}</TableCell>
                      <TableCell className="font-mono font-semibold">{bill.amount}</TableCell>
                      <TableCell>{bill.dueDate}</TableCell>
                      <TableCell>
                        <Badge className={getPriorityColor(bill.priority)}>{bill.priority}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(bill.status)}>
                          {getStatusIcon(bill.status)}
                          <span className="ml-1">{bill.status}</span>
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
                Bill Approval Process
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="selected-bill">Select Bill</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select bill for approval" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="BILL-2024-002">BILL-2024-002 - Training Solutions Inc.</SelectItem>
                        <SelectItem value="BILL-2024-003">BILL-2024-003 - Ship Repair Yard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="approved-bill-amount">Approved Amount</Label>
                    <Input id="approved-bill-amount" placeholder="৳ 0.00" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="payment-schedule">Payment Schedule</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment schedule" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate</SelectItem>
                        <SelectItem value="30-days">30 Days</SelectItem>
                        <SelectItem value="60-days">60 Days</SelectItem>
                        <SelectItem value="installments">Installments</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="approval-authority-bill">Approving Authority</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select approving authority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="director">Director, DOB</SelectItem>
                        <SelectItem value="additional-director">Additional Director, DOB</SelectItem>
                        <SelectItem value="accounts-officer">Accounts Officer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="bill-approval-remarks">Approval Remarks</Label>
                    <Textarea
                      id="bill-approval-remarks"
                      rows={4}
                      placeholder="Enter approval remarks and payment conditions"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button className="bg-green-600 hover:bg-green-700">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Approve Bill
                </Button>
                <Button variant="outline">Approve with Conditions</Button>
                <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
                  Reject Bill
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <Card className="border-l-4 border-l-ocean-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-ocean-600" />
                Bill Reports & Analytics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="bill-report-type">Report Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select report type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="summary">Bill Summary</SelectItem>
                        <SelectItem value="detailed">Detailed Bill Report</SelectItem>
                        <SelectItem value="vendor">Vendor-wise Report</SelectItem>
                        <SelectItem value="directorate">Directorate-wise Report</SelectItem>
                        <SelectItem value="aging">Bill Aging Report</SelectItem>
                        <SelectItem value="payment">Payment Status Report</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="bill-date-from">From Date</Label>
                    <Input id="bill-date-from" type="date" className="mt-1" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="bill-report-format">Format</Label>
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
                    <Label htmlFor="bill-date-to">To Date</Label>
                    <Input id="bill-date-to" type="date" className="mt-1" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="bill-filter-directorate">Filter by Directorate</Label>
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
                    <Label htmlFor="bill-filter-status">Filter by Status</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="All Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="paid">Paid</SelectItem>
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
