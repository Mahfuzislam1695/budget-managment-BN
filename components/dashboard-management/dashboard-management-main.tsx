"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ReportsAnalytics } from "./reports-analytics"
import { Administration } from "./administration"
import { ShipOrgManagement } from "./ship-org-management"
import { BarChart3, Settings, Ship } from "lucide-react"

export function DashboardManagementMain() {
  const [activeTab, setActiveTab] = useState("reports")

  return (
    <Tabs defaultValue="reports" className="w-full" onValueChange={setActiveTab}>
      <TabsList className="grid grid-cols-3 mb-8">
        <TabsTrigger value="reports" className="flex items-center gap-2">
          <BarChart3 className="h-4 w-4" />
          <span>Reports & Analytics</span>
        </TabsTrigger>
        <TabsTrigger value="administration" className="flex items-center gap-2">
          <Settings className="h-4 w-4" />
          <span>Administration</span>
        </TabsTrigger>
        <TabsTrigger value="ship-org" className="flex items-center gap-2">
          <Ship className="h-4 w-4" />
          <span>Ship/Org Management</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="reports" className="mt-0">
        <ReportsAnalytics />
      </TabsContent>

      <TabsContent value="administration" className="mt-0">
        <Administration />
      </TabsContent>

      <TabsContent value="ship-org" className="mt-0">
        <ShipOrgManagement />
      </TabsContent>
    </Tabs>
  )
}
