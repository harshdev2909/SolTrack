"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Shield, Layers, BookOpen } from "lucide-react"

export default function FeaturesSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const features = [
    {
      title: "SDK & API Suite",
      description:
        "Comprehensive tools for integrating climate data, carbon markets, and impact tracking into your Solana applications.",
      icon: Code,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "On-Chain Verification",
      description:
        "Transparent and auditable impact claims with cryptographic proofs and oracle integrations for real-world data.",
      icon: Shield,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      title: "Composable UI Components",
      description:
        "Ready-to-use React components for displaying carbon offsets, impact metrics, and sustainability credentials.",
      icon: Layers,
      color: "text-teal-500",
      bgColor: "bg-teal-500/10",
    },
    {
      title: "Documentation & Examples",
      description: "Comprehensive guides, tutorials, and sample applications to accelerate your development process.",
      icon: BookOpen,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Core Features of SolTrack</h2>
          <p className="text-muted-foreground">Everything you need to build climate-focused applications on Solana</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-200 hover:border-primary/50 hover:shadow-md hover:shadow-primary/5">
                <CardContent className="flex h-full flex-col p-6">
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${feature.bgColor}`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="flex-1 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
