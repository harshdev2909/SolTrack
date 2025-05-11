"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, FileText, Video } from "lucide-react"

export default function DocsSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const resources = [
    {
      title: "Getting Started Guide",
      description: "Learn the basics of SolTrack and set up your first project",
      icon: BookOpen,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "API Reference",
      description: "Comprehensive documentation of all SolTrack APIs",
      icon: Code,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Sample Applications",
      description: "Example dApps showcasing SolTrack integration",
      icon: FileText,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step guides for building with SolTrack",
      icon: Video,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
  ]

  return (
    <section id="docs" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Documentation & Examples</h2>
            <p className="text-muted-foreground">Comprehensive resources to help you build with SolTrack</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-200 hover:border-primary/50 hover:shadow-md hover:shadow-primary/5">
                <CardContent className="flex h-full flex-col p-6">
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${resource.bgColor}`}>
                    <resource.icon className={`h-6 w-6 ${resource.color}`} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{resource.title}</h3>
                  <p className="flex-1 text-muted-foreground">{resource.description}</p>
                  <Button variant="ghost" className="mt-4 justify-start p-0 hover:bg-transparent">
                    <span className="text-primary underline-offset-4 hover:underline">Learn more</span>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm">
          <div className="flex flex-col items-center text-center">
            <h3 className="mb-2 text-2xl font-bold">Ready to start building?</h3>
            <p className="mb-6 text-muted-foreground">
              Join our developer community and start building climate-focused applications on Solana today.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700"
              >
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                Join Discord Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
