"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function VerificationSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="verification" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">On-Chain Impact Verification</h2>
            <p className="mb-6 text-muted-foreground">
              SolTrack provides transparent and auditable verification of climate impact claims through Solana's
              high-performance blockchain. Our smart contracts ensure that every offset, credit, and impact metric is
              cryptographically secured and publicly verifiable.
            </p>
            <ul className="mb-8 space-y-4">
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-1 h-5 w-5 text-green-500"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <div>
                  <h3 className="font-semibold">Oracle Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect real-world climate data through trusted oracle networks
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-1 h-5 w-5 text-green-500"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <div>
                  <h3 className="font-semibold">Cryptographic Proofs</h3>
                  <p className="text-sm text-muted-foreground">
                    Generate verifiable proofs of impact for transparency and trust
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-1 h-5 w-5 text-green-500"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <div>
                  <h3 className="font-semibold">Audit Trail</h3>
                  <p className="text-sm text-muted-foreground">
                    Maintain a complete history of all climate actions and verifications
                  </p>
                </div>
              </li>
            </ul>
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700"
            >
              Explore Smart Contracts
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-xl border border-border/50 bg-card/30 p-2 backdrop-blur-sm lg:p-6"
          >
            <div className="relative h-full w-full rounded-lg bg-background/80">
              <div className="absolute left-1/2 top-1/2 h-4/5 w-4/5 -translate-x-1/2 -translate-y-1/2">
                <div className="relative h-full w-full">
                  {/* Oracle Node */}
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 transform">
                    <div className="flex flex-col items-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-8 w-8 text-blue-500"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" x2="22" y1="12" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      </div>
                      <span className="mt-2 text-sm font-medium">Oracle Network</span>
                    </div>
                  </div>

                  {/* Blockchain Node */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 transform">
                    <div className="flex flex-col items-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-8 w-8 text-purple-500"
                        >
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                          <line x1="3" x2="21" y1="9" y2="9" />
                          <line x1="3" x2="21" y1="15" y2="15" />
                          <line x1="9" x2="9" y1="3" y2="21" />
                          <line x1="15" x2="15" y1="3" y2="21" />
                        </svg>
                      </div>
                      <span className="mt-2 text-sm font-medium">Solana Blockchain</span>
                    </div>
                  </div>

                  {/* Smart Contract */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 transform">
                    <div className="flex flex-col items-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-8 w-8 text-green-500"
                        >
                          <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                        </svg>
                      </div>
                      <span className="mt-2 text-sm font-medium">Impact Contract</span>
                    </div>
                  </div>

                  {/* User App */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 transform">
                    <div className="flex flex-col items-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-8 w-8 text-amber-500"
                        >
                          <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                          <line x1="12" x2="12.01" y1="18" y2="18" />
                        </svg>
                      </div>
                      <span className="mt-2 text-sm font-medium">dApp</span>
                    </div>
                  </div>

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Oracle to Smart Contract */}
                    <line
                      x1="50"
                      y1="10"
                      x2="15"
                      y2="50"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      strokeDasharray="4"
                      className="text-muted-foreground"
                    />
                    {/* Oracle to User App */}
                    <line
                      x1="50"
                      y1="10"
                      x2="85"
                      y2="50"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      strokeDasharray="4"
                      className="text-muted-foreground"
                    />
                    {/* Smart Contract to Blockchain */}
                    <line
                      x1="15"
                      y1="50"
                      x2="50"
                      y2="90"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      strokeDasharray="4"
                      className="text-muted-foreground"
                    />
                    {/* User App to Blockchain */}
                    <line
                      x1="85"
                      y1="50"
                      x2="50"
                      y2="90"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      strokeDasharray="4"
                      className="text-muted-foreground"
                    />
                    {/* Smart Contract to User App */}
                    <line
                      x1="15"
                      y1="50"
                      x2="85"
                      y2="50"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      strokeDasharray="4"
                      className="text-muted-foreground"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
