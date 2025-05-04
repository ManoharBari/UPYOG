import { Skeleton } from "@/components/ui/skeleton"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container py-8 px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <Skeleton className="h-10 w-40 mb-2" />
              <Skeleton className="h-5 w-64" />
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-10 w-28" />
              <Skeleton className="h-10 w-32" />
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Sidebar skeleton */}
            <div className="md:col-span-1 order-2 md:order-1">
              <div className="border rounded-lg p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <Skeleton className="h-16 w-16 rounded-full" />
                  <div>
                    <Skeleton className="h-6 w-32 mb-1" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
                <Skeleton className="h-px w-full" />
                <div className="space-y-3">
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-8 w-full" />
                </div>
                <Skeleton className="h-px w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>

            {/* Main content skeleton */}
            <div className="md:col-span-2 space-y-6 order-1 md:order-2">
              <div className="border rounded-lg p-6 bg-gradient-to-r from-violet-500/20 to-purple-600/20">
                <Skeleton className="h-8 w-64 mb-2" />
                <Skeleton className="h-5 w-full max-w-md mb-6" />
                <div className="flex flex-wrap gap-4">
                  <Skeleton className="h-10 w-36" />
                  <Skeleton className="h-10 w-36" />
                </div>
              </div>

              <div className="border rounded-lg p-6 space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <Skeleton className="h-6 w-40 mb-1" />
                    <Skeleton className="h-4 w-56" />
                  </div>
                  <Skeleton className="h-8 w-24" />
                </div>
                <div className="space-y-4">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <div key={i} className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg border">
                      <Skeleton className="h-24 sm:h-auto sm:w-32 w-full rounded-md" />
                      <div className="flex-1 space-y-4">
                        <div className="flex justify-between">
                          <Skeleton className="h-6 w-40" />
                          <Skeleton className="h-6 w-24" />
                        </div>
                        <div className="flex flex-wrap gap-4">
                          <Skeleton className="h-4 w-32" />
                          <Skeleton className="h-4 w-32" />
                        </div>
                        <div className="flex gap-2">
                          <Skeleton className="h-8 w-24" />
                          <Skeleton className="h-8 w-24" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
