"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { format, addDays, isBefore, isAfter } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ArrowLeft, ArrowRight, CalendarIcon, Clock, AlertCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { getFacilityById, isTimeSlotAvailable } from "@/lib/data"

// Generate time slots from 8 AM to 10 PM
const generateTimeSlots = () => {
  const slots = []
  for (let hour = 8; hour <= 22; hour++) {
    const formattedHour = hour.toString().padStart(2, "0")
    slots.push(`${formattedHour}:00`)
  }
  return slots
}

const timeSlots = generateTimeSlots()

export default function DateTime() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const facilityId = Number(searchParams.get("facilityId"))

  const [facility, setFacility] = useState<any>(null)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [startTime, setStartTime] = useState<string>("")
  const [endTime, setEndTime] = useState<string>("")
  const [availableEndTimes, setAvailableEndTimes] = useState<string[]>([])
  const [error, setError] = useState<string>("")

  // Min and max dates (today and 30 days from now)
  const today = new Date()
  const maxDate = addDays(today, 30)

  useEffect(() => {
    if (facilityId) {
      const facilityData = getFacilityById(facilityId)
      setFacility(facilityData)
    } else {
      router.push("/booking/select-facility")
    }
  }, [facilityId, router])

  useEffect(() => {
    if (startTime) {
      // Filter end times to be after start time and within 5 hours
      const startIndex = timeSlots.findIndex((slot) => slot === startTime)
      const maxEndIndex = Math.min(startIndex + 5, timeSlots.length - 1)

      const availableSlots = timeSlots.slice(startIndex + 1, maxEndIndex + 1).filter((slot) => {
        if (!date) return true

        const formattedDate = format(date, "yyyy-MM-dd")
        return isTimeSlotAvailable(facilityId, formattedDate, startTime, slot)
      })

      setAvailableEndTimes(availableSlots)
      setEndTime("")
    }
  }, [startTime, date, facilityId])

  const handleStartTimeChange = (value: string) => {
    setStartTime(value)
    setEndTime("")
  }

  const handleContinue = () => {
    if (!date || !startTime || !endTime) {
      setError("Please select date, start time, and end time")
      return
    }

    const formattedDate = format(date, "yyyy-MM-dd")

    // Calculate total hours and amount
    const startHour = Number.parseInt(startTime.split(":")[0])
    const endHour = Number.parseInt(endTime.split(":")[0])
    const totalHours = endHour - startHour
    const totalAmount = totalHours * (facility?.pricePerHour || 0)

    router.push(
      `/booking/summary?facilityId=${facilityId}&date=${formattedDate}&startTime=${startTime}&endTime=${endTime}&totalHours=${totalHours}&totalAmount=${totalAmount}`,
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
            <h1 className="text-3xl font-bold tracking-tight">{facility.name}</h1>
            <p className="text-muted-foreground mt-2">Select date and time for your booking</p>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  Select Date
                </CardTitle>
                <CardDescription>Choose a date within the next 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => isBefore(date, today) || isAfter(date, maxDate)}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Select Time
                </CardTitle>
                <CardDescription>Choose start and end time (max 5 hours)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Start Time</label>
                  <Select value={startTime} onValueChange={handleStartTimeChange} disabled={!date}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select start time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.slice(0, -1).map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">End Time</label>
                  <Select
                    value={endTime}
                    onValueChange={setEndTime}
                    disabled={!startTime || availableEndTimes.length === 0}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select end time" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableEndTimes.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {startTime && endTime && (
                  <div className="pt-2 text-sm">
                    <p>
                      Duration:{" "}
                      <span className="font-medium">{Number.parseInt(endTime) - Number.parseInt(startTime)} hours</span>
                    </p>
                    <p>
                      Rate: <span className="font-medium">₹{facility.pricePerHour} per hour</span>
                    </p>
                    <p className="mt-1 font-medium">
                      Total: ₹{(Number.parseInt(endTime) - Number.parseInt(startTime)) * facility.pricePerHour}
                    </p>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button className="w-full gap-2" onClick={handleContinue} disabled={!date || !startTime || !endTime}>
                  Continue <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>Note: Bookings can be made up to 30 days in advance and for a maximum of 5 hours.</p>
            <p>Cancellation policy: Full refund if cancelled 24 hours before the booking.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
