// src/sections/VisionMission.tsx
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Eye } from 'lucide-react'

const VisionMission: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="vision-mission" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Vision & Mission
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <Eye className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white ml-4">
                  Vision
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Menjadi brand kuliner terdepan yang dikenal inovatif dalam menciptakan 
                pengalaman rasa kombinasi yang unik dan berkualitas, dengan komitmen 
                untuk memuaskan selera konsumen melalui produk-produk terbaik.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <Target className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white ml-4">
                  Mission
                </h3>
              </div>
              <ul className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed space-y-3">
                <li>• Mengembangkan produk kuliner inovatif dengan kombinasi rasa unik</li>
                <li>• Menjaga kualitas dan konsistensi rasa dalam setiap produk</li>
                <li>• Memberikan pelayanan terbaik kepada konsumen</li>
                <li>• Berkomitmen pada kebersihan dan keamanan pangan</li>
                <li>• Menjangkau pasar yang lebih luas melalui strategi pemasaran efektif</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default VisionMission