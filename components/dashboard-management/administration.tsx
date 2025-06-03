"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AlertCircle, CheckCircle, Edit, Lock, Plus, Search, Trash, UserPlus, Users, Settings } from "lucide-react"

// Sample user data
const users = [
  {
    id: 1,
    name: "Captain Mahmud Ahmed",
    email: "mahmud.ahmed@navy.gov.bd",
    role: "Administrator",
    status: "active",
    lastLogin: "2023-05-15 09:30",
  },
  {
    id: 2,
    name: "Commander Rashid Khan",
    email: "rashid.khan@navy.gov.bd",
    role: "Finance Officer",
    status: "active",
    lastLogin: "2023-05-14 14:22",
  },
  {
    id: 3,
    name: "Lt. Commander Fatima Rahman",
    email: "fatima.rahman@navy.gov.bd",
    role: "Budget Officer",
    status: "active",
    lastLogin: "2023-05-15 11:45",
  },
  {
    id: 4,
    name: "Lt. Kamal Hossain",
    email: "kamal.hossain@navy.gov.bd",
    role: "Approver",
    status: "inactive",
    lastLogin: "2023-05-10 08:15",
  },
  {
    id: 5,
    name: "Sub Lt. Nusrat Jahan",
    email: "nusrat.jahan@navy.gov.bd",
    role: "Data Entry",
    status: "active",
    lastLogin: "2023-05-15 10:05",
  },
]

// Sample roles data
const roles = [
  { id: 1, name: "Administrator", users: 2, permissions: 24, description: "Full system access with all permissions" },
  { id: 2, name: "Finance Officer", users: 5, permissions: 18, description: "Access to financial modules and reports" },
  { id: 3, name: "Budget Officer", users: 8, permissions: 15, description: "Budget preparation and execution access" },
  { id: 4, name: "Approver", users: 12, permissions: 10, description: "Can approve financial transactions" },
  { id: 5, name: "Data Entry", users: 20, permissions: 8, description: "Basic data entry permissions" },
]

// Sample audit logs
const auditLogs = [
  {
    id: 1,
    user: "Captain Mahmud Ahmed",
    action: "User Created",
    details: "Created user: Lt. Nusrat Jahan",
    timestamp: "2023-05-14 09:30",
    ip: "192.168.1.45",
  },
  {
    id: 2,
    user: "System",
    action: "Login Failed",
    details: "Failed login attempt for user: rashid.khan",
    timestamp: "2023-05-14 10:22",
    ip: "192.168.1.60",
  },
  {
    id: 3,
    user: "Commander Rashid Khan",
    action: "Financial Sanction",
    details: "Approved sanction #FS-2023-089",
    timestamp: "2023-05-14 11:45",
    ip: "192.168.1.48",
  },
  {
    id: 4,
    user: "Lt. Commander Fatima Rahman",
    action: "Budget Updated",
    details: "Updated Q2 budget allocation",
    timestamp: "2023-05-14 14:15",
    ip: "192.168.1.52",
  },
  {
    id: 5,
    user: "Captain Mahmud Ahmed",
    action: "System Settings",
    details: "Changed fiscal year settings",
    timestamp: "2023-05-15 09:05",
    ip: "192.168.1.45",
  },
]

export function Administration() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="space-y-8">
      {/* User Management */}
      <section>
        <Tabs defaultValue="users">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-navy-900">System Administration</h2>
              <p className="text-gray-600">Manage users, roles, and system settings</p>
            </div>
            <TabsList>
              <TabsTrigger value="users" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Users</span>
              </TabsTrigger>
              <TabsTrigger value="roles" className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                <span>Roles</span>
              </TabsTrigger>
              <TabsTrigger value="audit" className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                <span>Audit Logs</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="users">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>User Management</CardTitle>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" className="flex items-center gap-1">
                        <UserPlus className="h-4 w-4" />
                        <span>Add User</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add New User</DialogTitle>
                        <DialogDescription>Create a new user account and assign roles</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Full Name
                          </Label>
                          <Input id="name" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="email" className="text-right">
                            Email
                          </Label>
                          <Input id="email" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="role" className="text-right">
                            Role
                          </Label>
                          <Select>
                            <SelectTrigger className="col-span-3">
                              <SelectValue placeholder="Select role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="admin">Administrator</SelectItem>
                              <SelectItem value="finance">Finance Officer</SelectItem>
                              <SelectItem value="budget">Budget Officer</SelectItem>
                              <SelectItem value="approver">Approver</SelectItem>
                              <SelectItem value="data-entry">Data Entry</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Create User</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
                <CardDescription>Manage user accounts and permissions</CardDescription>
                <div className="flex items-center gap-2 mt-4">
                  <Search className="h-4 w-4 text-gray-500" />
                  <Input
                    placeholder="Search users..."
                    className="max-w-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Login</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>
                          <Badge
                            variant={user.status === "active" ? "outline" : "secondary"}
                            className={
                              user.status === "active"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                            }
                          >
                            {user.status === "active" ? (
                              <span className="flex items-center gap-1">
                                <CheckCircle className="h-3 w-3" />
                                Active
                              </span>
                            ) : (
                              "Inactive"
                            )}
                          </Badge>
                        </TableCell>
                        <TableCell>{user.lastLogin}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-gray-600">Showing 5 of 47 users</div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="roles">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Role Management</CardTitle>
                  <Button size="sm" className="flex items-center gap-1">
                    <Plus className="h-4 w-4" />
                    <span>Add Role</span>
                  </Button>
                </div>
                <CardDescription>Manage roles and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Role Name</TableHead>
                      <TableHead>Users</TableHead>
                      <TableHead>Permissions</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {roles.map((role) => (
                      <TableRow key={role.id}>
                        <TableCell className="font-medium">{role.name}</TableCell>
                        <TableCell>{role.users}</TableCell>
                        <TableCell>{role.permissions}</TableCell>
                        <TableCell>{role.description}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash className="h-4 w-4" />
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

          <TabsContent value="audit">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Audit Logs</CardTitle>
                  <div className="flex items-center gap-2">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="Filter by action" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Actions</SelectItem>
                        <SelectItem value="login">Login/Logout</SelectItem>
                        <SelectItem value="user">User Management</SelectItem>
                        <SelectItem value="financial">Financial Actions</SelectItem>
                        <SelectItem value="system">System Changes</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm">
                      Export Logs
                    </Button>
                  </div>
                </div>
                <CardDescription>System activity and security audit trail</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Action</TableHead>
                      <TableHead>Details</TableHead>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>IP Address</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {auditLogs.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell className="font-medium">{log.user}</TableCell>
                        <TableCell>{log.action}</TableCell>
                        <TableCell>{log.details}</TableCell>
                        <TableCell>{log.timestamp}</TableCell>
                        <TableCell>{log.ip}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-gray-600">Showing 5 of 1,247 logs</div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>Configure system parameters and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">General Settings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fiscal-year">Current Fiscal Year</Label>
                      <Select defaultValue="2023-2024">
                        <SelectTrigger id="fiscal-year">
                          <SelectValue placeholder="Select fiscal year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2022-2023">2022-2023</SelectItem>
                          <SelectItem value="2023-2024">2023-2024</SelectItem>
                          <SelectItem value="2024-2025">2024-2025</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date-format">Date Format</Label>
                      <Select defaultValue="dd-mm-yyyy">
                        <SelectTrigger id="date-format">
                          <SelectValue placeholder="Select date format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dd-mm-yyyy">DD-MM-YYYY</SelectItem>
                          <SelectItem value="mm-dd-yyyy">MM-DD-YYYY</SelectItem>
                          <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Security Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="2fa" className="text-base">
                          Two-Factor Authentication
                        </Label>
                        <p className="text-sm text-gray-500">Require 2FA for all administrative users</p>
                      </div>
                      <Switch id="2fa" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="session" className="text-base">
                          Session Timeout
                        </Label>
                        <p className="text-sm text-gray-500">Automatically log out inactive users</p>
                      </div>
                      <Select defaultValue="30">
                        <SelectTrigger id="session" className="w-[120px]">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="15">15 minutes</SelectItem>
                          <SelectItem value="30">30 minutes</SelectItem>
                          <SelectItem value="60">60 minutes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="password-policy" className="text-base">
                          Password Policy
                        </Label>
                        <p className="text-sm text-gray-500">Set minimum password requirements</p>
                      </div>
                      <Select defaultValue="strong">
                        <SelectTrigger id="password-policy" className="w-[120px]">
                          <SelectValue placeholder="Select policy" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">Basic</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="strong">Strong</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Notification Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-notifications" className="text-base">
                          Email Notifications
                        </Label>
                        <p className="text-sm text-gray-500">Send email notifications for important events</p>
                      </div>
                      <Switch id="email-notifications" checked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="system-notifications" className="text-base">
                          System Notifications
                        </Label>
                        <p className="text-sm text-gray-500">Show in-app notifications</p>
                      </div>
                      <Switch id="system-notifications" checked />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
