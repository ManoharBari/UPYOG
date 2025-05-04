"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { format, parseISO } from "date-fns"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, Download, Home, Calendar, Clock, MapPin, User, Phone, Mail } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { getFacilityById, generateBookingId } from "@/lib/data"
// Add import for Image component
import Image from "next/image"

export default function Confirmation() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const facilityId = Number(searchParams.get("facilityId"))
  const date = searchParams.get("date") || ""
  const startTime = searchParams.get("startTime") || ""
  const endTime = searchParams.get("endTime") || ""
  const totalHours = Number(searchParams.get("totalHours") || 0)
  const totalAmount = Number(searchParams.get("totalAmount") || 0)
  const name = searchParams.get("name") || ""
  const email = searchParams.get("email") || ""
  const phone = searchParams.get("phone") || ""

  const [facility, setFacility] = useState<any>(null)
  const [bookingId, setBookingId] = useState<string>("")

  useEffect(() => {
    if (facilityId) {
      const facilityData = getFacilityById(facilityId)
      setFacility(facilityData)
      setBookingId(generateBookingId())
    } else {
      router.push("/booking/select-facility")
    }
  }, [facilityId, router])

  const handleDownloadReceipt = () => {
    // In a real app, this would generate a PDF receipt
    alert("Receipt download functionality would be implemented here")
  }

  if (!facility) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 container py-8 px-4 md:px-6 flex items-center justify-center">
          <p>Loading...</p>
        </main>
        <Footer />
      </div>
    )
  }

  const formattedDate = date ? format(parseISO(date), "EEEE, MMMM d, yyyy") : ""
  const bookingDate = new Date().toISOString().split("T")[0]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container py-8 px-4 md:px-6">
        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <CheckCircle2 className="h-16 w-16 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Booking Confirmed!</h1>
            <p className="text-muted-foreground">
              Your booking has been successfully confirmed. Please find the details below.
            </p>
          </div>

          <Card className="border-green-200 dark:border-green-900">
            <CardHeader className="bg-green-50 dark:bg-green-900/20">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Booking Confirmation</CardTitle>
                  <CardDescription>Booking ID: {bookingId}</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="gap-2" onClick={handleDownloadReceipt}>
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="relative h-40 w-full rounded-md overflow-hidden mb-6">
                <Image
                  src={facility.image}
                  alt={facility.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{facility.name}</h3>
                  <p className="text-sm flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {facility.location}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Facility Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Facility Name</p>
                    <p className="font-medium">{facility.name}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {facility.location}
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="font-semibold">Booking Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-medium flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {formattedDate}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Time</p>
                    <p className="font-medium flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {startTime} - {endTime} ({totalHours} hours)
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Booking Date</p>
                    <p className="font-medium">{bookingDate}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Status</p>
                    <p className="font-medium text-green-600 dark:text-green-400">Confirmed</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="font-semibold">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-medium flex items-center gap-1">
                      <User className="h-3.5 w-3.5" />
                      {name}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium flex items-center gap-1">
                      <Mail className="h-3.5 w-3.5" />
                      {email}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium flex items-center gap-1">
                      <Phone className="h-3.5 w-3.5" />
                      {phone}
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="font-semibold">Payment Details</h3>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>Rate per hour</span>
                    <span>₹{facility.pricePerHour}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration</span>
                    <span>{totalHours} hours</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-semibold">
                    <span>Total Amount</span>
                    <span>₹{totalAmount}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Payment Status</span>
                    <span>Paid</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button variant="outline" className="w-full gap-2" onClick={handleDownloadReceipt}>
                <Download className="h-4 w-4" />
                Download Receipt
              </Button>
              <Button variant="default" className="w-full gap-2" onClick={() => router.push("/")}>
                <Home className="h-4 w-4" />
                Return to Home
              </Button>
            </CardFooter>
          </Card>

          <div className="text-sm text-muted-foreground text-center">
            <p>Thank you for using UPYOG Community Hall Booking System.</p>
            <p>For any queries, please contact our support team.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
