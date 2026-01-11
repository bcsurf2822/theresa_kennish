"use client"

import { useState } from "react"
import { Sidebar } from "@/src/components/layout/Sidebar"
import { Header } from "@/src/components/layout/Header"
import { ImageUploadSection } from "@/src/components/upload/ImageUploadSection"
import { DiagnosticsSection } from "@/src/components/diagnostics/DiagnosticsSection"
import { Footer } from "@/src/components/layout/Footer"

export default function Page() {
  const [username] = useState("Ann")

  return (
    <div className="h-screen bg-background text-foreground flex overflow-hidden">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <main className="flex-1 h-screen lg:ml-20 overflow-y-auto scrollbar-hide flex flex-col">
        <div className="flex-1 p-3 sm:p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
            <Header username={username} />
            <ImageUploadSection />
            <DiagnosticsSection />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}
