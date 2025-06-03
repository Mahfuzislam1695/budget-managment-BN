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
import { CreditCard, Send, CheckCircle, Clock, AlertCircle, Download, BarChart3, FileText } from "lucide-react"

interface LC {
  id: string
  lcNo: string
  beneficiary: string
  amount: string
  purpose: string
  openingDate: string
  expiryDate: string
  status: "draft" | "opened" | "confirmed" | "utilized" | "expired"
  directorate: string
  bank: string
  currency: string
}

interface Remittance {
  id: string
  remittanceNo: string
  recipient: string
  amount: string
  purpose: string
  remittanceDate: string
  status: "pending" | "processed" | "completed" | "failed"
  directorate: string
  method: string
  country: string
}

export function LCRemittance() {
  const [activeTab, setActiveTab] = useState("lc-create")

  const lcs: LC[] = [
    {
      id: "1",
      lcNo: "LC-2024-001",
      beneficiary: "Marine Systems International",
      amount: "USD 250,000",
      purpose: "Navigation equipment procurement",
      openingDate: "2024-03-01",
      expiryDate: "2024-06-01",
      status: "confirmed",
      directorate: "Naval Operations",
      bank: "Sonali Bank Ltd.",
      currency: "USD",
    },
    {
      id: "2",
      lcNo: "LC-2024-002",
      beneficiary: "Training Solutions Corp",
      amount: "EUR 180,000",
      purpose: "Simulator software and training",
      openingDate: "2024-03-05",
      expiryDate: "2024-07-05",
      status: "opened",
      directorate: "Naval Training",
      bank: "Janata Bank Ltd.",
      currency: "EUR",
    },
  ]

  const remittances: Remittance[] = [
    {
      id: "1",
      remittanceNo: "REM-2024-001",
      recipient: "Defense Technology Ltd.",
      amount: "USD 75,000",
      purpose: "Technical consultation fees",
      remittanceDate: "2024-03-10",
      status: "completed",
      directorate: "Naval Engineering",
      method: "SWIFT Transfer",
      country: "United Kingdom",
    },
    {
      id: "2",
      remittanceNo: "REM-2024-002",
      recipient: "Maritime Training Institute",
      amount: "USD 45,000",
      purpose: "Officer training program",
      remittanceDate: "2024-03-12",
      status: "pending",
      directorate: "Naval Training",
      method: "Wire Transfer",
      country: "Singapore",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
      case "completed":
        return "bg-green-100 text-green-800"
      case "utilized":
      case "processed":
        return "bg-blue-100 text-blue-800"
      case "opened":
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "expired":
      case "failed":
        return "bg-red-100 text-red-800"
      case "draft":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
      case "completed":
        return <CheckCircle className="h-4 w-4" />
      case "opened":
      case "pending":
        return <Clock className="h-4 w-4" />
      case "expired":
      case "failed":
        return <AlertCircle className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-navy-900">LC & Remittance Management</h1>
          <p className="text-gray-600 mt-2">Manage Letters of Credit and international remittances</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <BarChart3 className="h-4 w-4 mr-2" />
            Reports
          </Button>
          <Button className="bg-navy-700 hover:bg-navy-800">
            <CreditCard className="h-4 w-4 mr-2" />
            New LC/Remittance
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="lc-create">Create LC</TabsTrigger>
          <TabsTrigger value="lc-approve">Approve LC</TabsTrigger>
          <TabsTrigger value="remittance">Remittance</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="lc-create" className="space-y-6">
          <Card className="border-l-4 border-l-navy-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2 text-navy-600" />
                Create Letter of Credit
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="lc-no">LC Number</Label>
                    <Input id="lc-no" placeholder="Auto-generated" readOnly className="bg-gray-50" />
                  </div>
                  <div>
                    <Label htmlFor="beneficiary">Beneficiary Name</Label>
                    <Input id="beneficiary" placeholder="Enter beneficiary name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="beneficiary-address">Beneficiary Address</Label>
                    <Textarea
                      id="beneficiary-address"
                      rows={3}
                      placeholder="Enter beneficiary address"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lc-amount">LC Amount</Label>
                    <Input id="lc-amount" placeholder="0.00" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="currency">Currency</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USD">USD - US Dollar</SelectItem>
                        <SelectItem value="EUR">EUR - Euro</SelectItem>
                        <SelectItem value="GBP">GBP - British Pound</SelectItem>
                        <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
                        <SelectItem value="BDT">BDT - Bangladeshi Taka</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="opening-date">Opening Date</Label>
                    <Input id="opening-date" type="date" className="mt-1" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="lc-directorate">Requesting Directorate</Label>
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
                    <Label htmlFor="issuing-bank">Issuing Bank</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select bank" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sonali">Sonali Bank Ltd.</SelectItem>
                        <SelectItem value="janata">Janata Bank Ltd.</SelectItem>
                        <SelectItem value="agrani">Agrani Bank Ltd.</SelectItem>
                        <SelectItem value="rupali">Rupali Bank Ltd.</SelectItem>
                        <SelectItem value="bangladesh-bank">Bangladesh Bank</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="expiry-date">Expiry Date</Label>
                    <Input id="expiry-date" type="date" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lc-purpose">Purpose of LC</Label>
                    <Textarea
                      id="lc-purpose"
                      rows={4}
                      placeholder="Describe the purpose and goods/services to be procured"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="payment-terms">Payment Terms</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment terms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sight">At Sight</SelectItem>
                        <SelectItem value="30-days">30 Days</SelectItem>
                        <SelectItem value="60-days">60 Days</SelectItem>
                        <SelectItem value="90-days">90 Days</SelectItem>
                        <SelectItem value="deferred">Deferred Payment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="lc-documents">Required Documents</Label>
                  <Textarea
                    id="lc-documents"
                    rows={3}
                    placeholder="List required documents (Invoice, Packing List, Bill of Lading, etc.)"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="special-conditions">Special Conditions</Label>
                  <Textarea
                    id="special-conditions"
                    rows={3}
                    placeholder="Enter any special conditions or requirements"
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="bg-navy-700 hover:bg-navy-800">
                  <Send className="h-4 w-4 mr-2" />
                  Submit LC Application
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

        <TabsContent value="lc-approve" className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <CreditCard className="h-8 w-8 text-blue-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total LCs</p>
                    <p className="text-2xl font-bold text-blue-900">45</p>
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
                    <p className="text-2xl font-bold text-yellow-900">12</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Active LCs</p>
                    <p className="text-2xl font-bold text-green-900">28</p>
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
                    <p className="text-2xl font-bold text-purple-900">$2.8M</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* LC Table */}
          <Card>
            <CardHeader>
              <CardTitle>Letters of Credit</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>LC No.</TableHead>
                    <TableHead>Beneficiary</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Purpose</TableHead>
                    <TableHead>Expiry Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lcs.map((lc) => (
                    <TableRow key={lc.id}>
                      <TableCell className="font-mono text-sm">{lc.lcNo}</TableCell>
                      <TableCell className="font-medium">{lc.beneficiary}</TableCell>
                      <TableCell className="font-mono font-semibold">{lc.amount}</TableCell>
                      <TableCell className="max-w-xs truncate">{lc.purpose}</TableCell>
                      <TableCell>{lc.expiryDate}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(lc.status)}>
                          {getStatusIcon(lc.status)}
                          <span className="ml-1">{lc.status}</span>
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            View
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

          {/* LC Approval Form */}
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                LC Approval Process
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="selected-lc">Select LC</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select LC for approval" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="LC-2024-002">LC-2024-002 - Training Solutions Corp</SelectItem>
                        <SelectItem value="LC-2024-003">LC-2024-003 - Defense Equipment Ltd</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="approved-lc-amount">Approved Amount</Label>
                    <Input id="approved-lc-amount" placeholder="0.00" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lc-approval-authority">Approving Authority</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select approving authority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="director">Director, DOB</SelectItem>
                        <SelectItem value="additional-director">Additional Director, DOB</SelectItem>
                        <SelectItem value="foreign-exchange">Foreign Exchange Controller</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="lc-approval-remarks">Approval Remarks</Label>
                    <Textarea
                      id="lc-approval-remarks"
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
                  Approve LC
                </Button>
                <Button variant="outline">Approve with Conditions</Button>
                <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
                  Reject LC
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="remittance" className="space-y-6">
          <Card className="border-l-4 border-l-ocean-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Send className="h-5 w-5 mr-2 text-ocean-600" />
                Create Remittance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="remittance-no">Remittance Number</Label>
                    <Input id="remittance-no" placeholder="Auto-generated" readOnly className="bg-gray-50" />
                  </div>
                  <div>
                    <Label htmlFor="recipient-name">Recipient Name</Label>
                    <Input id="recipient-name" placeholder="Enter recipient name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="recipient-address">Recipient Address</Label>
                    <Textarea id="recipient-address" rows={3} placeholder="Enter recipient address" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="remittance-amount">Remittance Amount</Label>
                    <Input id="remittance-amount" placeholder="0.00" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="remittance-currency">Currency</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USD">USD - US Dollar</SelectItem>
                        <SelectItem value="EUR">EUR - Euro</SelectItem>
                        <SelectItem value="GBP">GBP - British Pound</SelectItem>
                        <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
                        <SelectItem value="BDT">BDT - Bangladeshi Taka</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="remittance-directorate">Requesting Directorate</Label>
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
                    <Label htmlFor="destination-country">Destination Country</Label>
                    <Input id="destination-country" placeholder="Enter destination country" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="remittance-method">Remittance Method</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="swift">SWIFT Transfer</SelectItem>
                        <SelectItem value="wire">Wire Transfer</SelectItem>
                        <SelectItem value="online">Online Transfer</SelectItem>
                        <SelectItem value="demand-draft">Demand Draft</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="remittance-purpose">Purpose of Remittance</Label>
                    <Textarea
                      id="remittance-purpose"
                      rows={4}
                      placeholder="Describe the purpose of remittance"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="bg-ocean-700 hover:bg-ocean-800">
                  <Send className="h-4 w-4 mr-2" />
                  Submit Remittance
                </Button>
                <Button variant="outline">Save as Draft</Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Form
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Remittance Table */}
          <Card>
            <CardHeader>
              <CardTitle>Remittance Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Remittance No.</TableHead>
                    <TableHead>Recipient</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Country</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {remittances.map((remittance) => (
                    <TableRow key={remittance.id}>
                      <TableCell className="font-mono text-sm">{remittance.remittanceNo}</TableCell>
                      <TableCell className="font-medium">{remittance.recipient}</TableCell>
                      <TableCell className="font-mono font-semibold">{remittance.amount}</TableCell>
                      <TableCell>{remittance.country}</TableCell>
                      <TableCell>{remittance.method}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(remittance.status)}>
                          {getStatusIcon(remittance.status)}
                          <span className="ml-1">{remittance.status}</span>
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            View
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
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-purple-600" />
                LC & Remittance Reports
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="lc-rem-report-type">Report Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select report type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lc-summary">LC Summary Report</SelectItem>
                        <SelectItem value="lc-detailed">LC Detailed Report</SelectItem>
                        <SelectItem value="remittance-summary">Remittance Summary</SelectItem>
                        <SelectItem value="remittance-detailed">Remittance Detailed</SelectItem>
                        <SelectItem value="combined">Combined LC & Remittance</SelectItem>
                        <SelectItem value="currency-wise">Currency-wise Report</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="lc-rem-date-from">From Date</Label>
                    <Input id="lc-rem-date-from" type="date" className="mt-1" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="lc-rem-report-format">Format</Label>
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
                    <Label htmlFor="lc-rem-date-to">To Date</Label>
                    <Input id="lc-rem-date-to" type="date" className="mt-1" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="lc-rem-filter-directorate">Filter by Directorate</Label>
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
                    <Label htmlFor="lc-rem-filter-currency">Filter by Currency</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="All Currencies" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Currencies</SelectItem>
                        <SelectItem value="USD">USD</SelectItem>
                        <SelectItem value="EUR">EUR</SelectItem>
                        <SelectItem value="GBP">GBP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="bg-purple-600 hover:bg-purple-700">
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
