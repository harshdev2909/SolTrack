"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Navbar />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.05),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      <div className="container relative flex min-h-screen flex-col items-center justify-center px-4 py-32 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            Build Climate Impact Apps on Solana with SolTrack
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-muted-foreground md:mx-auto">
            The complete developer toolkit for building, verifying, and scaling climate-focused applications on the
            Solana blockchain. Transparent, composable, and impact-driven.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700"
            >
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              View Documentation
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 w-full max-w-5xl rounded-xl border border-border/50 bg-card/30 p-4 backdrop-blur-sm md:p-8"
        >
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-green-500"
              >
                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
              </svg>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold">SDK & API Integration</h3>
              <p className="text-muted-foreground">Seamlessly integrate climate data and impact tracking</p>
            </div>

            <div className="mx-4 hidden h-8 w-px bg-border md:block"></div>

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-emerald-500"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold">On-Chain Verification</h3>
              <p className="text-muted-foreground">Transparent and verifiable impact tracking</p>
            </div>

            <div className="mx-4 hidden h-8 w-px bg-border md:block"></div>

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-teal-500"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold">Composable UI</h3>
              <p className="text-muted-foreground">Ready-to-use components for climate apps</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
