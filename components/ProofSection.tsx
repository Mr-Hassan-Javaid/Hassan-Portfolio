'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './ProofSection.module.css'

const caseStudies = [
  {
    title: 'Measurable UX Impact Through Design Systems',
    impact: '40% Efficiency Gain',
    challenge:
      'A legacy platform was causing a 40% user inefficiency rate due to a convoluted and outdated interface.',
    transformation:
      'Deconstructed the entire user workflow, architected a new, intuitive interface from first principles, and executed the build using a modern Next.js stack and a new design system.',
    outcome:
      'A 40% measured improvement in user efficiency and a 25% reduction in user-reported support tickets within the first quarter.',
  },
  {
    title: 'Redesigning Fintech Reporting for Higher Engagement',
    impact: '50% Engagement Increase',
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
          Case Studies
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
                scale: 1.01,
                y: -4,
                boxShadow: '0 20px 50px rgba(45, 34, 25, 0.2)',
                transition: { duration: 0.4 },
              }}
            >
              <div className={styles.caseHeader}>
                <h3 className={styles.caseTitle}>{caseStudy.title}</h3>
                <span className={styles.impactBadge}>{caseStudy.impact}</span>
              </div>

              <div className={styles.caseContent}>
                <motion.div
                  className={styles.caseBlock}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h4 className={styles.caseLabel}>The Challenge</h4>
                  <p className={styles.caseText}>{caseStudy.challenge}</p>
                </motion.div>

                <motion.div
                  className={styles.caseBlock}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h4 className={styles.caseLabel}>The Transformation</h4>
                  <p className={styles.caseText}>{caseStudy.transformation}</p>
                </motion.div>

                <motion.div
                  className={styles.caseBlock}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h4 className={styles.caseLabel}>The Outcome</h4>
                  <p className={styles.caseText}>{caseStudy.outcome}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

