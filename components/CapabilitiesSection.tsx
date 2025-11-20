'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import styles from './CapabilitiesSection.module.css'

const capabilities = [
  { label: 'Strategic Design', category: 'Strategy' },
  { label: 'UI/UX & Design Systems', category: 'Experience' },
  { label: 'Interactive Prototyping', category: 'Experience' },
  { label: 'Front-End Development with AI', category: 'Technical' },
  { label: 'User Research', category: 'Strategy' },
  { label: 'System Architecture', category: 'Technical' },
]

export default function CapabilitiesSection() {
  const ref = useRef(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (!sliderRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
  }

  const scrollLeft = () => {
    if (!sliderRef.current) return
    const cardWidth = 280 + 16 // card width + gap
    sliderRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' })
  }

  const scrollRight = () => {
    if (!sliderRef.current) return
    const cardWidth = 280 + 16 // card width + gap
    sliderRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (slider) {
      slider.addEventListener('scroll', checkScrollButtons)
      checkScrollButtons()
      return () => slider.removeEventListener('scroll', checkScrollButtons)
    }
  }, [])

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

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={styles.description}
        >
          Where strategy, experience, and technical expertise converge to transform ideas into impactful solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.capabilitiesSlider}
        >
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`${styles.navArrow} ${styles.navArrowLeft}`}
            aria-label="Scroll left"
          >
            ‹
          </button>
          <div ref={sliderRef} className={styles.sliderContainer}>
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.capability}
              >
                <span className={styles.capabilityLabel}>{capability.label}</span>
                <span className={`${styles.categoryPill} ${styles[`category${capability.category}`]}`}>
                  {capability.category}
                </span>
              </motion.div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`${styles.navArrow} ${styles.navArrowRight}`}
            aria-label="Scroll right"
          >
            ›
          </button>
        </motion.div>

        <button
          onClick={scrollToTop}
          className={styles.backToHero}
          aria-label="Back to top"
        >
          ↑
        </button>
      </div>
    </section>
  )
}

