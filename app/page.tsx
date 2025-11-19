'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import ThinkingSection from '@/components/ThinkingSection'
import ProcessSection from '@/components/ProcessSection'
import ProofSection from '@/components/ProofSection'
import CapabilitiesSection from '@/components/CapabilitiesSection'
import CTASection from '@/components/CTASection'
import EmailModal from '@/components/EmailModal'
import GlitchIntro from '@/components/GlitchIntro'

export default function Home() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)
  const [showIntro, setShowIntro] = useState(true)
  const [introComplete, setIntroComplete] = useState(false)

  const handleIntroComplete = () => {
    setShowIntro(false)
    setIntroComplete(true)
  }

  return (
    <>
      {showIntro && <GlitchIntro onComplete={handleIntroComplete} />}
      <main>
        <Hero introComplete={introComplete} />
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
    </>
  )
}

