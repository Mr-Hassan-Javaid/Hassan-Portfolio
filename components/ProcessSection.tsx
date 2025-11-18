'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './ProcessSection.module.css'

const steps = [
  {
    title: 'Deconstruction',
    description: 'We dissect the core challenge, separating assumptions from facts to find the true source of the problem.',
  },
  {
    title: 'Architecture',
    description: 'We design a robust, scalable blueprint for the solution, focusing on a clean user experience and technical excellence.',
  },
  {
    title: 'Execution',
    description: 'We build with precision and speed, using modern tools to bring the vision to life with high-quality code and craft.',
  },
  {
    title: 'Impact',
    description: 'We measure the outcome against the original challenge, ensuring the final solution delivers real, quantifiable value.',
  },
]

export default function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="process" ref={ref} className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className={styles.heading}
        >
          The Path from Chaos to Clarity
        </motion.h2>
        
        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={styles.step}
            >
              <div className={styles.stepNumber}>{index + 1}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

