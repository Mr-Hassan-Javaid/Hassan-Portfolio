'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import styles from './ProofSection.module.css'

const caseStudies = [
  {
    title: 'Taming Enterprise Chaos',
    challenge: 'A legacy platform was causing a 40% user inefficiency rate due to a convoluted and outdated interface.',
    transformation: 'Deconstructed the entire user workflow, architected a new, intuitive interface from first principles, and executed the build using a modern Next.js stack and a new design system.',
    outcome: 'A 40% measured improvement in user efficiency and a 25% reduction in user-reported support tickets within the first quarter.',
  },
  {
    title: 'From Data Overload to Instant Insight',
    challenge: 'A fintech startup had powerful, complex financial data but no clear way for non-expert users to understand or act on it.',
    transformation: `Conducted user research to identify key decision-making moments, architected an interactive dashboard focused on clarity, and executed a solution that prioritized data visualization and instant comprehension.`,
    outcome: `A 50% increase in user engagement with core reporting features and overwhelmingly positive feedback on the platform's newfound ease of use.`,
  },
]

export default function ProofSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const stepRef1 = useRef<HTMLDivElement | null>(null)
  const stepRef2 = useRef<HTMLDivElement | null>(null)

  // Center-triggered steps so each scroll \"screen\" selects a case tile
  const inViewStep1 = useInView(stepRef1, { margin: '-50% 0px -50% 0px' })
  const inViewStep2 = useInView(stepRef2, { margin: '-50% 0px -50% 0px' })

  const [activeCaseIndex, setActiveCaseIndex] = useState(0)

  useEffect(() => {
    if (inViewStep2) {
      setActiveCaseIndex(1)
    } else if (inViewStep1) {
      setActiveCaseIndex(0)
    }
  }, [inViewStep1, inViewStep2])

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className={styles.heading}
        >
          The Proof
        </motion.h2>

        <div className={styles.layout}>
          <div className={styles.stickyCard}>
            <AnimatePresence mode="wait">
              <motion.div
                key={caseStudies[activeCaseIndex].title}
                className={styles.caseStudy}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.97 }}
                transition={{
                  duration: 0.7,
                  ease: 'easeOut',
                  type: 'spring',
                  stiffness: 90,
                }}
                whileHover={{
                  scale: 1.02,
                  rotateX: 1.5,
                  rotateY: -1.5,
                  boxShadow: '0 24px 60px rgba(45, 34, 25, 0.25)',
                  transition: { duration: 0.35 },
                }}
              >
                <h3 className={styles.caseTitle}>
                  {caseStudies[activeCaseIndex].title}
                </h3>

                <div className={styles.caseContent}>
                  <div className={styles.caseBlock}>
                    <h4 className={styles.caseLabel}>The Challenge</h4>
                    <p className={styles.caseText}>
                      {caseStudies[activeCaseIndex].challenge}
                    </p>
                  </div>

                  <div className={styles.caseBlock}>
                    <h4 className={styles.caseLabel}>The Transformation</h4>
                    <p className={styles.caseText}>
                      {caseStudies[activeCaseIndex].transformation}
                    </p>
                  </div>

                  <div className={styles.caseBlock}>
                    <h4 className={styles.caseLabel}>The Outcome</h4>
                    <p className={styles.caseText}>
                      {caseStudies[activeCaseIndex].outcome}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className={styles.steps}>
            <div ref={stepRef1} className={styles.step} />
            <div ref={stepRef2} className={styles.step} />
            <div className={styles.stepSpacer} />
          </div>
        </div>
      </div>
    </section>
  )
}

