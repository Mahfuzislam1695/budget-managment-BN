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
import { FileText, Send, CheckCircle, Clock, AlertCircle, Download, Upload } from "lucide-react"

interface BudgetCircular {
  id: string
  title: string
  fiscalYear: string
  status: "draft" | "circulated" | "collecting" | "completed"
  createdDate: string
  deadline: string
  totalDirectorates: number
  responsesReceived: number
}

interface DirectorateResponse {
  id: string
  directorate: string
  officer: string
  submittedDate: string
  amount: string
  status: "pending" | "submitted" | "approved" | "rejected"
  remarks: string
}

export function BudgetCircular() {
  const [activeTab, setActiveTab] = useState("circular1")
  const [selectedCircular, setSelectedCircular] = useState<string | null>(null)

  const budgetCirculars: BudgetCircular[] = [
    {
      id: "BC1-2024-25",
      title: "Budget Circular 1 - FY 2024-25",
      fiscalYear: "2024-25",
      status: "collecting",
      createdDate: "2024-01-15",
      deadline: "2024-02-15",
      totalDirectorates: 12,
      responsesReceived: 8,
    },
    {
      id: "BC2-2024-25",
      title: "Budget Circular 2 - FY 2024-25",
      fiscalYear: "2024-25",
      status: "circulated",
      createdDate: "2024-02-01",
      deadline: "2024-03-01",
      totalDirectorates: 12,
      responsesReceived: 3,
    },
  ]

  const directorateResponses: DirectorateResponse[] = [
    {
      id: "1",
      directorate: "Naval Operations",
      officer: "Commodore Rahman",
      submittedDate: "2024-01-20",
      amount: "৳ 45,00,00,000",
      status: "approved",
      remarks: "Operational requirements approved",
    },
    {
      id: "2",
      directorate: "Naval Training",
      officer: "Captain Ahmed",
      submittedDate: "2024-01-22",
      amount: "৳ 32,50,00,000",
      status: "submitted",
      remarks: "Under review",
    },
    {
      id: "3",
      directorate: "Naval Engineering",
      officer: "Captain Khan",
      submittedDate: "2024-01-25",
      amount: "৳ 67,75,00,000",
      status: "pending",
      remarks: "Additional documentation required",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
      case "completed":
        return "bg-green-100 text-green-800"
      case "submitted":
      case "collecting":
        return "bg-blue-100 text-blue-800"
      case "pending":
      case "circulated":
        return "bg-yellow-100 text-yellow-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
      case "completed":
        return <CheckCircle className="h-4 w-4" />
      case "submitted":
      case "collecting":
        return <Clock className="h-4 w-4" />
      case "pending":
      case "circulated":
        return <AlertCircle className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-navy-900">Budget Circular Management</h1>
          <p className="text-gray-600 mt-2">Manage budget circulars and collect directorate requirements</p>
        </div>
        <Button className="bg-navy-700 hover:bg-navy-800">
          <FileText className="h-4 w-4 mr-2" />
          Create New Circular
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="circular1">Budget Circular 1</TabsTrigger>
          <TabsTrigger value="circular2">Budget Circular 2</TabsTrigger>
          <TabsTrigger value="responses">Directorate Responses</TabsTrigger>
        </TabsList>

        <TabsContent value="circular1" className="space-y-6">
          <Card className="border-l-4 border-l-navy-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-navy-600" />
                Budget Circular 1 - FY 2024-25
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="circular-title">Circular Title</Label>
                    <Input id="circular-title" defaultValue="Budget Circular 1 - FY 2024-25" className="mt-1" />
                  </div>
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
                    <Label htmlFor="deadline">Response Deadline</Label>
                    <Input id="deadline" type="date" defaultValue="2024-02-15" className="mt-1" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="instructions">Instructions to Directorates</Label>
                    <Textarea
                      id="instructions"
                      rows={6}
                      defaultValue="All Directorates are requested to submit their budget requirements for FY 2024-25 as per the guidelines provided. Please ensure all submissions include detailed justifications and supporting documents."
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="bg-navy-700 hover:bg-navy-800">
                  <Send className="h-4 w-4 mr-2" />
                  Circulate to Directorates
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Template
                </Button>
                <Button variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Attachments
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Circulation Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">12</div>
                  <div className="text-sm text-gray-600">Total Directorates</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">8</div>
                  <div className="text-sm text-gray-600">Responses Received</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">4</div>
                  <div className="text-sm text-gray-600">Pending Responses</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">67%</div>
                  <div className="text-sm text-gray-600">Completion Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="circular2" className="space-y-6">
          <Card className="border-l-4 border-l-ocean-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-ocean-600" />
                Budget Circular 2 - FY 2024-25
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="circular2-title">Circular Title</Label>
                    <Input id="circular2-title" defaultValue="Budget Circular 2 - FY 2024-25" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="circular2-type">Circular Type</Label>
                    <Select defaultValue="supplementary">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="supplementary">Supplementary Budget</SelectItem>
                        <SelectItem value="revised">Revised Requirements</SelectItem>
                        <SelectItem value="emergency">Emergency Allocation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="circular2-deadline">Response Deadline</Label>
                    <Input id="circular2-deadline" type="date" defaultValue="2024-03-01" className="mt-1" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="circular2-instructions">Special Instructions</Label>
                    <Textarea
                      id="circular2-instructions"
                      rows={6}
                      defaultValue="This supplementary circular addresses additional requirements that emerged after Budget Circular 1. Please provide detailed justifications for any new requirements."
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="bg-ocean-700 hover:bg-ocean-800">
                  <Send className="h-4 w-4 mr-2" />
                  Circulate to Directorates
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Template
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="responses" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Directorate Responses</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Directorate</TableHead>
                    <TableHead>Responsible Officer</TableHead>
                    <TableHead>Submitted Date</TableHead>
                    <TableHead>Requested Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {directorateResponses.map((response) => (
                    <TableRow key={response.id}>
                      <TableCell className="font-medium">{response.directorate}</TableCell>
                      <TableCell>{response.officer}</TableCell>
                      <TableCell>{response.submittedDate}</TableCell>
                      <TableCell className="font-mono">{response.amount}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(response.status)}>
                          {getStatusIcon(response.status)}
                          <span className="ml-1">{response.status}</span>
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            Review
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>DOB Final Review & Approval</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="total-requested">Total Amount Requested</Label>
                    <Input id="total-requested" value="৳ 1,45,25,00,000" readOnly className="mt-1 bg-gray-50" />
                  </div>
                  <div>
                    <Label htmlFor="approved-amount">DOB Approved Amount</Label>
                    <Input id="approved-amount" placeholder="Enter approved amount" className="mt-1" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="dob-remarks">DOB Remarks</Label>
                    <Textarea
                      id="dob-remarks"
                      rows={4}
                      placeholder="Enter approval remarks and conditions"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button className="bg-green-600 hover:bg-green-700">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Approve All
                </Button>
                <Button variant="outline">Approve Selected</Button>
                <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
                  Request Revision
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
