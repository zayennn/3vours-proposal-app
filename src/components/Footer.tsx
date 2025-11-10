// src/components/Footer.tsx
import React from 'react'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4"
          >
            3Vours
          </motion.div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Three Flavours Experience: Pedas, Segar, Manis
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © 2024 3Vours. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer