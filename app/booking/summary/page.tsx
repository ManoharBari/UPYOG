"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import { format, parseISO } from "date-fns"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ArrowRight, Calendar, Clock, MapPin, User, Phone, Mail } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { getFacilityById } from "@/lib/data"

export default function Summary() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const facilityId = Number(searchParams.get("facilityId"))
  const date = searchParams.get("date") || ""
  const startTime = searchParams.get("startTime") || ""
  const endTime = searchParams.get("endTime") || ""
  const totalHours = Number(searchParams.get("totalHours") || 0)
  const totalAmount = Number(searchParams.get("totalAmount") || 0)

  const [facility, setFacility] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  useEffect(() => {
    if (facilityId) {
      const facilityData = getFacilityById(facilityId)
      setFacility(facilityData)
    } else {
      router.push("/booking/select-facility")
    }
  }, [facilityId, router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real app, this would submit to a backend
    // For this mock, we'll just navigate to the confirmation page
    router.push(
      `/booking/confirmation?facilityId=${facilityId}&date=${date}&startTime=${startTime}&endTime=${endTime}&totalHours=${totalHours}&totalAmount=${totalAmount}&name=${formData.name}&email=${formData.email}&phone=${formData.phone}`,
    )
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

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container py-8 px-4 md:px-6">
        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => router.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </div>

          <div>
            <h1 className="text-3xl font-bold tracking-tight">Booking Summary</h1>
            <p className="text-muted-foreground mt-2">Review your booking details and provide your information</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="order-2 md:order-1">
              <CardHeader>
                <CardTitle>Booking Details</CardTitle>
                <CardDescription>Review the details of your booking</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative h-40 w-full rounded-md overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{facility.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{facility.location}</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{formattedDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {startTime} - {endTime} ({totalHours} hours)
                    </span>
                  </div>
                </div>

                <Separator />

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
                </div>
              </CardContent>
            </Card>

            <Card className="order-1 md:order-2">
              <CardHeader>
                <CardTitle>Your Information</CardTitle>
                <CardDescription>Please provide your contact details</CardDescription>
              </CardHeader>
              <CardContent>
                <form id="booking-form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        className="pl-9"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="pl-9"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        className="pl-9"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button type="submit" form="booking-form" className="w-full gap-2">
                  Submit Booking <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>
              Note: By submitting this booking, you agree to the terms and conditions of UPYOG Community Hall Booking
              System.
            </p>
            <p>Cancellation policy: Full refund if cancelled 24 hours before the booking.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
