// src/sections/Organization.tsx
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Crown, Users, Target, BarChart3 } from 'lucide-react'

const Organization: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const teamRoles = [
    {
      role: 'CEO & Founder',
      description: 'Bertanggung jawab atas overall strategi bisnis, pengambilan keputusan utama, dan memimpin tim menuju visi perusahaan. Mengawasi semua operasional dan memastikan alignment dengan tujuan bisnis.',
      icon: Crown
    },
    {
      role: 'Head of Production',
      description: 'Mengelola proses produksi, memastikan kualitas produk, mengembangkan resep baru, dan mengoptimalkan efisiensi produksi. Bertanggung jawab atas standar kualitas dan konsistensi rasa.',
      icon: Users
    },
    {
      role: 'Marketing Manager',
      description: 'Mengembangkan dan melaksanakan strategi pemasaran, mengelola brand presence, melakukan market research, dan menangani promosi serta hubungan dengan konsumen.',
      icon: Target
    },
    {
      role: 'Finance & Operations',
      description: 'Mengelola keuangan perusahaan, pembukuan, analisis biaya, dan operasional harian. Bertanggung jawab atas pengelolaan cash flow dan laporan keuangan.',
      icon: BarChart3
    }
  ]

  return (
    <section id="organization" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Organization Structure
          </h2>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-gray-600 dark:text-gray-300 text-center text-lg leading-relaxed">
              Struktur organisasi 3Vours dirancang dengan pembagian tugas yang jelas 
              untuk memastikan efisiensi operasional dan akuntabilitas. Setiap anggota 
              tim memiliki peran dan tanggung jawab spesifik yang saling melengkapi 
              dalam mencapai tujuan perusahaan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamRoles.map((role, index) => (
              <motion.div
                key={role.role}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                  <role.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {role.role}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {role.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Organization