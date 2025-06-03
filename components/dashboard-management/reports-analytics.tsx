"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  PieChart,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  Pie,
  Area,
  Cell,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Download, Filter, Printer, RefreshCw } from "lucide-react"

// Sample data for charts
const monthlyExpenditure = [
  { month: "Jan", actual: 4000, planned: 2400 },
  { month: "Feb", actual: 3000, planned: 1398 },
  { month: "Mar", actual: 2000, planned: 9800 },
  { month: "Apr", actual: 2780, planned: 3908 },
  { month: "May", actual: 1890, planned: 4800 },
  { month: "Jun", actual: 2390, planned: 3800 },
  { month: "Jul", actual: 3490, planned: 4300 },
  { month: "Aug", actual: 2490, planned: 4300 },
  { month: "Sep", actual: 1490, planned: 3300 },
  { month: "Oct", actual: 2490, planned: 5300 },
  { month: "Nov", actual: 3490, planned: 4300 },
  { month: "Dec", actual: 4490, planned: 4300 },
]

const budgetAllocation = [
  { name: "Operations", value: 400 },
  { name: "Maintenance", value: 300 },
  { name: "Personnel", value: 300 },
  { name: "Training", value: 200 },
  { name: "Infrastructure", value: 100 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"]

const budgetTrends = [
  { year: "2019", allocation: 4000, expenditure: 2400, savings: 1600 },
  { year: "2020", allocation: 3000, expenditure: 1398, savings: 1602 },
  { year: "2021", allocation: 2000, expenditure: 1800, savings: 200 },
  { year: "2022", allocation: 2780, expenditure: 2500, savings: 280 },
  { year: "2023", allocation: 1890, expenditure: 1700, savings: 190 },
]

export function ReportsAnalytics() {
  const [reportPeriod, setReportPeriod] = useState("current-year")

  return (
    <div className="space-y-8">
      {/* Analytics Dashboard */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-navy-900">Analytics Dashboard</h2>
            <p className="text-gray-600">Key financial metrics and performance indicators</p>
          </div>
          <div className="flex items-center gap-3">
            <Select defaultValue="current-year" onValueChange={setReportPeriod}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="current-year">Current Year</SelectItem>
                <SelectItem value="previous-year">Previous Year</SelectItem>
                <SelectItem value="last-5-years">Last 5 Years</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Budget</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">৳ 1,245.8M</div>
              <p className="text-xs text-green-600 flex items-center mt-1">+2.5% from previous year</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Expenditure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">৳ 876.3M</div>
              <p className="text-xs text-green-600 flex items-center mt-1">70.3% of total budget</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Remaining</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">৳ 369.5M</div>
              <p className="text-xs text-amber-600 flex items-center mt-1">29.7% of total budget</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Financial Sanctions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">247</div>
              <p className="text-xs text-blue-600 flex items-center mt-1">৳ 912.6M sanctioned</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Expenditure</CardTitle>
              <CardDescription>Actual vs Planned Expenditure</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  actual: {
                    label: "Actual",
                    color: "hsl(var(--chart-1))",
                  },
                  planned: {
                    label: "Planned",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyExpenditure}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="actual" fill="var(--color-actual)" />
                    <Bar dataKey="planned" fill="var(--color-planned)" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Budget Allocation</CardTitle>
              <CardDescription>Distribution by Category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={budgetAllocation}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {budgetAllocation.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reports Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-navy-900">Reports</h2>
            <p className="text-gray-600">Generate and view financial reports</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Printer className="h-4 w-4" />
              <span>Print</span>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="expenditure">
          <TabsList>
            <TabsTrigger value="expenditure">Expenditure Reports</TabsTrigger>
            <TabsTrigger value="budget-transfer">Budget Transfer</TabsTrigger>
            <TabsTrigger value="coast-guard">Coast Guard</TabsTrigger>
            <TabsTrigger value="custom">Custom Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="expenditure" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Budget Trends (5 Years)</CardTitle>
                <CardDescription>Allocation, Expenditure and Savings</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    allocation: {
                      label: "Allocation",
                      color: "hsl(var(--chart-1))",
                    },
                    expenditure: {
                      label: "Expenditure",
                      color: "hsl(var(--chart-2))",
                    },
                    savings: {
                      label: "Savings",
                      color: "hsl(var(--chart-3))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={budgetTrends}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="allocation"
                        stackId="1"
                        stroke="var(--color-allocation)"
                        fill="var(--color-allocation)"
                      />
                      <Area
                        type="monotone"
                        dataKey="expenditure"
                        stackId="2"
                        stroke="var(--color-expenditure)"
                        fill="var(--color-expenditure)"
                      />
                      <Area
                        type="monotone"
                        dataKey="savings"
                        stackId="3"
                        stroke="var(--color-savings)"
                        fill="var(--color-savings)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="budget-transfer" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Budget Transfer Reports</CardTitle>
                <CardDescription>Track budget transfers between departments</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Select parameters to generate budget transfer reports</p>
                {/* Budget Transfer Report Content would go here */}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="coast-guard" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Coast Guard Reports</CardTitle>
                <CardDescription>Financial reports for Coast Guard operations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Select parameters to generate Coast Guard reports</p>
                {/* Coast Guard Report Content would go here */}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="custom" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Custom Report Builder</CardTitle>
                <CardDescription>Create custom reports with selected parameters</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Use the report builder to create custom financial reports</p>
                {/* Custom Report Builder Content would go here */}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
