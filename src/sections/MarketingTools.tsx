// src/sections/MarketingTools.tsx
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const MarketingTools: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const marketingItems = [
    { name: 'Logo Design', description: 'Brand identity utama dengan warna khas 3Vours' },
    { name: 'Sticker Pack', description: 'Sticker untuk packaging dan merchandise' },
    { name: 'Company Profile', description: 'Dokumen profil perusahaan yang profesional' },
    { name: 'Product Catalog', description: 'Katalog produk dengan foto dan deskripsi' },
    { name: 'Brochure', description: 'Brosur promosi untuk distribusi ke customer' },
    { name: 'X-Banner', description: 'Banner untuk event dan display toko' },
    { name: 'Product Name Cards', description: 'Kartu nama produk untuk display' }
  ]

  return (
    <section id="marketing-tools" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Marketing Tools
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center"
              >
                <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Image</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MarketingTools