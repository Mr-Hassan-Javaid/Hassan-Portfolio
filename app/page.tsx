'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import ThinkingSection from '@/components/ThinkingSection'
import ProcessSection from '@/components/ProcessSection'
import ProofSection from '@/components/ProofSection'
import CapabilitiesSection from '@/components/CapabilitiesSection'
import CTASection from '@/components/CTASection'
import EmailModal from '@/components/EmailModal'

export default function Home() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)

  return (
    <main>
      <Hero />
      <ThinkingSection />
      <ProcessSection />
      <ProofSection />
      <CapabilitiesSection />
      <CTASection onOpenModal={() => setIsEmailModalOpen(true)} />
      <EmailModal 
        isOpen={isEmailModalOpen} 
        onClose={() => setIsEmailModalOpen(false)} 
      />
    </main>
  )
}

