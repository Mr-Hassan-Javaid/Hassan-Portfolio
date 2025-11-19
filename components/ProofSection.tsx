'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './ProofSection.module.css'

const caseStudies = [
  {
    title: 'Taming Enterprise Chaos',
    challenge:
      'A legacy platform was causing a 40% user inefficiency rate due to a convoluted and outdated interface.',
    transformation:
      'Deconstructed the entire user workflow, architected a new, intuitive interface from first principles, and executed the build using a modern Next.js stack and a new design system.',
    outcome:
      'A 40% measured improvement in user efficiency and a 25% reduction in user-reported support tickets within the first quarter.',
  },
  {
    title: 'From Data Overload to Instant Insight',
    challenge:
      'A fintech startup had powerful, complex financial data but no clear way for non-expert users to understand or act on it.',
    transformation:
      'Conducted user research to identify key decision-making moments, architected an interactive dashboard focused on clarity, and executed a solution that prioritized data visualization and instant comprehension.',
    outcome:
      `A 50% increase in user engagement with core reporting features and overwhelmingly positive feedback on the platform's newfound ease of use.`,
  },
]

export default function ProofSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.title}
              className={styles.caseStudy}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.97 }}
              transition={{
                duration: 0.7,
                ease: 'easeOut',
                delay: 0.1 * index,
              }}
              whileHover={{
                scale: 1.02,
                rotateX: 1.5,
                rotateY: -1.5,
                boxShadow: '0 24px 60px rgba(45, 34, 25, 0.25)',
                transition: { duration: 0.35 },
              }}
            >
              <h3 className={styles.caseTitle}>{caseStudy.title}</h3>

              <div className={styles.caseContent}>
                <div className={styles.caseBlock}>
                  <h4 className={styles.caseLabel}>The Challenge</h4>
                  <p className={styles.caseText}>{caseStudy.challenge}</p>
                </div>

                <div className={styles.caseBlock}>
                  <h4 className={styles.caseLabel}>The Transformation</h4>
                  <p className={styles.caseText}>{caseStudy.transformation}</p>
                </div>

                <div className={styles.caseBlock}>
                  <h4 className={styles.caseLabel}>The Outcome</h4>
                  <p className={styles.caseText}>{caseStudy.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

