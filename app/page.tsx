// Import the required packages
import { Suspense } from "react"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { CertificatesSection } from "@/components/certificates-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

// Add loading fallbacks
export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading projects...</div>}>
        <ProjectsSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading skills...</div>}>
        <SkillsSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading certificates...</div>}>
        <CertificatesSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading contact form...</div>}>
        <ContactSection />
      </Suspense>
      <Footer />
    </main>
  )
}

