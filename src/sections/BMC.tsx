// src/sections/BMC.tsx
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const BMC: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const bmcItems = [
    {
      category: 'Key Partners',
      items: [
        'Pemasok bahan baku lokal',
        'Mitra delivery service',
        'Penyedia packaging',
        'Influencer kuliner'
      ]
    },
    {
      category: 'Key Activities',
      items: [
        'Produksi makanan & minuman',
        'Pengembangan produk baru',
        'Pemasaran dan promosi',
        'Customer service'
      ]
    },
    {
      category: 'Key Resources',
      items: [
        'Resep rahasia',
        'Perlengkapan dapur',
        'Tim produksi',
        'Brand identity'
      ]
    },
    {
      category: 'Value Proposition',
      items: [
        'Kombinasi rasa unik 3-in-1',
        'Kualitas premium harga terjangkau',
        'Pengalaman kuliner berkesan',
        'Produk praktis dan higienis'
      ]
    },
    {
      category: 'Customer Relationship',
      items: [
        'Layanan responsif',
        'Feedback collection',
        'Loyalty program',
        'Social media engagement'
      ]
    },
    {
      category: 'Channels',
      items: [
        'Social media (Instagram, TikTok)',
        'Online food delivery',
        'Direct sales',
        'Event participation'
      ]
    },
    {
      category: 'Customer Segments',
      items: [
        'Mahasiswa',
        'Karyawan muda',
        'Pencinta kuliner',
        'Masyarakat urban'
      ]
    },
    {
      category: 'Cost Structure',
      items: [
        'Bahan baku',
        'Operasional produksi',
        'Pemasaran',
        'Packaging'
      ]
    },
    {
      category: 'Revenue Streams',
      items: [
        'Penjualan produk',
        'Bundle packages',
        'Catering orders',
        'Merchandise'
      ]
    }
  ]

  return (
    <section id="business-model" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Business Model Canvas
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bmcItems.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-lg font-bold text-primary-600 dark:text-primary-400 mb-4">
                  {item.category}
                </h3>
                <ul className="space-y-2">
                  {item.items.map((listItem, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      {listItem}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BMC