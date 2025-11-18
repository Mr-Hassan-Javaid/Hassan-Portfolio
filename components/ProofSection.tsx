'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
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
        
        <div className={styles.caseStudies}>
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
              transition={{
                duration: 0.8,
                delay: index * 0.3,
                ease: 'easeOut',
                type: 'spring',
                stiffness: 100
              }}
              className={styles.caseStudy}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(45, 34, 25, 0.1)',
                transition: { duration: 0.3 }
              }}
            >
              <h3 className={styles.caseTitle}>{study.title}</h3>
              
              <div className={styles.caseContent}>
                <div className={styles.caseBlock}>
                  <h4 className={styles.caseLabel}>The Challenge</h4>
                  <p className={styles.caseText}>{study.challenge}</p>
                </div>
                
                <div className={styles.caseBlock}>
                  <h4 className={styles.caseLabel}>The Transformation</h4>
                  <p className={styles.caseText}>{study.transformation}</p>
                </div>
                
                <div className={styles.caseBlock}>
                  <h4 className={styles.caseLabel}>The Outcome</h4>
                  <p className={styles.caseText}>{study.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

