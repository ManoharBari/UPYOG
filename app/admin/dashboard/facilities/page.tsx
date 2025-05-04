"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Pencil, Trash2, Upload, Building, Search } from "lucide-react";
import { facilities } from "@/lib/data";

export default function FacilityManager() {
  const [facilityType, setFacilityType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState<any>(null);
  const [newFacility, setNewFacility] = useState({
    name: "",
    type: "hall",
    location: "",
    capacity: "",
    pricePerHour: "",
    description: "",
    amenities: "",
    image: "/placeholder.svg?height=300&width=400",
  });

  // Filter facilities based on selected type and search query
  const filteredFacilities = facilities.filter((facility) => {
    const matchesType =
      facilityType === "all" || facility.type === facilityType;
    const matchesSearch =
      facility.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      facility.location.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesType && matchesSearch;
  });

  const handleAddFacility = () => {
    // In a real app, this would add the facility to the database
    alert("Facility added successfully!");
    setIsAddDialogOpen(false);
    setNewFacility({
      name: "",
      type: "hall",
      location: "",
      capacity: "",
      pricePerHour: "",
      description: "",
      amenities: "",
      image: "/placeholder.svg?height=300&width=400",
    });
  };

  const handleEditFacility = () => {
    // In a real app, this would update the facility in the database
    alert(`Facility ${selectedFacility.id} updated successfully!`);
    setIsEditDialogOpen(false);
    setSelectedFacility(null);
  };

  const handleDeleteFacility = () => {
    // In a real app, this would delete the facility from the database
    alert(`Facility ${selectedFacility.id} deleted successfully!`);
    setIsDeleteDialogOpen(false);
    setSelectedFacility(null);
  };

  const openEditDialog = (facility: any) => {
    setSelectedFacility(facility);
    setIsEditDialogOpen(true);
  };

  const openDeleteDialog = (facility: any) => {
    setSelectedFacility(facility);
    setIsDeleteDialogOpen(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setNewFacility((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Facility Manager
          </h1>
          <p className="text-muted-foreground">
            Add, edit, and manage community facilities
          </p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add Facility
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Facility</DialogTitle>
              <DialogDescription>
                Enter the details of the new facility
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Facility Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={newFacility.name}
                    onChange={handleInputChange}
                    placeholder="Enter facility name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Facility Type</Label>
                  <Select
                    name="type"
                    value={newFacility.type}
                    onValueChange={(value) =>
                      setNewFacility((prev) => ({ ...prev, type: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hall">Community Hall</SelectItem>
                      <SelectItem value="park">Park</SelectItem>
                      <SelectItem value="stadium">Stadium</SelectItem>
                      <SelectItem value="guesthouse">Guest House</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    value={newFacility.location}
                    onChange={handleInputChange}
                    placeholder="Enter location"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="capacity">Capacity</Label>
                  <Input
                    id="capacity"
                    name="capacity"
                    type="number"
                    value={newFacility.capacity}
                    onChange={handleInputChange}
                    placeholder="Enter capacity"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="pricePerHour">Price Per Hour (₹)</Label>
                <Input
                  id="pricePerHour"
                  name="pricePerHour"
                  type="number"
                  value={newFacility.pricePerHour}
                  onChange={handleInputChange}
                  placeholder="Enter price per hour"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={newFacility.description}
                  onChange={handleInputChange}
                  placeholder="Enter facility description"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="amenities">Amenities</Label>
                <Input
                  id="amenities"
                  name="amenities"
                  value={newFacility.amenities}
                  onChange={handleInputChange}
                  placeholder="Enter amenities (comma separated)"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="image">Facility Image</Label>
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-32 rounded-md overflow-hidden border">
                    <Image
                      src={
                        newFacility.image ||
                        "/placeholder.svg"
                      }
                      alt="Facility preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Button variant="outline" type="button" className="gap-2">
                    <Upload className="h-4 w-4" />
                    Upload Image
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Recommended size: 800x600 pixels
                </p>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsAddDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleAddFacility}>Add Facility</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Manage Facilities</CardTitle>
          <CardDescription>
            View and manage all community facilities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex-1 flex items-center relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name or location..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="w-40">
                <Select value={facilityType} onValueChange={setFacilityType}>
                  <SelectTrigger>
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      <SelectValue placeholder="Type" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="hall">Community Halls</SelectItem>
                    <SelectItem value="park">Parks</SelectItem>
                    <SelectItem value="stadium">Stadiums</SelectItem>
                    <SelectItem value="guesthouse">Guest Houses</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Capacity</TableHead>
                    <TableHead>Price/Hour</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredFacilities.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-4">
                        No facilities found matching your filters
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredFacilities.map((facility) => (
                      <TableRow key={facility.id}>
                        <TableCell className="font-medium">
                          {facility.name}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="capitalize">
                            {facility.type}
                          </Badge>
                        </TableCell>
                        <TableCell>{facility.location}</TableCell>
                        <TableCell>{facility.capacity}</TableCell>
                        <TableCell>₹{facility.pricePerHour}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 gap-1"
                              onClick={() => openEditDialog(facility)}
                            >
                              <Pencil className="h-3.5 w-3.5" />
                              Edit
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 gap-1 text-red-700 dark:text-red-400"
                              onClick={() => openDeleteDialog(facility)}
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                              Delete
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Edit Facility Dialog */}
      {selectedFacility && (
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Edit Facility</DialogTitle>
              <DialogDescription>
                Update the details of {selectedFacility.name}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-name">Facility Name</Label>
                  <Input id="edit-name" defaultValue={selectedFacility.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-type">Facility Type</Label>
                  <Select defaultValue={selectedFacility.type}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hall">Community Hall</SelectItem>
                      <SelectItem value="park">Park</SelectItem>
                      <SelectItem value="stadium">Stadium</SelectItem>
                      <SelectItem value="guesthouse">Guest House</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-location">Location</Label>
                  <Input
                    id="edit-location"
                    defaultValue={selectedFacility.location}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-capacity">Capacity</Label>
                  <Input
                    id="edit-capacity"
                    type="number"
                    defaultValue={selectedFacility.capacity}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-price">Price Per Hour (₹)</Label>
                <Input
                  id="edit-price"
                  type="number"
                  defaultValue={selectedFacility.pricePerHour}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea
                  id="edit-description"
                  defaultValue={selectedFacility.description}
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-amenities">Amenities</Label>
                <Input
                  id="edit-amenities"
                  defaultValue={selectedFacility.amenities.join(", ")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-image">Facility Image</Label>
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-32 rounded-md overflow-hidden border">
                    <Image
                      src={selectedFacility.image}
                      alt="Facility preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Button variant="outline" type="button" className="gap-2">
                    <Upload className="h-4 w-4" />
                    Upload Image
                  </Button>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsEditDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleEditFacility}>Save Changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* Delete Facility Dialog */}
      {selectedFacility && (
        <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete Facility</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete {selectedFacility.name}? This
                action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsDeleteDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleDeleteFacility}>
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
