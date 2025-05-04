import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MoveRight, Building2, Calendar, Clock, MapPin, Star, ArrowRight, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { facilities } from "@/lib/data"

export default function Home() {
  // Get featured facilities (first 3)
  const featuredFacilities = facilities.slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Book Community Venues with Ease
                  </h1>
                  <p className="max-w-[600px] text-slate-500 md:text-xl dark:text-slate-400">
                    UPYOG makes it simple to reserve parks, halls, stadiums, and more for your events. Book online in
                    minutes.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/booking/select-facility">
                    <Button size="lg" className="gap-2">
                      Book Now <MoveRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                  <Image
                    src="https://images.unsplash.com/photo-1583815367358-4a8898b220c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENlbnRyYWwlMjBDb21tdW5pdHklMjBIYWxsfGVufDB8fDB8fHww"
                    alt="Community hall event"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/30 to-indigo-500/30 dark:from-violet-950/50 dark:to-indigo-950/50 mix-blend-multiply"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 p-4">
                      <div className="h-32 rounded-lg bg-white/90 dark:bg-slate-800/90 p-4 shadow-lg flex flex-col justify-between backdrop-blur-sm">
                        <Building2 className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                        <div>
                          <h3 className="font-medium">Community Halls</h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Perfect for events</p>
                        </div>
                      </div>
                      <div className="h-32 rounded-lg bg-white/90 dark:bg-slate-800/90 p-4 shadow-lg flex flex-col justify-between backdrop-blur-sm">
                        <Calendar className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                        <div>
                          <h3 className="font-medium">Easy Booking</h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Up to 30 days in advance</p>
                        </div>
                      </div>
                      <div className="h-32 rounded-lg bg-white/90 dark:bg-slate-800/90 p-4 shadow-lg flex flex-col justify-between backdrop-blur-sm">
                        <Clock className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                        <div>
                          <h3 className="font-medium">Flexible Hours</h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Book up to 5 hours</p>
                        </div>
                      </div>
                      <div className="h-32 rounded-lg bg-white/90 dark:bg-slate-800/90 p-4 shadow-lg flex flex-col justify-between backdrop-blur-sm">
                        <MapPin className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                        <div>
                          <h3 className="font-medium">Multiple Venues</h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Parks, stadiums & more</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Facilities Section */}
        <section className="py-12 md:py-20 bg-white dark:bg-slate-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-violet-100 dark:bg-violet-900/20 px-3 py-1 text-sm text-violet-700 dark:text-violet-400">
                  Featured
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Popular Venues</h2>
                <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                  Discover our most booked community facilities
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredFacilities.map((facility, index) => (
                <Card key={facility.id} className="overflow-hidden group">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={
                        index === 0
                          ? "https://images.unsplash.com/photo-1583815367358-4a8898b220c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          : index === 1
                            ? "https://plus.unsplash.com/premium_photo-1681377835632-fe537691f5f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Uml2ZXJzaWRlJTIwUGFya3xlbnwwfHwwfHx8MA%3D%3D"
                            : "https://plus.unsplash.com/premium_photo-1684713510655-e6e31536168d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TXVuaWNpcGFsJTIwU3RhZGl1bXxlbnwwfHwwfHx8MA%3D%3D"
                      }
                      alt={facility.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <Badge className="absolute top-4 right-4 capitalize">{facility.type}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold">{facility.name}</h3>
                        <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{facility.location}</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Up to {facility.capacity}</span>
                        </div>
                        <div className="text-lg font-bold text-violet-600 dark:text-violet-400">
                          ₹{facility.pricePerHour}/hr
                        </div>
                      </div>
                      <Link href={`/booking/select-facility?type=${facility.type}`}>
                        <Button className="w-full gap-2">
                          Book Now <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Link href="/booking/select-facility">
                <Button variant="outline" size="lg" className="gap-2">
                  View All Facilities <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 md:py-20 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-violet-100 dark:bg-violet-900/20 px-3 py-1 text-sm text-violet-700 dark:text-violet-400">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Everything You Need</h2>
                <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                  Our platform makes it simple to find and book the perfect venue for your needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Wide Selection</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Choose from parks, community halls, stadiums, and more for your events.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Real-time Availability</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  See which facilities are available when you need them, with up-to-date information.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Easy Booking Process</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Book your facility in just a few clicks, with a simple and intuitive interface.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Instant Confirmation</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Receive immediate confirmation of your booking with all the details you need.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Flexible Cancellation</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Plans change? Our flexible cancellation policy has you covered.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Digital Receipts</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Download and print your booking receipts for your records.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Link href="/booking/select-facility">
                <Button size="lg" className="gap-2">
                  Start Booking <MoveRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 md:py-20 bg-white dark:bg-slate-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-violet-100 dark:bg-violet-900/20 px-3 py-1 text-sm text-violet-700 dark:text-violet-400">
                  Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                  Book your community facility in four simple steps.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="grid gap-2 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/20">
                  <span className="text-xl font-bold text-violet-700 dark:text-violet-400">1</span>
                </div>
                <h3 className="text-lg font-bold">Select Facility</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Choose from our wide range of community facilities.
                </p>
              </div>
              <div className="grid gap-2 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/20">
                  <span className="text-xl font-bold text-violet-700 dark:text-violet-400">2</span>
                </div>
                <h3 className="text-lg font-bold">Pick Date & Time</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Select your preferred date and time slot.</p>
              </div>
              <div className="grid gap-2 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/20">
                  <span className="text-xl font-bold text-violet-700 dark:text-violet-400">3</span>
                </div>
                <h3 className="text-lg font-bold">Review & Pay</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Confirm your booking details and complete payment.
                </p>
              </div>
              <div className="grid gap-2 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/20">
                  <span className="text-xl font-bold text-violet-700 dark:text-violet-400">4</span>
                </div>
                <h3 className="text-lg font-bold">Get Confirmation</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Receive your booking confirmation and receipt.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Link href="/booking/select-facility">
                <Button size="lg" className="gap-2">
                  Book Now <MoveRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 md:py-20 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-violet-100 dark:bg-violet-900/20 px-3 py-1 text-sm text-violet-700 dark:text-violet-400">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
                <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                  Hear from people who have used our platform to book community facilities
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex flex-col h-full">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="flex-1 mb-4">
                    <p className="text-slate-700 dark:text-slate-300">
                      "UPYOG made booking our community event so simple. The interface is intuitive, and we received our
                      confirmation instantly. Highly recommended!"
                    </p>
                  </blockquote>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="https://picsum.photos/id/1012/100/100" alt="Rahul Sharma" />
                      <AvatarFallback>RS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Rahul Sharma</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Event Organizer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex flex-col h-full">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="flex-1 mb-4">
                    <p className="text-slate-700 dark:text-slate-300">
                      "We needed a last-minute venue for our community meeting, and UPYOG delivered. The real-time
                      availability feature saved us so much time!"
                    </p>
                  </blockquote>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="https://picsum.photos/id/1027/100/100" alt="Priya Patel" />
                      <AvatarFallback>PP</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Priya Patel</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Community Leader</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex flex-col h-full">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="flex-1 mb-4">
                    <p className="text-slate-700 dark:text-slate-300">
                      "As a regular user of community facilities, I appreciate how UPYOG has streamlined the booking
                      process. The digital receipts are especially helpful for our records."
                    </p>
                  </blockquote>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="https://picsum.photos/id/1025/100/100" alt="Amit Kumar" />
                      <AvatarFallback>AK</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Amit Kumar</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Sports Coach</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-violet-600 dark:bg-violet-900">
          <div className="container px-4 md:px-6 text-center">
            <div className="mx-auto max-w-3xl space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Ready to Book Your Next Event?
              </h2>
              <p className="text-xl text-violet-100">
                Join thousands of satisfied users who have simplified their facility booking process.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Link href="/booking/select-facility">
                  <Button size="lg" variant="secondary" className="gap-2 w-full sm:w-auto">
                    Book a Facility <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/profile">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 w-full sm:w-auto bg-transparent text-white border-white hover:bg-white/10"
                  >
                    My Profile <Users className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-16 bg-white dark:bg-slate-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-2">500+</div>
                <p className="text-slate-500 dark:text-slate-400">Facilities Available</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-2">10,000+</div>
                <p className="text-slate-500 dark:text-slate-400">Bookings Completed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-2">98%</div>
                <p className="text-slate-500 dark:text-slate-400">Satisfaction Rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-2">24/7</div>
                <p className="text-slate-500 dark:text-slate-400">Online Booking</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
