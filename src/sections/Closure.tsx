import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Closure: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="closure" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Conclusion
          </h2>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              Berdasarkan analisis yang telah dilakukan, 3Vours memiliki potensi bisnis 
              yang sangat menjanjikan di industri kuliner. Dengan konsep unik "Three 
              Flavours Experience" yang menggabungkan tiga sensasi rasa berbeda dalam 
              satu brand, 3Vours mampu memenuhi kebutuhan pasar akan variasi kuliner 
              yang inovatif dan berkualitas.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mt-6">
              Dukungan dari laporan keuangan yang sehat, strategi pemasaran yang efektif, 
              serta tim yang berkompeten menjadi fondasi kuat bagi kesuksesan bisnis ini. 
              Dengan terus berkomitmen pada kualitas, inovasi, dan pelayanan terbaik, 
              3Vours siap untuk berkembang menjadi brand kuliner yang dikenal dan 
              diminati oleh masyarakat luas.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mt-6 font-semibold">
              Kami yakin bahwa 3Vours tidak hanya akan sukses secara komersial, tetapi 
              juga akan memberikan kontribusi positif dalam memajukan industri kuliner 
              lokal dengan menghadirkan pengalaman rasa yang unik dan berkesan.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 p-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Taste the Experience?</h3>
            <p className="text-lg opacity-90">
              Join us in this exciting culinary journey and experience the unique combination 
              of Pedas, Segar, and Manis flavors that will tantalize your taste buds.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Closure