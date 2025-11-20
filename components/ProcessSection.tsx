'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
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
  const [activeStepIndex, setActiveStepIndex] = useState(0)

  const handleStepClick = (index: number) => {
    setActiveStepIndex(index)
  }

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setActiveStepIndex(index)
    }
  }

  const activeStep = steps[activeStepIndex]

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

        {/* Stepper Rail */}
        <div className={styles.stepperRail}>
          <div className={styles.journeyLabel} aria-hidden="true">Chaos</div>

          <div className={styles.progressLine}>
            {steps.map((step, index) => (
              <motion.button
                key={step.title}
                className={`${styles.stepNode} ${
                  index === activeStepIndex
                    ? styles.stepNodeActive
                    : index < activeStepIndex
                    ? styles.stepNodeCompleted
                    : styles.stepNodeUpcoming
                }`}
                onClick={() => handleStepClick(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                aria-label={`Step ${index + 1}: ${step.title}`}
                aria-pressed={index === activeStepIndex}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className={styles.stepNumber}>{index + 1}</span>
                <span className={styles.stepTitle}>{step.title}</span>
              </motion.button>
            ))}
          </div>

          <div className={styles.journeyLabel} aria-hidden="true">Clarity</div>
        </div>

        {/* Detail Panel */}
        <div className={styles.detailPanel}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStepIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className={styles.detailContent}
            >
              <div className={styles.stepCounter}>
                Step {activeStepIndex + 1} of {steps.length}
              </div>
              <h3 className={styles.detailTitle}>{activeStep.title}</h3>
              <p className={styles.detailDescription}>{activeStep.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

