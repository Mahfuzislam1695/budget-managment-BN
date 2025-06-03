"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import { Layers, CheckCircle, Calculator, TrendingUp, Download } from "lucide-react"

interface AllocationData {
  directorate: string
  allocatedAmount: string
  percentage: number
  status: "allocated" | "pending" | "revised"
  units: number
  category: string
}

export function BudgetAllocation() {
  const allocationData: AllocationData[] = [
    {
      directorate: "Naval Operations",
      allocatedAmount: "৳ 42,00,00,000",
      percentage: 18.5,
      status: "allocated",
      units: 8,
      category: "Operations",
    },
    {
      directorate: "Naval Training",
      allocatedAmount: "৳ 30,00,00,000",
      percentage: 13.2,
      status: "allocated",
      units: 5,
      category: "Training",
    },
    {
      directorate: "Naval Engineering",
      allocatedAmount: "৳ 65,00,00,000",
      percentage: 28.6,
      status: "allocated",
      units: 12,
      category: "Engineering",
    },
    {
      directorate: "Naval Intelligence",
      allocatedAmount: "৳ 22,50,00,000",
      percentage: 9.9,
      status: "allocated",
      units: 3,
      category: "Intelligence",
    },
    {
      directorate: "Naval Medical",
      allocatedAmount: "৳ 18,75,00,000",
      percentage: 8.3,
      status: "allocated",
      units: 6,
      category: "Medical",
    },
    {
      directorate: "Naval Logistics",
      allocatedAmount: "৳ 48,75,00,000",
      percentage: 21.5,
      status: "allocated",
      units: 10,
      category: "Logistics",
    },
  ]

  const pieChartData = allocationData.map((item) => ({
    name: item.directorate.replace("Naval ", ""),
    value: item.percentage,
    amount: item.allocatedAmount,
  }))

  const barChartData = allocationData.map((item) => ({
    name: item.directorate.replace("Naval ", ""),
    amount: Number.parseFloat(item.allocatedAmount.replace(/[৳,]/g, "")) / 10000000, // Convert to crores
  }))

  const COLORS = ["#0c4a6e", "#0369a1", "#0284c7", "#0ea5e9", "#38bdf8", "#7dd3fc"]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "allocated":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "revised":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-navy-900">Budget Allocation</h1>
          <p className="text-gray-600 mt-2">Manage and monitor budget allocation across directorates and units</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Allocation
          </Button>
          <Button className="bg-navy-700 hover:bg-navy-800">
            <Layers className="h-4 w-4 mr-2" />
            Finalize Allocation
          </Button>
        </div>
      </div>

      {/* Allocation Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-navy-500">
          <CardContent className="p-6">
            <div className="flex items-center">
              <Calculator className="h-8 w-8 text-navy-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Budget</p>
                <p className="text-2xl font-bold text-navy-900">৳ 227Cr</p>
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
                <p className="text-2xl font-bold text-green-900">৳ 227Cr</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex items-center">
              <Layers className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Directorates</p>
                <p className="text-2xl font-bold text-blue-900">6</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardContent className="p-6">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Units</p>
                <p className="text-2xl font-bold text-purple-900">44</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Allocation Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value, name) => [`${value}%`, name]} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Allocation by Directorate (Crores)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                <YAxis />
                <Tooltip formatter={(value) => [`৳ ${value} Cr`, "Amount"]} />
                <Bar dataKey="amount" fill="#0c4a6e" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Allocation Table */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Budget Allocation</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Directorate</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Allocated Amount</TableHead>
                <TableHead>Percentage</TableHead>
                <TableHead>Units</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allocationData.map((allocation, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{allocation.directorate}</TableCell>
                  <TableCell>{allocation.category}</TableCell>
                  <TableCell className="font-mono font-semibold">{allocation.allocatedAmount}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div
                          className="bg-navy-600 h-2 rounded-full"
                          style={{ width: `${allocation.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm">{allocation.percentage}%</span>
                    </div>
                  </TableCell>
                  <TableCell>{allocation.units}</TableCell>
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

      {/* DOB Final Approval */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center">
            <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
            DOB Final Allocation Approval
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="allocation-reference">Allocation Reference No.</Label>
                <Input id="allocation-reference" placeholder="DOB/BA/2024-25/001" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="effective-from">Effective From</Label>
                <Input id="effective-from" type="date" defaultValue="2024-04-01" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="approving-officer">Approving Officer</Label>
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
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="allocation-remarks">Allocation Remarks</Label>
                <Textarea
                  id="allocation-remarks"
                  rows={6}
                  placeholder="Enter final allocation remarks and conditions"
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <Button className="bg-green-600 hover:bg-green-700">
              <CheckCircle className="h-4 w-4 mr-2" />
              Approve Final Allocation
            </Button>
            <Button variant="outline">Save as Draft</Button>
            <Button variant="outline">Generate Allocation Report</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
