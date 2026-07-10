import { AmbientBackground } from '@/components/ambient-background'
import { SiteNav } from '@/components/site-nav'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { ProjectsSection } from '@/components/projects-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <AmbientBackground />
      <SiteNav />
      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
