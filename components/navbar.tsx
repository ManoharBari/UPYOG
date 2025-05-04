"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Building2, Menu, X } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CalendarRange, Home, LayoutDashboard, LogOut, Settings, User, Building } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Mock logged in state - in a real app, this would come from authentication
  const isLoggedIn = true
  // Replace the avatar image with picsum.photos URL
  const user = {
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    avatar: "https://picsum.photos/id/1012/100/100",
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-violet-600 dark:text-violet-400" />
            <span className="font-bold text-lg">UPYOG</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-violet-600 dark:hover:text-violet-400"
          >
            Home
          </Link>
          <Link
            href="/booking/select-facility"
            className="text-sm font-medium transition-colors hover:text-violet-600 dark:hover:text-violet-400"
          >
            Book Venue
          </Link>
          <Link
            href="/admin"
            className="text-sm font-medium transition-colors hover:text-violet-600 dark:hover:text-violet-400"
          >
            Admin
          </Link>
          <ThemeToggle />

          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback>RS</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile">My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profile/bookings">My Bookings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profile/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/booking/select-facility">
              <Button>Book Now</Button>
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          {isLoggedIn && (
            <Link href="/profile">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback>RS</AvatarFallback>
              </Avatar>
            </Link>
          )}
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur md:hidden">
          <div className="container h-full py-4">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <Building2 className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                <span className="font-bold text-lg">UPYOG</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>

            <nav className="flex flex-col gap-6">
              <Link
                href="/"
                className="flex items-center gap-3 text-base font-medium transition-colors hover:text-violet-600 dark:hover:text-violet-400"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="h-5 w-5" />
                Home
              </Link>
              <Link
                href="/booking/select-facility"
                className="flex items-center gap-3 text-base font-medium transition-colors hover:text-violet-600 dark:hover:text-violet-400"
                onClick={() => setIsMenuOpen(false)}
              >
                <Building className="h-5 w-5" />
                Book Facility
              </Link>
              <Link
                href="/admin"
                className="flex items-center gap-3 text-base font-medium transition-colors hover:text-violet-600 dark:hover:text-violet-400"
                onClick={() => setIsMenuOpen(false)}
              >
                <LayoutDashboard className="h-5 w-5" />
                Admin
              </Link>
              {isLoggedIn ? (
                <>
                  <Separator className="my-2" />
                  <div className="flex items-center gap-3 mb-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                      <AvatarFallback>RS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <Link
                    href="/profile"
                    className="flex items-center gap-3 text-base font-medium transition-colors hover:text-violet-600 dark:hover:text-violet-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="h-5 w-5" />
                    My Profile
                  </Link>
                  <Link
                    href="/profile/bookings"
                    className="flex items-center gap-3 text-base font-medium transition-colors hover:text-violet-600 dark:hover:text-violet-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <CalendarRange className="h-5 w-5" />
                    My Bookings
                  </Link>
                  <Link
                    href="/profile/settings"
                    className="flex items-center gap-3 text-base font-medium transition-colors hover:text-violet-600 dark:hover:text-violet-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Settings className="h-5 w-5" />
                    Settings
                  </Link>
                  <Button variant="ghost" className="justify-start gap-3 px-0" onClick={() => setIsMenuOpen(false)}>
                    <LogOut className="h-5 w-5" />
                    Log out
                  </Button>
                </>
              ) : (
                <Link href="/booking/select-facility" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full">Book Now</Button>
                </Link>
              )}
              <div className="mt-4 flex justify-center">
                <ThemeToggle />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
