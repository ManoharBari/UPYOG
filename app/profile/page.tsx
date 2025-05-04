"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  User,
  Settings,
  CalendarRange,
  Clock,
  MapPin,
  Building2,
  Download,
  ArrowRight,
  Edit,
  ChevronRight,
  Bell,
  Shield,
  LogOut,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { bookings } from "@/lib/data"

export default function ProfilePage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")

  // Mock user data - in a real app, this would come from authentication
  const user = {
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    phone: "9876543210",
    avatar: "https://picsum.photos/id/1012/100/100",
    joinedDate: "January 2023",
  }

  // Get recent bookings (first 3)
  const recentBookings = bookings
    .filter((booking) => booking.userName === user.name)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container py-8 px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
              <p className="text-muted-foreground">Manage your account and bookings</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2" onClick={() => router.push("/profile/settings")}>
                <Settings className="h-4 w-4" />
                Settings
              </Button>
              <Button className="gap-2" onClick={() => router.push("/booking/select-facility")}>
                <CalendarRange className="h-4 w-4" />
                New Booking
              </Button>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Sidebar - Stacked on mobile, side column on desktop */}
            <Card className="md:col-span-1 order-2 md:order-1">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback>RS</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{user.name}</CardTitle>
                  <CardDescription>Member since {user.joinedDate}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4 text-muted-foreground" />
                    <span>{user.phone}</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <nav className="space-y-1">
                  <Link
                    href="/profile"
                    className="flex items-center justify-between py-2 text-sm font-medium text-violet-600 dark:text-violet-400"
                  >
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>Overview</span>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link href="/profile/bookings" className="flex items-center justify-between py-2 text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <CalendarRange className="h-4 w-4" />
                      <span>My Bookings</span>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link href="/profile/settings" className="flex items-center justify-between py-2 text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      <span>Account Settings</span>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link href="/profile/security" className="flex items-center justify-between py-2 text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      <span>Security</span>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </nav>

                <Separator className="my-4" />

                <Button variant="outline" className="w-full gap-2 text-red-600 dark:text-red-400">
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Button>
              </CardContent>
            </Card>

            {/* Main Content - Stacked on mobile, main column on desktop */}
            <div className="md:col-span-2 space-y-6 order-1 md:order-2">
              {/* Welcome Card */}
              <Card className="bg-gradient-to-r from-violet-500 to-purple-600 text-white">
                <CardHeader>
                  <CardTitle>Welcome back, {user.name.split(" ")[0]}!</CardTitle>
                  <CardDescription className="text-violet-100">
                    Manage your bookings and account settings from your personal dashboard.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      variant="secondary"
                      className="gap-2"
                      onClick={() => router.push("/booking/select-facility")}
                    >
                      <CalendarRange className="h-4 w-4" />
                      Book a Facility
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-transparent border-white text-white hover:bg-white/10 gap-2"
                      onClick={() => router.push("/profile/bookings")}
                    >
                      <Clock className="h-4 w-4" />
                      View My Bookings
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Bookings */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Recent Bookings</CardTitle>
                    <CardDescription>Your most recent facility bookings</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm" className="gap-1" onClick={() => router.push("/profile/bookings")}>
                    View All
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  {recentBookings.length > 0 ? (
                    <div className="space-y-4">
                      {recentBookings.map((booking) => (
                        <div key={booking.id} className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg border">
                          <div className="relative h-24 sm:h-auto sm:w-32 w-full rounded-md overflow-hidden">
                            <Image
                              src={
                                booking.facilityId === 1
                                  ? "https://picsum.photos/id/1031/400/300"
                                  : booking.facilityId === 2
                                    ? "https://picsum.photos/id/164/400/300"
                                    : "https://picsum.photos/id/1040/400/300"
                              }
                              alt={booking.facilityName}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-semibold">{booking.facilityName}</h3>
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
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                              <Button variant="outline" size="sm" className="h-8 gap-1">
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
                      <h3 className="font-medium text-lg mb-2">No bookings yet</h3>
                      <p className="text-muted-foreground mb-4">You haven't made any facility bookings yet.</p>
                      <Button onClick={() => router.push("/booking/select-facility")}>Book a Facility</Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Account Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Account Summary</CardTitle>
                  <CardDescription>Your account information and preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <h3 className="font-medium text-sm text-muted-foreground">Personal Information</h3>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-sm">Full Name</span>
                          <span className="text-sm font-medium">{user.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Email</span>
                          <span className="text-sm font-medium">{user.email}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Phone</span>
                          <span className="text-sm font-medium">{user.phone}</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-sm text-muted-foreground">Booking Statistics</h3>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-sm">Total Bookings</span>
                          <span className="text-sm font-medium">8</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Upcoming Bookings</span>
                          <span className="text-sm font-medium">2</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Completed Bookings</span>
                          <span className="text-sm font-medium">5</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Cancelled Bookings</span>
                          <span className="text-sm font-medium">1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="gap-2" onClick={() => router.push("/profile/settings")}>
                    <Edit className="h-4 w-4" />
                    Edit Profile
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
