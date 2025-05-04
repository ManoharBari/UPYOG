"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  CalendarRange,
  Clock,
  MapPin,
  Download,
  Search,
  Filter,
  Building2,
  ArrowLeft,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { bookings } from "@/lib/data";

export default function BookingsPage() {
  const router = useRouter();
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock user data - in a real app, this would come from authentication
  const user = {
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
  };

  // Filter bookings based on selected filters and search query
  const userBookings = bookings.filter(
    (booking) => booking.userName === user.name
  );

  const filteredBookings = userBookings.filter((booking) => {
    const matchesStatus =
      statusFilter === "all" ||
      booking.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesSearch =
      booking.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.facilityName.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container py-8 px-4 md:px-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push("/profile")}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Profile
            </Button>
          </div>

          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Bookings</h1>
            <p className="text-muted-foreground">
              View and manage all your facility bookings
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Booking History</CardTitle>
              <CardDescription>
                View all your past, current, and upcoming bookings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="w-full">
                <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
                  <div className="overflow-x-auto pb-2">
                    <TabsList className="mb-0">
                      <TabsTrigger value="all">All Bookings</TabsTrigger>
                      <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                      <TabsTrigger value="past">Past</TabsTrigger>
                      <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
                    </TabsList>
                  </div>

                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search bookings..."
                        className="pl-9"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>

                    <div className="w-40">
                      <Select
                        value={statusFilter}
                        onValueChange={setStatusFilter}
                      >
                        <SelectTrigger>
                          <div className="flex items-center gap-2">
                            <Filter className="h-4 w-4" />
                            <SelectValue placeholder="Status" />
                          </div>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Statuses</SelectItem>
                          <SelectItem value="confirmed">Confirmed</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <TabsContent value="all" className="m-0">
                  {filteredBookings.length > 0 ? (
                    <div className="space-y-4">
                      {filteredBookings.map((booking) => (
                        <div
                          key={booking.id}
                          className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg border"
                        >
                          <div className="relative h-24 sm:h-auto sm:w-32 w-full rounded-md overflow-hidden">
                            <Image
                              src="https://images.unsplash.com/photo-1583815367358-4a8898b220c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENlbnRyYWwlMjBDb21tdW5pdHklMjBIYWxsfGVufDB8fDB8fHww"
                              alt={booking.facilityName}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-semibold">
                                    {booking.facilityName}
                                  </h3>
                                  <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                                    <MapPin className="h-3.5 w-3.5" />
                                    <span>City Center</span>
                                  </div>
                                </div>
                                <Badge
                                  variant="outline"
                                  className={`
                                    ${
                                      booking.status === "Confirmed"
                                        ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                                        : booking.status === "Pending"
                                        ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
                                        : "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                                    }
                                  `}
                                >
                                  {booking.status}
                                </Badge>
                              </div>
                              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
                                <div className="flex items-center gap-1 text-sm">
                                  <CalendarRange className="h-3.5 w-3.5 text-muted-foreground" />
                                  <span>{booking.date}</span>
                                </div>
                                <div className="flex items-center gap-1 text-sm">
                                  <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                                  <span>
                                    {booking.startTime} - {booking.endTime}
                                  </span>
                                </div>
                              </div>
                              <div className="mt-2 text-sm">
                                <span className="font-medium">Booking ID:</span>{" "}
                                {booking.id} •
                                <span className="font-medium ml-2">
                                  Amount:
                                </span>{" "}
                                ₹{booking.totalAmount}
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-8 gap-1"
                              >
                                <Download className="h-3.5 w-3.5" />
                                Receipt
                              </Button>
                              {booking.status !== "Cancelled" && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 gap-1 text-red-600 dark:text-red-400"
                                >
                                  Cancel
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Building2 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="font-medium text-lg mb-2">
                        No bookings found
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        No bookings match your current filters.
                      </p>
                      <Button
                        onClick={() => {
                          setStatusFilter("all");
                          setSearchQuery("");
                        }}
                      >
                        Clear Filters
                      </Button>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="upcoming" className="m-0">
                  {/* Similar content structure as "all" tab but filtered for upcoming bookings */}
                  <div className="text-center py-8">
                    <Building2 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-medium text-lg mb-2">
                      No upcoming bookings
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      You don't have any upcoming facility bookings.
                    </p>
                    <Button
                      onClick={() => router.push("/booking/select-facility")}
                    >
                      Book a Facility
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="past" className="m-0">
                  {/* Similar content structure as "all" tab but filtered for past bookings */}
                  <div className="space-y-4">
                    {filteredBookings.slice(0, 2).map((booking) => (
                      <div
                        key={booking.id}
                        className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg border"
                      >
                        <div className="relative h-24 sm:h-auto sm:w-32 w-full rounded-md overflow-hidden">
                          <Image
                            src="https://images.unsplash.com/photo-1583815367358-4a8898b220c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENlbnRyYWwlMjBDb21tdW5pdHklMjBIYWxsfGVufDB8fDB8fHww"
                            alt={booking.facilityName}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-semibold">
                                  {booking.facilityName}
                                </h3>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                                  <MapPin className="h-3.5 w-3.5" />
                                  <span>City Center</span>
                                </div>
                              </div>
                              <Badge
                                variant="outline"
                                className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                              >
                                Completed
                              </Badge>
                            </div>
                            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
                              <div className="flex items-center gap-1 text-sm">
                                <CalendarRange className="h-3.5 w-3.5 text-muted-foreground" />
                                <span>{booking.date}</span>
                              </div>
                              <div className="flex items-center gap-1 text-sm">
                                <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                                <span>
                                  {booking.startTime} - {booking.endTime}
                                </span>
                              </div>
                            </div>
                            <div className="mt-2 text-sm">
                              <span className="font-medium">Booking ID:</span>{" "}
                              {booking.id} •
                              <span className="font-medium ml-2">Amount:</span>{" "}
                              ₹{booking.totalAmount}
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-3">
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 gap-1"
                            >
                              <Download className="h-3.5 w-3.5" />
                              Receipt
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="cancelled" className="m-0">
                  {/* Similar content structure as "all" tab but filtered for cancelled bookings */}
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg border">
                      <div className="relative h-24 sm:h-auto sm:w-32 w-full rounded-md overflow-hidden">
                        <Image
                          src="https://plus.unsplash.com/premium_photo-1684713510655-e6e31536168d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TXVuaWNpcGFsJTIwU3RhZGl1bXxlbnwwfHwwfHx8MA%3D%3D"
                          alt="Municipal Stadium"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold">
                                Municipal Stadium
                              </h3>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                                <MapPin className="h-3.5 w-3.5" />
                                <span>Sports Complex</span>
                              </div>
                            </div>
                            <Badge
                              variant="outline"
                              className="bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                            >
                              Cancelled
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
                            <div className="flex items-center gap-1 text-sm">
                              <CalendarRange className="h-3.5 w-3.5 text-muted-foreground" />
                              <span>2023-06-15</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                              <span>10:00 - 14:00</span>
                            </div>
                          </div>
                          <div className="mt-2 text-sm">
                            <span className="font-medium">Booking ID:</span>{" "}
                            B007 •
                            <span className="font-medium ml-2">Amount:</span>{" "}
                            ₹7200
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 gap-1"
                          >
                            <Download className="h-3.5 w-3.5" />
                            Receipt
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
