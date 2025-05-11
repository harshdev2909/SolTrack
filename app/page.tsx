import Hero from "@/components/hero"
import StatsSection from "@/components/stats-section"
import FeaturesSection from "@/components/features-section"
import SdkSection from "@/components/sdk-section"
import VerificationSection from "@/components/verification-section"
import ComponentsSection from "@/components/components-section"
import DocsSection from "@/components/docs-section"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="soltrack-theme">
      <div className="min-h-screen bg-gradient-to-b from-background to-background/90 text-foreground">
        <Hero />
        <StatsSection />
        <FeaturesSection />
        <SdkSection />
        <VerificationSection />
        <ComponentsSection />
        <DocsSection />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
