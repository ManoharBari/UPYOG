"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Building, Users, ArrowRight, TrendingUp, Clock } from "lucide-react"
import { bookings, facilities } from "@/lib/data"

export default function AdminDashboard() {
  const [dateFilter, setDateFilter] = useState("all")
  const [facilityFilter, setFacilityFilter] = useState("all")

  // Calculate dashboard stats
  const totalBookings = bookings.length
  const pendingBookings = bookings.filter((booking) => booking.status === "Pending").length
  const confirmedBookings = bookings.filter((booking) => booking.status === "Confirmed").length
  const cancelledBookings = bookings.filter((booking) => booking.status === "Cancelled").length

  // Calculate facility utilization
  const facilityUtilization = facilities
    .map((facility) => {
      const facilityBookings = bookings.filter((booking) => booking.facilityId === facility.id)
      const utilizationPercentage = Math.round((facilityBookings.length / totalBookings) * 100) || 0
      return {
        id: facility.id,
        name: facility.name,
        bookings: facilityBookings.length,
        utilization: utilizationPercentage,
      }
    })
    .sort((a, b) => b.utilization - a.utilization)

  // Get recent bookings
  const recentBookings = [...bookings]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Overview of bookings and facility utilization</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalBookings}</div>
            <p className="text-xs text-muted-foreground">All time bookings</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Bookings</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingBookings}</div>
            <p className="text-xs text-muted-foreground">Awaiting approval</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Confirmed Bookings</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{confirmedBookings}</div>
            <p className="text-xs text-muted-foreground">Approved bookings</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cancellations</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{cancelledBookings}</div>
            <p className="text-xs text-muted-foreground">Cancelled bookings</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Facility Utilization</CardTitle>
            <CardDescription>Booking distribution across facilities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {facilityUtilization.map((facility) => (
                <div key={facility.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{facility.name}</span>
                    </div>
                    <span className="text-sm">{facility.bookings} bookings</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-violet-600 dark:bg-violet-400 rounded-full"
                      style={{ width: `${facility.utilization}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>0%</span>
                    <span>{facility.utilization}% utilization</span>
                    <span>100%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
            <CardDescription>Latest booking activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{booking.facilityName}</p>
                    <p className="text-xs text-muted-foreground">
                      {booking.userName} • {booking.date}
                    </p>
                  </div>
                  <div>
                    <span
                      className={`
                      text-xs px-2 py-1 rounded-full
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
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
        <Link href="/admin/dashboard/bookings">
          <Button className="gap-2">
            View All Bookings <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
