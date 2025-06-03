"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
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
import { Anchor, Building, Edit, FileSignature, Plus, Search, Ship, Trash } from "lucide-react"

// Sample ships data
const ships = [
  {
    id: 1,
    name: "BNS Bangabandhu",
    type: "Frigate",
    category: "Combat",
    commissioned: "2001-06-20",
    status: "active",
    personnel: 200,
  },
  {
    id: 2,
    name: "BNS Osman",
    type: "Corvette",
    category: "Combat",
    commissioned: "2013-11-04",
    status: "active",
    personnel: 120,
  },
  {
    id: 3,
    name: "BNS Durjoy",
    type: "Large Patrol Craft",
    category: "Patrol",
    commissioned: "2013-08-31",
    status: "maintenance",
    personnel: 70,
  },
  {
    id: 4,
    name: "BNS Nirmul",
    type: "Missile Boat",
    category: "Combat",
    commissioned: "2013-01-24",
    status: "active",
    personnel: 40,
  },
  {
    id: 5,
    name: "BNS Adamya",
    type: "Submarine",
    category: "Combat",
    commissioned: "2016-03-12",
    status: "active",
    personnel: 80,
  },
]

// Sample organizations data
const organizations = [
  { id: 1, name: "Naval Headquarters", type: "Command", location: "Dhaka", personnel: 450, budget: "৳ 120.5M" },
  {
    id: 2,
    name: "Chittagong Naval Area",
    type: "Area Command",
    location: "Chittagong",
    personnel: 350,
    budget: "৳ 85.2M",
  },
  { id: 3, name: "Khulna Naval Area", type: "Area Command", location: "Khulna", personnel: 280, budget: "৳ 65.8M" },
  { id: 4, name: "Naval Aviation", type: "Specialized", location: "Dhaka", personnel: 150, budget: "৳ 45.3M" },
  {
    id: 5,
    name: "Special Warfare Diving and Salvage",
    type: "Specialized",
    location: "Chittagong",
    personnel: 120,
    budget: "৳ 38.7M",
  },
]

// Sample signatures data
const signatures = [
  {
    id: 1,
    name: "Rear Admiral Mahbub Ali Khan",
    role: "Chief of Naval Staff",
    authority: "All Financial Sanctions",
    status: "active",
  },
  {
    id: 2,
    name: "Commodore Zahir Ahmed",
    role: "Director of Naval Budget",
    authority: "Budget Approvals",
    status: "active",
  },
  {
    id: 3,
    name: "Captain Mahmud Hossain",
    role: "Director of Naval Procurement",
    authority: "Procurement Sanctions",
    status: "active",
  },
  { id: 4, name: "Commander Rashid Khan", role: "Finance Controller", authority: "Bill Payments", status: "active" },
  {
    id: 5,
    name: "Lt. Commander Fatima Rahman",
    role: "Budget Officer",
    authority: "Budget Preparation",
    status: "inactive",
  },
]

export function ShipOrgManagement() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="space-y-8">
      <Tabs defaultValue="ships">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-navy-900">Ship & Organization Management</h2>
            <p className="text-gray-600">Manage naval ships, organizations, and signature authorities</p>
          </div>
          <TabsList>
            <TabsTrigger value="ships" className="flex items-center gap-2">
              <Ship className="h-4 w-4" />
              <span>Ships</span>
            </TabsTrigger>
            <TabsTrigger value="organizations" className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              <span>Organizations</span>
            </TabsTrigger>
            <TabsTrigger value="signatures" className="flex items-center gap-2">
              <FileSignature className="h-4 w-4" />
              <span>Signatures</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="ships">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Ship Registry</CardTitle>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" className="flex items-center gap-1">
                      <Anchor className="h-4 w-4" />
                      <span>Add Ship</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Ship</DialogTitle>
                      <DialogDescription>Register a new naval ship in the system</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="ship-name" className="text-right">
                          Ship Name
                        </Label>
                        <Input id="ship-name" placeholder="BNS" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="ship-type" className="text-right">
                          Type
                        </Label>
                        <Select>
                          <SelectTrigger id="ship-type" className="col-span-3">
                            <SelectValue placeholder="Select ship type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="frigate">Frigate</SelectItem>
                            <SelectItem value="corvette">Corvette</SelectItem>
                            <SelectItem value="patrol">Patrol Craft</SelectItem>
                            <SelectItem value="submarine">Submarine</SelectItem>
                            <SelectItem value="auxiliary">Auxiliary</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="ship-category" className="text-right">
                          Category
                        </Label>
                        <Select>
                          <SelectTrigger id="ship-category" className="col-span-3">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="combat">Combat</SelectItem>
                            <SelectItem value="patrol">Patrol</SelectItem>
                            <SelectItem value="support">Support</SelectItem>
                            <SelectItem value="training">Training</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="commissioned" className="text-right">
                          Commissioned
                        </Label>
                        <Input id="commissioned" type="date" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="personnel" className="text-right">
                          Personnel
                        </Label>
                        <Input id="personnel" type="number" className="col-span-3" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Register Ship</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
              <CardDescription>Manage naval ships and vessels</CardDescription>
              <div className="flex items-center gap-2 mt-4">
                <Search className="h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search ships..."
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
                    <TableHead>Ship Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Commissioned</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Personnel</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ships.map((ship) => (
                    <TableRow key={ship.id}>
                      <TableCell className="font-medium">{ship.name}</TableCell>
                      <TableCell>{ship.type}</TableCell>
                      <TableCell>{ship.category}</TableCell>
                      <TableCell>{ship.commissioned}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            ship.status === "active"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : "bg-amber-100 text-amber-800 hover:bg-amber-100"
                          }
                        >
                          {ship.status === "active" ? "Active" : "Maintenance"}
                        </Badge>
                      </TableCell>
                      <TableCell>{ship.personnel}</TableCell>
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
              <div className="text-sm text-gray-600">Showing 5 of 28 ships</div>
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

        <TabsContent value="organizations">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Organization Registry</CardTitle>
                <Button size="sm" className="flex items-center gap-1">
                  <Plus className="h-4 w-4" />
                  <span>Add Organization</span>
                </Button>
              </div>
              <CardDescription>Manage naval organizations and units</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Organization Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Personnel</TableHead>
                    <TableHead>Budget Allocation</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {organizations.map((org) => (
                    <TableRow key={org.id}>
                      <TableCell className="font-medium">{org.name}</TableCell>
                      <TableCell>{org.type}</TableCell>
                      <TableCell>{org.location}</TableCell>
                      <TableCell>{org.personnel}</TableCell>
                      <TableCell>{org.budget}</TableCell>
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
              <div className="text-sm text-gray-600">Showing 5 of 15 organizations</div>
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

        <TabsContent value="signatures">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Signature Management</CardTitle>
                <Button size="sm" className="flex items-center gap-1">
                  <FileSignature className="h-4 w-4" />
                  <span>Add Signature Authority</span>
                </Button>
              </div>
              <CardDescription>Manage signature authorities and approvals</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Authority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {signatures.map((sig) => (
                    <TableRow key={sig.id}>
                      <TableCell className="font-medium">{sig.name}</TableCell>
                      <TableCell>{sig.role}</TableCell>
                      <TableCell>{sig.authority}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            sig.status === "active"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                          }
                        >
                          {sig.status === "active" ? "Active" : "Inactive"}
                        </Badge>
                      </TableCell>
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
              <div className="text-sm text-gray-600">Showing 5 of 156 signature authorities</div>
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
      </Tabs>
    </div>
  )
}
