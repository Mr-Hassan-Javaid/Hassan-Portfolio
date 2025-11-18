'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './CapabilitiesSection.module.css'

const capabilities = [
  'Strategic Design',
  'UI/UX & Design Systems',
  'Interactive Prototyping',
  'Front-End Development with AI',
  'User Research',
  'System Architecture',
]

export default function CapabilitiesSection() {
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
          An Ecosystem of Capabilities
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.capabilitiesGrid}
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.capability}
            >
              {capability}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

