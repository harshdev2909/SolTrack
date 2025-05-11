"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Leaf, Zap, Droplets, Wind } from "lucide-react"

export default function ComponentsSection() {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("carbon-tracker")
  const [progress, setProgress] = useState(45)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 45 : prev + 1))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  const components = [
    {
      id: "carbon-tracker",
      name: "Carbon Offset Tracker",
      description: "Track and display carbon offsets with real-time updates",
    },
    {
      id: "impact-badge",
      name: "Impact Badge",
      description: "Showcase verified environmental impact credentials",
    },
    {
      id: "energy-monitor",
      name: "Renewable Energy Monitor",
      description: "Visualize clean energy generation and consumption",
    },
    {
      id: "water-tracker",
      name: "Water Conservation Tracker",
      description: "Monitor water usage and conservation efforts",
    },
  ]

  return (
    <section id="components" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Composable UI Components</h2>
            <p className="text-muted-foreground">Ready-to-use React components for climate-focused applications</p>
          </motion.div>
        </div>

        <div className="mx-auto max-w-5xl">
          <Tabs defaultValue="carbon-tracker" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="mb-8">
              <TabsList className="mx-auto grid max-w-lg grid-cols-2 bg-muted/50 sm:grid-cols-4">
                {components.map((component) => (
                  <TabsTrigger key={component.id} value={component.id}>
                    {component.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm"
            >
              <TabsContent value="carbon-tracker" className="mt-0 data-[state=active]:flex">
                <div className="flex w-full flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold">Carbon Offset Tracker</h3>
                      <p className="text-sm text-muted-foreground">Track your project's carbon offset progress</p>
                    </div>
                    <Badge className="bg-green-500 text-white hover:bg-green-600">Verified</Badge>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
                            <Leaf className="h-5 w-5 text-green-500" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Total Offset</p>
                            <h4 className="text-2xl font-bold">24.8 tons</h4>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10">
                            <Zap className="h-5 w-5 text-blue-500" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Offset Projects</p>
                            <h4 className="text-2xl font-bold">3 active</h4>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-sm font-medium">Quarterly Goal Progress</p>
                      <p className="text-sm font-medium">{progress}%</p>
                    </div>
                    <Progress value={progress} className="h-2 w-full bg-muted" />
                  </div>

                  <div className="rounded-lg border border-border/50 bg-card/50 p-4">
                    <h4 className="mb-2 font-semibold">Recent Offsets</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <p>Solar Farm Project</p>
                        <p className="font-medium">5.2 tons</p>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <p>Wind Energy Credits</p>
                        <p className="font-medium">8.7 tons</p>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <p>Reforestation Initiative</p>
                        <p className="font-medium">10.9 tons</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="impact-badge" className="mt-0 data-[state=active]:flex">
                <div className="flex w-full flex-col items-center justify-center gap-8">
                  <div className="text-center">
                    <h3 className="text-xl font-bold">Climate Impact Badge</h3>
                    <p className="text-sm text-muted-foreground">Showcase your verified environmental credentials</p>
                  </div>

                  <div className="flex flex-col items-center gap-6 sm:flex-row">
                    <div className="flex flex-col items-center">
                      <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-4 border-green-500 p-2">
                        <div className="absolute inset-0 rounded-full bg-green-500/10"></div>
                        <div className="flex flex-col items-center justify-center text-center">
                          <Leaf className="mb-2 h-10 w-10 text-green-500" />
                          <span className="text-2xl font-bold">Gold</span>
                          <span className="text-xs text-muted-foreground">Tier</span>
                        </div>
                      </div>
                      <span className="mt-4 text-sm font-medium">Carbon Neutral</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-4 border-blue-500 p-2">
                        <div className="absolute inset-0 rounded-full bg-blue-500/10"></div>
                        <div className="flex flex-col items-center justify-center text-center">
                          <Droplets className="mb-2 h-10 w-10 text-blue-500" />
                          <span className="text-2xl font-bold">Silver</span>
                          <span className="text-xs text-muted-foreground">Tier</span>
                        </div>
                      </div>
                      <span className="mt-4 text-sm font-medium">Water Conscious</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-4 border-amber-500 p-2">
                        <div className="absolute inset-0 rounded-full bg-amber-500/10"></div>
                        <div className="flex flex-col items-center justify-center text-center">
                          <Zap className="mb-2 h-10 w-10 text-amber-500" />
                          <span className="text-2xl font-bold">Bronze</span>
                          <span className="text-xs text-muted-foreground">Tier</span>
                        </div>
                      </div>
                      <span className="mt-4 text-sm font-medium">Renewable Energy</span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="energy-monitor" className="mt-0 data-[state=active]:flex">
                <div className="flex w-full flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold">Renewable Energy Monitor</h3>
                      <p className="text-sm text-muted-foreground">Track clean energy generation and usage</p>
                    </div>
                    <Badge className="bg-amber-500 text-white hover:bg-amber-600">Live</Badge>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10">
                            <Zap className="h-5 w-5 text-amber-500" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Solar Generation</p>
                            <h4 className="text-2xl font-bold">12.4 kWh</h4>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10">
                            <Wind className="h-5 w-5 text-blue-500" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Wind Generation</p>
                            <h4 className="text-2xl font-bold">8.7 kWh</h4>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
                            <Leaf className="h-5 w-5 text-green-500" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Carbon Saved</p>
                            <h4 className="text-2xl font-bold">5.8 kg</h4>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="rounded-lg border border-border/50 bg-card/50 p-4">
                    <h4 className="mb-4 font-semibold">Energy Distribution</h4>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-amber-500"></div>
                        <span className="text-sm">Solar (58%)</span>
                        <div className="ml-2 flex-1">
                          <div className="h-2 w-[58%] rounded-full bg-amber-500"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                        <span className="text-sm">Wind (32%)</span>
                        <div className="ml-2 flex-1">
                          <div className="h-2 w-[32%] rounded-full bg-blue-500"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-green-500"></div>
                        <span className="text-sm">Hydro (10%)</span>
                        <div className="ml-2 flex-1">
                          <div className="h-2 w-[10%] rounded-full bg-green-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="water-tracker" className="mt-0 data-[state=active]:flex">
                <div className="flex w-full flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold">Water Conservation Tracker</h3>
                      <p className="text-sm text-muted-foreground">Monitor water usage and conservation</p>
                    </div>
                    <Badge className="bg-blue-500 text-white hover:bg-blue-600">Active</Badge>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10">
                            <Droplets className="h-5 w-5 text-blue-500" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Water Saved</p>
                            <h4 className="text-2xl font-bold">1,240 gal</h4>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
                            <Leaf className="h-5 w-5 text-green-500" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Conservation Projects</p>
                            <h4 className="text-2xl font-bold">2 active</h4>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-sm font-medium">Monthly Conservation Goal</p>
                      <p className="text-sm font-medium">{progress}%</p>
                    </div>
                    <Progress value={progress} className="h-2 w-full bg-muted" />
                  </div>

                  <div className="rounded-lg border border-border/50 bg-card/50 p-4">
                    <h4 className="mb-2 font-semibold">Conservation Breakdown</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <p>Rainwater Harvesting</p>
                        <p className="font-medium">540 gal</p>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <p>Efficient Irrigation</p>
                        <p className="font-medium">420 gal</p>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <p>Greywater Recycling</p>
                        <p className="font-medium">280 gal</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </motion.div>
          </Tabs>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700"
            >
              Explore Components
            </Button>
            <Button size="lg" variant="outline">
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
