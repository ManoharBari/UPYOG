"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Building, CalendarRange, User } from "lucide-react"
import { cn } from "@/lib/utils"

export default function MobileBottomNav() {
  const pathname = usePathname()

  // Don't show bottom nav on admin pages
  if (pathname.startsWith("/admin")) {
    return null
  }

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "Venues",
      href: "/booking/select-facility",
      icon: Building,
    },
    {
      name: "Bookings",
      href: "/profile/bookings",
      icon: CalendarRange,
    },
    {
      name: "Profile",
      href: "/profile",
      icon: User,
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t md:hidden">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full text-xs",
                isActive ? "text-violet-600 dark:text-violet-400" : "text-muted-foreground",
              )}
            >
              <item.icon className="h-5 w-5 mb-1" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
