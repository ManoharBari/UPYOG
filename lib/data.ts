// Mock data for facilities
export const facilities = [
  {
    id: 1,
    name: "Central Community Hall",
    type: "hall",
    location: "City Center",
    capacity: 200,
    pricePerHour: 1000,
    amenities: ["Air Conditioning", "Stage", "Sound System", "Parking"],
    image: "https://images.unsplash.com/photo-1583815367358-4a8898b220c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENlbnRyYWwlMjBDb21tdW5pdHklMjBIYWxsfGVufDB8fDB8fHww",
    description: "A spacious hall perfect for community gatherings, weddings, and cultural events.",
  },
  {
    id: 2,
    name: "Riverside Park",
    type: "park",
    location: "Riverside Area",
    capacity: 500,
    pricePerHour: 500,
    amenities: ["Open Space", "Gazebos", "Children's Play Area", "Parking"],
    image: "https://plus.unsplash.com/premium_photo-1681377835632-fe537691f5f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Uml2ZXJzaWRlJTIwUGFya3xlbnwwfHwwfHx8MA%3D%3D",
    description: "A beautiful park with riverside views, perfect for outdoor events and gatherings.",
  },
  {
    id: 3,
    name: "Municipal Stadium",
    type: "stadium",
    location: "Sports Complex",
    capacity: 1000,
    pricePerHour: 2000,
    amenities: ["Seating", "Floodlights", "Changing Rooms", "Parking"],
    image: "https://plus.unsplash.com/premium_photo-1684713510655-e6e31536168d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TXVuaWNpcGFsJTIwU3RhZGl1bXxlbnwwfHwwfHx8MA%3D%3D",
    description: "A multi-purpose stadium suitable for sports events, competitions, and large gatherings.",
  },
  {
    id: 4,
    name: "Government Guest House",
    type: "guesthouse",
    location: "Civil Lines",
    capacity: 50,
    pricePerHour: 1500,
    amenities: ["Rooms", "Conference Hall", "Dining Area", "Parking"],
    image: "https://plus.unsplash.com/premium_photo-1733760125038-06564d0a4568?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R292ZXJubWVudCUyMEd1ZXN0JTIwSG91c2V8ZW58MHx8MHx8fDA%3D",
    description: "A well-maintained guest house with accommodation and meeting facilities.",
  },
  {
    id: 5,
    name: "Heritage Hall",
    type: "hall",
    location: "Old City",
    capacity: 150,
    pricePerHour: 1200,
    amenities: ["Air Conditioning", "Historical Architecture", "Sound System", "Parking"],
    image: "https://images.unsplash.com/photo-1690621956682-113624857180?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SGVyaXRhZ2UlMjBIYWxsfGVufDB8fDB8fHww",
    description: "A heritage building converted into a community hall, perfect for cultural events.",
  },
  {
    id: 6,
    name: "Central Park",
    type: "park",
    location: "City Center",
    capacity: 300,
    pricePerHour: 400,
    amenities: ["Open Space", "Fountain", "Walking Paths", "Parking"],
    image: "https://images.unsplash.com/photo-1602087564121-ecda2f6c7ee9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2VudHJhbCUyMFBhcmt8ZW58MHx8MHx8fDA%3D",
    description: "A centrally located park with beautiful landscaping, ideal for small gatherings.",
  },
  {
    id: 7,
    name: "Indoor Sports Complex",
    type: "stadium",
    location: "Sports Zone",
    capacity: 500,
    pricePerHour: 1800,
    amenities: ["Indoor Courts", "Changing Rooms", "Spectator Seating", "Parking"],
    image: "https://plus.unsplash.com/premium_photo-1675364966889-a6d0a57c65fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SW5kb29yJTIwU3BvcnRzJTIwQ29tcGxleHxlbnwwfHwwfHx8MA%3D%3D",
    description: "An indoor sports complex with facilities for multiple sports and events.",
  },
  {
    id: 8,
    name: "VIP Guest House",
    type: "guesthouse",
    location: "Government Colony",
    capacity: 30,
    pricePerHour: 2000,
    amenities: ["Luxury Rooms", "Conference Hall", "Dining Area", "Parking"],
    image: "https://images.unsplash.com/photo-1705051239816-4cf3d4d6d153?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFZJUCUyMEd1ZXN0JTIwSG91c2V8ZW58MHx8MHx8fDA%3D",
    description: "A premium guest house with luxury amenities for important gatherings and stays.",
  },
]

// Mock data for bookings
export const bookings = [
  {
    id: "B001",
    facilityId: 1,
    facilityName: "Central Community Hall",
    userName: "Rahul Sharma",
    userEmail: "rahul.sharma@example.com",
    userPhone: "9876543210",
    date: "2023-05-15",
    startTime: "10:00",
    endTime: "15:00",
    totalHours: 5,
    totalAmount: 5000,
    status: "Confirmed",
    createdAt: "2023-05-01T10:30:00Z",
  },
  {
    id: "B002",
    facilityId: 2,
    facilityName: "Riverside Park",
    userName: "Priya Patel",
    userEmail: "priya.patel@example.com",
    userPhone: "8765432109",
    date: "2023-05-20",
    startTime: "16:00",
    endTime: "20:00",
    totalHours: 4,
    totalAmount: 2000,
    status: "Pending",
    createdAt: "2023-05-05T14:45:00Z",
  },
  {
    id: "B003",
    facilityId: 3,
    facilityName: "Municipal Stadium",
    userName: "Amit Kumar",
    userEmail: "amit.kumar@example.com",
    userPhone: "7654321098",
    date: "2023-05-25",
    startTime: "09:00",
    endTime: "14:00",
    totalHours: 5,
    totalAmount: 10000,
    status: "Confirmed",
    createdAt: "2023-05-10T09:15:00Z",
  },
  {
    id: "B004",
    facilityId: 4,
    facilityName: "Government Guest House",
    userName: "Sneha Gupta",
    userEmail: "sneha.gupta@example.com",
    userPhone: "6543210987",
    date: "2023-06-01",
    startTime: "11:00",
    endTime: "16:00",
    totalHours: 5,
    totalAmount: 7500,
    status: "Cancelled",
    createdAt: "2023-05-15T16:20:00Z",
  },
  {
    id: "B005",
    facilityId: 5,
    facilityName: "Heritage Hall",
    userName: "Vikram Singh",
    userEmail: "vikram.singh@example.com",
    userPhone: "5432109876",
    date: "2023-06-05",
    startTime: "14:00",
    endTime: "19:00",
    totalHours: 5,
    totalAmount: 6000,
    status: "Confirmed",
    createdAt: "2023-05-20T11:10:00Z",
  },
  {
    id: "B006",
    facilityId: 6,
    facilityName: "Central Park",
    userName: "Neha Verma",
    userEmail: "neha.verma@example.com",
    userPhone: "4321098765",
    date: "2023-06-10",
    startTime: "15:00",
    endTime: "18:00",
    totalHours: 3,
    totalAmount: 1200,
    status: "Pending",
    createdAt: "2023-05-25T13:40:00Z",
  },
  {
    id: "B007",
    facilityId: 7,
    facilityName: "Indoor Sports Complex",
    userName: "Rajesh Khanna",
    userEmail: "rajesh.khanna@example.com",
    userPhone: "3210987654",
    date: "2023-06-15",
    startTime: "10:00",
    endTime: "14:00",
    totalHours: 4,
    totalAmount: 7200,
    status: "Confirmed",
    createdAt: "2023-06-01T08:30:00Z",
  },
  {
    id: "B008",
    facilityId: 8,
    facilityName: "VIP Guest House",
    userName: "Ananya Desai",
    userEmail: "ananya.desai@example.com",
    userPhone: "2109876543",
    date: "2023-06-20",
    startTime: "12:00",
    endTime: "17:00",
    totalHours: 5,
    totalAmount: 10000,
    status: "Pending",
    createdAt: "2023-06-05T15:50:00Z",
  },
]

// Helper function to check if a time slot is available
export function isTimeSlotAvailable(facilityId: number, date: string, startTime: string, endTime: string) {
  // In a real app, this would check against a database
  // For this mock, we'll randomly return true or false with a bias towards true
  return Math.random() > 0.3 // 70% chance of availability
}

// Helper function to generate a booking ID
export function generateBookingId() {
  const prefix = "B"
  const randomNum = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0")
  return `${prefix}${randomNum}`
}

// Helper function to get facility by ID
export function getFacilityById(id: number) {
  return facilities.find((facility) => facility.id === id)
}

// Helper function to get booking by ID
export function getBookingById(id: string) {
  return bookings.find((booking) => booking.id === id)
}

// Helper function to filter facilities by type
export function getFacilitiesByType(type: string) {
  if (type === "all") return facilities
  return facilities.filter((facility) => facility.type === type)
}

// Helper function to get bookings by status
export function getBookingsByStatus(status: string) {
  if (status === "all") return bookings
  return bookings.filter((booking) => booking.status === status)
}

// Mock refund policy
export const refundPolicy = {
  fullRefund: 24, // Hours before booking for full refund
  partialRefund: 12, // Hours before booking for partial refund
  partialRefundPercentage: 50, // Percentage refund for partial refunds
  noRefund: 6, // Hours before booking for no refund
}
