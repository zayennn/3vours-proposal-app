// src/sections/Products.tsx
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Flame, Citrus, Dessert } from 'lucide-react'

const Products: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const products = [
    {
      name: 'Bakso Mercon',
      description: 'Bakso daging sapi berkualitas dengan isian cabai rawit yang meledak di mulut, memberikan sensasi pedas yang menggugah selera. Dibuat dengan bahan-bahan pilihan dan bumbu rahasia yang membuatnya istimewa.',
      icon: Flame,
      color: 'red'
    },
    {
      name: 'Non-Alcoholic Mocktail',
      description: 'Minuman segar tanpa alkohol dengan perpaduan buah-buahan fresh dan soda. Tersedia dalam berbagai varian rasa yang menyegarkan, cocok untuk menemani makanan pedas atau dinikmati sendiri.',
      icon: Citrus,
      color: 'green'
    },
    {
      name: 'Stuffed Dessert Roti',
      description: 'Roti lembut dengan berbagai isian dessert yang manis dan lezat. Tersedia pilihan isian seperti coklat, keju, green tea, dan red velvet. Perfect untuk pencinta manis.',
      icon: Dessert,
      color: 'yellow'
    }
  ]

  const colorClasses = {
    red: 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400',
    green: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400',
    yellow: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400'
  }

  return (
    <section id="products" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Our Products
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className={`w-16 h-16 rounded-2xl ${colorClasses[product.color as keyof typeof colorClasses]} flex items-center justify-center mb-6`}>
                  <product.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-6 h-48 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Product Image</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Products