"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, CheckCircle, Code2, BookOpen } from "lucide-react"

export default function SdkSection() {
  const [mounted, setMounted] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const codeSnippet = `import { SolTrack } from '@soltrack/sdk';

// Initialize the SDK with your API key
const soltrack = new SolTrack({
  apiKey: process.env.SOLTRACK_API_KEY,
  network: 'mainnet-beta'
});

// Track carbon offset for a transaction
const result = await soltrack.trackCarbonOffset({
  transaction: txSignature,
  offsetAmount: 2.5, // tons of CO2
  offsetType: 'renewable-energy',
  metadata: {
    project: 'Solar Farm Alpha',
    location: 'California, USA'
  }
});

console.log(\`Carbon offset verified: \${result.verified}\`);
console.log(\`Transaction: \${result.transactionUrl}\`);`

  return (
    <section id="sdk" className="w-full py-12 md:py-24 bg-gradient-to-b from-background to-background/80">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-block p-2 mb-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg">
              <Code2 className="w-8 h-8 text-green-500" />
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              SDK & API Suite
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Powerful tools to integrate climate impact tracking into your Solana applications
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-4xl"
        >
          <Tabs defaultValue="javascript" className="w-full">
            <div className="mb-4 flex items-center justify-between">
              <TabsList className="bg-muted/50">
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                <TabsTrigger value="typescript">TypeScript</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
              </TabsList>
              <Button 
                variant={copied ? "ghost" : "secondary"} 
                size="sm" 
                onClick={handleCopy}
                className="relative group transition-all duration-300 hover:shadow-md"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={copied ? "check" : "copy"}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center"
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" />
                        Copy Code
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </div>
            <TabsContent value="javascript" className="mt-0">
              <div className="relative rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <pre className="overflow-x-auto p-4 text-sm">
                  <code className="language-javascript">{codeSnippet}</code>
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="typescript" className="mt-0">
              <div className="relative rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <pre className="overflow-x-auto p-4 text-sm">
                  <code className="language-typescript">
                    {codeSnippet.replace("const soltrack", "const soltrack: SolTrack")}
                  </code>
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="python" className="mt-0">
              <div className="relative rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <pre className="overflow-x-auto p-4 text-sm">
                  <code className="language-python">{`from soltrack import SolTrack

# Initialize the SDK with your API key
soltrack = SolTrack(
    api_key=os.environ.get("SOLTRACK_API_KEY"),
    network="mainnet-beta"
)

# Track carbon offset for a transaction
result = soltrack.track_carbon_offset(
    transaction=tx_signature,
    offset_amount=2.5,  # tons of CO2
    offset_type="renewable-energy",
    metadata={
        "project": "Solar Farm Alpha",
        "location": "California, USA"
    }
)

print(f"Carbon offset verified: {result.verified}")
print(f"Transaction: {result.transaction_url}")
`}</code>
                </pre>
              </div>
            </TabsContent>
          </Tabs>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
            >
              <Code2 className="mr-2 h-5 w-5" />
              Try the SDK
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 hover:bg-green-500/5 transform hover:scale-105 transition-all duration-300"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              View API Documentation
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 text-center text-sm text-muted-foreground"
          >
            <p>Need help getting started? Check out our comprehensive guides and tutorials</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
