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
import { RefreshCw, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Send } from "lucide-react"

interface BudgetRevision {
  id: string
  directorate: string
  originalAmount: string
  revisedAmount: string
  difference: string
  changeType: "increase" | "decrease"
  reason: string
  status: "pending" | "approved" | "rejected"
  justification: string
}

export function RevisedBudget() {
  const [activeTab, setActiveTab] = useState("revisions")

  const budgetRevisions: BudgetRevision[] = [
    {
      id: "1",
      directorate: "Naval Operations",
      originalAmount: "৳ 42,00,00,000",
      revisedAmount: "৳ 48,50,00,000",
      difference: "+৳ 6,50,00,000",
      changeType: "increase",
      reason: "Additional operational requirements",
      status: "pending",
      justification: "Increased fuel costs and additional maritime patrol requirements",
    },
    {
      id: "2",
      directorate: "Naval Training",
      originalAmount: "৳ 30,00,00,000",
      revisedAmount: "৳ 27,50,00,000",
      difference: "-৳ 2,50,00,000",
      changeType: "decrease",
      reason: "Training program optimization",
      status: "approved",
      justification: "Optimized training schedules and reduced external training costs",
    },
    {
      id: "3",
      directorate: "Naval Engineering",
      originalAmount: "৳ 65,00,00,000",
      revisedAmount: "৳ 72,25,00,000",
      difference: "+৳ 7,25,00,000",
      changeType: "increase",
      reason: "Emergency maintenance requirements",
      status: "pending",
      justification: "Critical ship maintenance and equipment replacement needs",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getChangeIcon = (changeType: string) => {
    return changeType === "increase" ? (
      <TrendingUp className="h-4 w-4 text-green-600" />
    ) : (
      <TrendingDown className="h-4 w-4 text-red-600" />
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-navy-900">Revised Budget Management</h1>
          <p className="text-gray-600 mt-2">Manage budget revisions and adjustments for FY 2024-25</p>
        </div>
        <Button className="bg-navy-700 hover:bg-navy-800">
          <RefreshCw className="h-4 w-4 mr-2" />
          Initiate New Revision
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="revisions">Budget Revisions</TabsTrigger>
          <TabsTrigger value="circulation">Revision Circulation</TabsTrigger>
          <TabsTrigger value="approval">DOB Approval</TabsTrigger>
        </TabsList>

        <TabsContent value="revisions" className="space-y-6">
          {/* Revision Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <RefreshCw className="h-8 w-8 text-blue-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Revisions</p>
                    <p className="text-2xl font-bold text-blue-900">12</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Net Increase</p>
                    <p className="text-2xl font-bold text-green-900">৳ 11.25Cr</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <AlertTriangle className="h-8 w-8 text-yellow-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Pending</p>
                    <p className="text-2xl font-bold text-yellow-900">8</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <CheckCircle className="h-8 w-8 text-purple-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Approved</p>
                    <p className="text-2xl font-bold text-purple-900">4</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Revisions Table */}
          <Card>
            <CardHeader>
              <CardTitle>Budget Revision Details</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Directorate</TableHead>
                    <TableHead>Original Amount</TableHead>
                    <TableHead>Revised Amount</TableHead>
                    <TableHead>Change</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {budgetRevisions.map((revision) => (
                    <TableRow key={revision.id}>
                      <TableCell className="font-medium">{revision.directorate}</TableCell>
                      <TableCell className="font-mono">{revision.originalAmount}</TableCell>
                      <TableCell className="font-mono font-semibold">{revision.revisedAmount}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          {getChangeIcon(revision.changeType)}
                          <span
                            className={`ml-1 font-mono ${
                              revision.changeType === "increase" ? "text-green-600" : "text-red-600"
                            }`}
                          >
                            {revision.difference}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>{revision.reason}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(revision.status)}>{revision.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            Edit
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

        <TabsContent value="circulation" className="space-y-6">
          <Card className="border-l-4 border-l-ocean-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Send className="h-5 w-5 mr-2 text-ocean-600" />
                Revision Circulation Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="revision-title">Revision Title</Label>
                    <Input id="revision-title" defaultValue="Mid-Year Budget Revision - FY 2024-25" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="revision-type">Revision Type</Label>
                    <Select defaultValue="mid-year">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mid-year">Mid-Year Revision</SelectItem>
                        <SelectItem value="quarterly">Quarterly Adjustment</SelectItem>
                        <SelectItem value="emergency">Emergency Revision</SelectItem>
                        <SelectItem value="supplementary">Supplementary Budget</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="revision-deadline">Response Deadline</Label>
                    <Input id="revision-deadline" type="date" defaultValue="2024-10-15" className="mt-1" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="revision-instructions">Revision Instructions</Label>
                    <Textarea
                      id="revision-instructions"
                      rows={6}
                      defaultValue="All Directorates are requested to review their current budget allocation and submit revised requirements based on operational changes and emerging needs for the remaining fiscal year."
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="bg-ocean-700 hover:bg-ocean-800">
                  <Send className="h-4 w-4 mr-2" />
                  Circulate to All Directorates
                </Button>
                <Button variant="outline">Send to Selected</Button>
                <Button variant="outline">Save as Draft</Button>
              </div>
            </CardContent>
          </Card>

          {/* Circulation Status */}
          <Card>
            <CardHeader>
              <CardTitle>Circulation Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">12</div>
                  <div className="text-sm text-gray-600">Directorates Notified</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">7</div>
                  <div className="text-sm text-gray-600">Responses Received</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">5</div>
                  <div className="text-sm text-gray-600">Pending Responses</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">58%</div>
                  <div className="text-sm text-gray-600">Completion Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="approval" className="space-y-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                DOB Final Review & Approval
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="total-original">Total Original Budget</Label>
                    <Input id="total-original" value="৳ 2,35,75,00,000" readOnly className="mt-1 bg-gray-50" />
                  </div>
                  <div>
                    <Label htmlFor="total-revised">Total Revised Budget</Label>
                    <Input id="total-revised" value="৳ 2,47,00,00,000" readOnly className="mt-1 bg-gray-50" />
                  </div>
                  <div>
                    <Label htmlFor="net-change">Net Change</Label>
                    <Input
                      id="net-change"
                      value="+৳ 11,25,00,000"
                      readOnly
                      className="mt-1 bg-green-50 text-green-700 font-semibold"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="approval-authority">Approving Authority</Label>
                    <Select defaultValue="dob-director">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dob-director">Director, DOB</SelectItem>
                        <SelectItem value="additional-director">Additional Director, DOB</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="approval-remarks">DOB Approval Remarks</Label>
                    <Textarea
                      id="approval-remarks"
                      rows={4}
                      placeholder="Enter approval remarks and conditions for the revised budget"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="bg-green-600 hover:bg-green-700">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Approve Revised Budget
                </Button>
                <Button variant="outline">Approve with Conditions</Button>
                <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
                  Request Further Revision
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
