'use client'

import Modal from '@/components/Modal'
import { useEffect, useState } from 'react'

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Modal
      title="Test Modal"
      description="This is a test!"
      isOpen
      onChange={() => {}}
    >
      Test Children
    </Modal>
  )
}

export default ModalProvider
