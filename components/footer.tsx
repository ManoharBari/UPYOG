import Link from "next/link"
import { Building2 } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-violet-600 dark:text-violet-400" />
              <span className="font-bold text-lg">UPYOG</span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Making community facility booking simple and efficient for everyone.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-500 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/booking/select-facility"
                  className="text-slate-500 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                >
                  Book Facility
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="text-slate-500 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                >
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">Facilities</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/booking/select-facility"
                  className="text-slate-500 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                >
                  Community Halls
                </Link>
              </li>
              <li>
                <Link
                  href="/booking/select-facility"
                  className="text-slate-500 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                >
                  Parks
                </Link>
              </li>
              <li>
                <Link
                  href="/booking/select-facility"
                  className="text-slate-500 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                >
                  Stadiums
                </Link>
              </li>
              <li>
                <Link
                  href="/booking/select-facility"
                  className="text-slate-500 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                >
                  Guest Houses
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-500 dark:text-slate-400">Email: support@upyog.gov.in</li>
              <li className="text-slate-500 dark:text-slate-400">Phone: +91 1234567890</li>
              <li className="text-slate-500 dark:text-slate-400">Address: UPYOG Office, City Center, India</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} UPYOG Community Hall Booking System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
