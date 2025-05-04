"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Clock, ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { getFacilitiesByType } from "@/lib/data"

export default function SelectFacility() {
  const router = useRouter()
  const [facilityType, setFacilityType] = useState("all")
  const filteredFacilities = getFacilitiesByType(facilityType)

  const handleSelectFacility = (facilityId: number) => {
    router.push(`/booking/date-time?facilityId=${facilityId}`)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container py-8 px-4 md:px-6">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Select a Facility</h1>
            <p className="text-muted-foreground mt-2">
              Choose from our wide range of community facilities for your event.
            </p>
          </div>

          <Tabs defaultValue="all" value={facilityType} onValueChange={setFacilityType} className="w-full">
            <div className="overflow-x-auto pb-2">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All Facilities</TabsTrigger>
                <TabsTrigger value="hall">Community Halls</TabsTrigger>
                <TabsTrigger value="park">Parks</TabsTrigger>
                <TabsTrigger value="stadium">Stadiums</TabsTrigger>
                <TabsTrigger value="guesthouse">Guest Houses</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value={facilityType} className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredFacilities.map((facility) => (
                  <Card key={facility.id} className="overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={facility.image}
                        alt={facility.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>{facility.name}</CardTitle>
                        <Badge variant="outline" className="capitalize">
                          {facility.type}
                        </Badge>
                      </div>
                      <CardDescription className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {facility.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>Capacity: {facility.capacity} people</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>₹{facility.pricePerHour} per hour</span>
                        </div>
                        <p className="mt-2 line-clamp-2">{facility.description}</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full gap-2" onClick={() => handleSelectFacility(facility.id)}>
                        Select <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
