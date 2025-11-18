'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './CTASection.module.css'

interface CTASectionProps {
  onOpenModal: () => void
}

export default function CTASection({ onOpenModal }: CTASectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className={styles.content}
        >
          <h2 className={styles.heading}>Let's Build the Way Forward</h2>
          <p className={styles.question}>Ready to transform your challenge into a clear solution?</p>
          <motion.button
            onClick={onOpenModal}
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start the Process
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

