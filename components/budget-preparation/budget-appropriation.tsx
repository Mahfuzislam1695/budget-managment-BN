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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Banknote, CheckCircle, Clock, FileText, Calculator } from "lucide-react"

interface AppropriationRequest {
  id: string
  directorate: string
  requestDate: string
  budgetHead: string
  requestedAmount: string
  purpose: string
  justification: string
  status: "pending" | "reviewed" | "approved" | "rejected"
  priority: "high" | "medium" | "low"
}

export function BudgetAppropriation() {
  const [activeTab, setActiveTab] = useState("requests")

  const appropriationRequests: AppropriationRequest[] = [
    {
      id: "APP-2024-001",
      directorate: "Naval Operations",
      requestDate: "2024-02-15",
      budgetHead: "Operational Expenses",
      requestedAmount: "৳ 15,00,00,000",
      purpose: "Quarterly operational fund release",
      justification: "Required for ongoing maritime operations and patrol activities",
      status: "approved",
      priority: "high",
    },
    {
      id: "APP-2024-002",
      directorate: "Naval Training",
      requestDate: "2024-02-18",
      budgetHead: "Training & Development",
      requestedAmount: "৳ 8,50,00,000",
      purpose: "Training program implementation",
      justification: "Funds needed for specialized training courses and equipment",
      status: "pending",
      priority: "medium",
    },
    {
      id: "APP-2024-003",
      directorate: "Naval Engineering",
      requestDate: "2024-02-20",
      budgetHead: "Maintenance & Repair",
      requestedAmount: "৳ 22,75,00,000",
      purpose: "Emergency maintenance appropriation",
      justification: "Critical ship maintenance and equipment replacement",
      status: "reviewed",
      priority: "high",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800"
      case "reviewed":
        return "bg-blue-100 text-blue-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "rejected":
        return "bg-red-100 text-red-800"
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

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-navy-900">Budget Appropriation</h1>
          <p className="text-gray-600 mt-2">Manage budget appropriation requests and approvals</p>
        </div>
        <Button className="bg-navy-700 hover:bg-navy-800">
          <Banknote className="h-4 w-4 mr-2" />
          New Appropriation Request
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="requests">Appropriation Requests</TabsTrigger>
          <TabsTrigger value="review">DOB Review</TabsTrigger>
          <TabsTrigger value="approved">Approved Appropriations</TabsTrigger>
        </TabsList>

        <TabsContent value="requests" className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-blue-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Requests</p>
                    <p className="text-2xl font-bold text-blue-900">15</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Clock className="h-8 w-8 text-yellow-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Pending</p>
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
                    <p className="text-2xl font-bold text-green-900">6</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Calculator className="h-8 w-8 text-purple-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Amount</p>
                    <p className="text-2xl font-bold text-purple-900">৳ 125Cr</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Appropriation Requests Table */}
          <Card>
            <CardHeader>
              <CardTitle>Directorate Appropriation Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Request ID</TableHead>
                    <TableHead>Directorate</TableHead>
                    <TableHead>Budget Head</TableHead>
                    <TableHead>Requested Amount</TableHead>
                    <TableHead>Purpose</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {appropriationRequests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell className="font-mono text-sm">{request.id}</TableCell>
                      <TableCell className="font-medium">{request.directorate}</TableCell>
                      <TableCell>{request.budgetHead}</TableCell>
                      <TableCell className="font-mono font-semibold">{request.requestedAmount}</TableCell>
                      <TableCell className="max-w-xs truncate">{request.purpose}</TableCell>
                      <TableCell>
                        <Badge className={getPriorityColor(request.priority)}>{request.priority}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(request.status)}>{request.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            Process
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="review" className="space-y-6">
          <Card className="border-l-4 border-l-ocean-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-ocean-600" />
                DOB Review & Processing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="request-id">Request ID</Label>
                    <Select defaultValue="APP-2024-002">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="APP-2024-002">APP-2024-002</SelectItem>
                        <SelectItem value="APP-2024-003">APP-2024-003</SelectItem>
                        <SelectItem value="APP-2024-004">APP-2024-004</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="directorate-name">Directorate</Label>
                    <Input id="directorate-name" value="Naval Training" readOnly className="bg-gray-50" />
                  </div>
                  <div>
                    <Label htmlFor="requested-amount">Requested Amount</Label>
                    <Input id="requested-amount" value="৳ 8,50,00,000" readOnly className="bg-gray-50" />
                  </div>
                  <div>
                    <Label htmlFor="approved-amount">DOB Approved Amount</Label>
                    <Input id="approved-amount" placeholder="Enter approved amount" className="mt-1" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="review-status">Review Status</Label>
                    <Select defaultValue="under-review">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-review">Under Review</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="approved-partial">Approved (Partial)</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="dob-remarks">DOB Review Remarks</Label>
                    <Textarea
                      id="dob-remarks"
                      rows={4}
                      placeholder="Enter review comments and approval conditions"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="approval-date">Approval Date</Label>
                    <Input id="approval-date" type="date" className="mt-1" />
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="bg-green-600 hover:bg-green-700">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Approve Appropriation
                </Button>
                <Button variant="outline">Approve with Conditions</Button>
                <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
                  Reject Request
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Batch Processing */}
          <Card>
            <CardHeader>
              <CardTitle>Batch Processing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="batch-total">Total Batch Amount</Label>
                  <Input id="batch-total" value="৳ 46,25,00,000" readOnly className="bg-gray-50" />
                </div>
                <div>
                  <Label htmlFor="batch-approved">Batch Approved Amount</Label>
                  <Input id="batch-approved" placeholder="Enter total approved amount" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="batch-status">Batch Status</Label>
                  <Select defaultValue="processing">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="processing">Processing</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="partial">Partially Approved</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button className="bg-navy-600 hover:bg-navy-700">Process Batch</Button>
                <Button variant="outline">Export Batch Report</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="approved" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Approved Appropriations</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Request ID</TableHead>
                    <TableHead>Directorate</TableHead>
                    <TableHead>Approved Amount</TableHead>
                    <TableHead>Approval Date</TableHead>
                    <TableHead>Approving Authority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono text-sm">APP-2024-001</TableCell>
                    <TableCell className="font-medium">Naval Operations</TableCell>
                    <TableCell className="font-mono font-semibold">৳ 15,00,00,000</TableCell>
                    <TableCell>2024-02-16</TableCell>
                    <TableCell>Director, DOB</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          Download
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
