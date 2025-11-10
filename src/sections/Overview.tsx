// src/sections/Overview.tsx
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Overview: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="overview" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Business Overview
          </h2>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              3Vours merupakan brand UMKM yang bergerak di bidang kuliner dengan konsep 
              "Three Flavours Experience: Pedas, Segar, Manis". Brand ini menawarkan 
              pengalaman rasa yang unik dan berkesan melalui tiga varian produk utama 
              yang saling melengkapi.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-6">
              Latar belakang berdirinya 3Vours didasari oleh observasi terhadap tren 
              kuliner di kalangan mahasiswa dan masyarakat umum yang menginginkan 
              variasi rasa dalam satu kemasan. Dengan memadukan tiga sensasi rasa 
              berbeda - pedas (Bakso Mercon), segar (Mocktail), dan manis (Stuffed 
              Dessert Roti) - 3Vours hadir sebagai solusi bagi mereka yang ingin 
              menikmati pengalaman kuliner yang lengkap dan memuaskan.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-6">
              Bisnis ini dimulai dengan target pasar utama mahasiswa dan karyawan 
              muda di sekitar kampus dan area perkantoran. Dengan positioning sebagai 
              penyedia makanan dan minuman yang praktis, berkualitas, dan dengan harga 
              terjangkau, 3Vours berkomitmen untuk memberikan kepuasan maksimal 
              kepada konsumen melalui inovasi rasa dan pelayanan terbaik.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Overview