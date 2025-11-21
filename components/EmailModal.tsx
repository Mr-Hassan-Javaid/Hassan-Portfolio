'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, FormEvent, useEffect } from 'react'
import styles from './EmailModal.module.css'

interface EmailModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EmailModal({ isOpen, onClose }: EmailModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  useEffect(() => {
    if (isOpen) {
      // Scroll to top when modal opens
      window.scrollTo({ top: 0, behavior: 'smooth' })
      // Prevent body scrolling
      document.body.style.overflow = 'hidden'
    } else {
      // Restore body scrolling
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    
    if (!accessKey) {
      console.error('Web3Forms API key is not configured')
      setErrorMessage('API key is not configured. Please check your environment variables.')
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    try {
      // Add honeypot field (botcheck) to help reduce spam filter false positives
      const data = {
        access_key: accessKey,
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        subject: 'New Contact Form Submission - Portfolio',
        from_name: formData.name.trim(),
        botcheck: '', // Honeypot field - should always be empty for legitimate submissions
      }

      console.log('Submitting form with data:', { ...data, access_key: '[REDACTED]' })

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      })

      console.log('Web3Forms response status:', response.status, response.statusText)

      const result = await response.json()
      console.log('Web3Forms full response:', JSON.stringify(result, null, 2))

      if (result.success) {
        console.log('Form submission successful')
        setSubmitStatus('success')
        setErrorMessage('')
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' })
          setSubmitStatus('idle')
          onClose()
        }, 2000)
      } else {
        const errorMsg = result.message || 'Unknown error occurred'
        console.error('Form submission failed:', {
          message: errorMsg,
          fullResponse: result
        })
        setErrorMessage(errorMsg)
        setSubmitStatus('error')
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Network error occurred'
      console.error('Error submitting form:', {
        error,
        message: errorMsg,
        stack: error instanceof Error ? error.stack : undefined
      })
      setErrorMessage(errorMsg)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.overlay}
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
            transition={{ duration: 0.3 }}
            className={styles.modal}
          >
            <button className={styles.closeButton} onClick={onClose} aria-label="Close">
              ×
            </button>
            
            <h2 className={styles.modalTitle}>Start the Process</h2>
            <p className={styles.modalSubtitle}>Let's discuss how we can transform your challenge into a clear solution.</p>
            
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Your name"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={styles.textarea}
                  placeholder="Tell me about your challenge..."
                />
              </div>
              
              {/* Honeypot field - hidden from users, helps prevent spam */}
              <input
                type="checkbox"
                name="botcheck"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />
              
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={styles.successMessage}
                >
                  Message sent successfully!
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={styles.errorMessage}
                >
                  {errorMessage || 'Something went wrong. Please try again.'}
                </motion.div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

