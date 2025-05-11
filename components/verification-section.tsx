"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Database, Shield, History, ArrowRight } from "lucide-react"

export default function VerificationSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section
      id="verification"
      className="w-full py-12 md:py-24 bg-gradient-to-b from-background via-background/50 to-background relative overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block p-2 mb-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg">
              <Shield className="w-8 h-8 text-green-500" />
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              On-Chain Impact Verification
            </h2>
            <p className="mb-6 text-lg text-muted-foreground max-w-2xl">
              SolTrack provides transparent and auditable verification of climate impact claims through Solana's
              high-performance blockchain. Our smart contracts ensure that every offset, credit, and impact metric is
              cryptographically secured and publicly verifiable.
            </p>
            <ul className="mb-8 space-y-4">
              {[
                {
                  Icon: Database,
                  title: "Oracle Integration",
                  description: "Connect real-world climate data through trusted oracle networks",
                  delay: 0.2,
                },
                {
                  Icon: Shield,
                  title: "Cryptographic Proofs",
                  description: "Generate verifiable proofs of impact for transparency and trust",
                  delay: 0.3,
                },
                {
                  Icon: History,
                  title: "Audit Trail",
                  description: "Maintain a complete history of all climate actions and verifications",
                  delay: 0.4,
                },
              ].map(({ Icon, title, description, delay }) => (
                <motion.li
                  key={title}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-green-500/5 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay }}
                >
                  <div className="rounded-full p-2 bg-green-500/10">
                    <Icon className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{title}</h3>
                    <p className="text-muted-foreground">{description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/25 group"
            >
              <span>Explore Smart Contracts</span>
              <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Diagram Area */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto aspect-square w-full max-w-[500px] rounded-xl border border-border/50 bg-card/30 p-4 backdrop-blur-sm lg:p-8"
          >
            <div className="relative h-full w-full rounded-lg bg-background/80 p-4">
              {/* Connection lines */}
              <div className="absolute inset-4 pointer-events-none">
                {/* Vertical lines */}
                <div className="absolute left-1/2 top-[20%] h-[60%] w-0.5 bg-gradient-to-b from-blue-500/20 via-muted-foreground/20 to-purple-500/20" />
                {/* Horizontal line */}
                <div className="absolute top-1/2 left-[20%] w-[60%] h-0.5 bg-gradient-to-r from-green-500/20 via-muted-foreground/20 to-amber-500/20" />
                {/* Diagonal lines */}
                <div className="absolute w-[70%] h-[70%] left-[15%] top-[15%] border border-muted-foreground/10 rotate-45 origin-center" />
                <div className="absolute w-[70%] h-[70%] left-[15%] top-[15%] border border-muted-foreground/10 -rotate-45 origin-center" />
              </div>

              {/* Nodes */}
              <div className="relative h-full">
                {/* Oracle Node - Top */}
                <div className="absolute top-[5%] left-1/2 -translate-x-1/2">
                  <Node icon={<Database className="h-6 w-6" />} label="Oracle Network" bg="bg-blue-500/20" text="text-blue-500" />
                </div>

                {/* Smart Contract - Left */}
                <div className="absolute top-1/2 left-[5%] -translate-y-1/2">
                  <Node icon={<Shield className="h-6 w-6" />} label="Impact Contract" bg="bg-green-500/20" text="text-green-500" />
                </div>

                {/* dApp - Right */}
                <div className="absolute top-1/2 right-[5%] -translate-y-1/2">
                  <Node icon={<History className="h-6 w-6" />} label="dApp" bg="bg-amber-500/20" text="text-amber-500" />
                </div>

                {/* Blockchain - Bottom */}
                <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2">
                  <Node 
                    icon={
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
                      </svg>
                    } 
                    label="Solana Blockchain" 
                    bg="bg-purple-500/20" 
                    text="text-purple-500" 
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Simple reusable node component
function Node({ icon, label, bg, text }: { icon: React.ReactNode; label: string; bg: string; text: string }) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className={`flex h-14 w-14 items-center justify-center rounded-full ${bg} shadow-lg backdrop-blur-sm ${text}`}>
        {icon}
      </div>
      <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">{label}</span>
    </div>
  )
}
