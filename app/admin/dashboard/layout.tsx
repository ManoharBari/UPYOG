"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Building2, LayoutDashboard, CalendarRange, Building, Settings, LogOut, Menu, X } from "lucide-react"

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const navigation = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Manage Bookings", href: "/admin/dashboard/bookings", icon: CalendarRange },
    { name: "Facility Manager", href: "/admin/dashboard/facilities", icon: Building },
    { name: "Refund Policy", href: "/admin/dashboard/refund-policy", icon: Settings },
  ]

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-900">
      {/* Sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto border-r bg-white dark:bg-slate-950">
          <div className="flex items-center flex-shrink-0 px-4 gap-2">
            <Building2 className="h-6 w-6 text-violet-600 dark:text-violet-400" />
            <span className="font-bold text-lg">UPYOG Admin</span>
          </div>
          <div className="mt-5 flex-1 flex flex-col">
            <nav className="flex-1 px-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    group flex items-center px-2 py-2 text-sm font-medium rounded-md
                    ${
                      pathname === item.href
                        ? "bg-violet-100 text-violet-700 dark:bg-violet-900/20 dark:text-violet-400"
                        : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                    }
                  `}
                >
                  <item.icon
                    className={`
                      mr-3 flex-shrink-0 h-5 w-5
                      ${
                        pathname === item.href
                          ? "text-violet-600 dark:text-violet-400"
                          : "text-slate-400 dark:text-slate-500"
                      }
                    `}
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="px-2 pb-4 space-y-1">
              <Link
                href="/admin"
                className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                <LogOut className="mr-3 flex-shrink-0 h-5 w-5 text-slate-400 dark:text-slate-500" />
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-slate-600 bg-opacity-75" onClick={() => setIsSidebarOpen(false)}></div>
          <div className="fixed inset-y-0 left-0 flex flex-col z-40 w-full max-w-xs bg-white dark:bg-slate-950">
            <div className="flex items-center justify-between h-16 px-4 border-b">
              <div className="flex items-center gap-2">
                <Building2 className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                <span className="font-bold text-lg">UPYOG Admin</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto pt-5 pb-4">
              <nav className="mt-5 px-2 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      group flex items-center px-2 py-2 text-base font-medium rounded-md
                      ${
                        pathname === item.href
                          ? "bg-violet-100 text-violet-700 dark:bg-violet-900/20 dark:text-violet-400"
                          : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                      }
                    `}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <item.icon
                      className={`
                        mr-3 flex-shrink-0 h-6 w-6
                        ${
                          pathname === item.href
                            ? "text-violet-600 dark:text-violet-400"
                            : "text-slate-400 dark:text-slate-500"
                        }
                      `}
                    />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="px-2 pb-4 space-y-1">
              <Link
                href="/admin"
                className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                onClick={() => setIsSidebarOpen(false)}
              >
                <LogOut className="mr-3 flex-shrink-0 h-6 w-6 text-slate-400 dark:text-slate-500" />
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex items-center justify-between h-16 px-4 border-b bg-white dark:bg-slate-950">
          <div className="flex items-center md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex items-center ml-auto gap-2">
            <ThemeToggle />
            <span className="text-sm font-medium">Admin User</span>
          </div>
        </div>

        <main className="flex-1 overflow-auto bg-slate-50 dark:bg-slate-900">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">{children}</div>
          </div>
        </main>
      </div>
    </div>
  )
}
