import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react'

// images
import LogoDesign from '../assets/images/marketing-tools/Picture1.png'
import CompanyProfile from '../assets/images/marketing-tools/Picture2.jpg'
import ProductCatalog from '../assets/images/marketing-tools/Picture3.jpg'
import Brochure from '../assets/images/marketing-tools/Picture4.png'
import XBanner from '../assets/images/marketing-tools/Picture5.jpg'
import ProductNameCards from '../assets/images/marketing-tools/Picture6.jpg'

const MarketingTools: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const marketingItems = [
    { name: 'Logo Design', description: 'Brand identity utama dengan warna khas 3Vours', image: LogoDesign },
    { name: 'Sticker Pack', description: 'Sticker untuk packaging dan merchandise', image: LogoDesign },
    { name: 'Company Profile', description: 'Dokumen profil perusahaan yang profesional', image: CompanyProfile },
    { name: 'Product Catalog', description: 'Katalog produk dengan foto dan deskripsi', image: ProductCatalog },
    { name: 'Brochure', description: 'Brosur promosi untuk distribusi ke customer', image: Brochure },
    { name: 'X-Banner', description: 'Banner untuk event dan display toko', image: XBanner },
    { name: 'Product Name Cards', description: 'Kartu nama produk untuk display', image: ProductNameCards },
  ]

  const openModal = (index: number) => {
    setSelectedImage(index)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % marketingItems.length)
    }
  }

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + marketingItems.length) % marketingItems.length)
    }
  }

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return

      switch (e.key) {
        case 'Escape':
          closeModal()
          break
        case 'ArrowRight':
          goToNext()
          break
        case 'ArrowLeft':
          goToPrevious()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen, selectedImage])

  return (
    <>
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
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center group relative"
                >
                  <div className="relative w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => openModal(index)}
                      className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
                    >
                      <div className="bg-white/90 dark:bg-gray-800/90 rounded-full p-2 backdrop-blur-sm">
                        <ZoomIn className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </div>
                    </motion.button>
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

      <AnimatePresence>
        {isModalOpen && selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeModal}
                className="absolute -top-12 right-0 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm transition-colors duration-200"
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>

              {marketingItems.length > 1 && (
                <>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 backdrop-blur-sm transition-colors duration-200"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 backdrop-blur-sm transition-colors duration-200"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </motion.button>
                </>
              )}

              <div className="relative rounded-2xl overflow-hidden bg-gray-900">
                <img
                  src={marketingItems[selectedImage].image}
                  alt={marketingItems[selectedImage].name}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {marketingItems[selectedImage].name}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {marketingItems[selectedImage].description}
                  </p>
                </div>
              </div>

              {marketingItems.length > 1 && (
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                  <span className="text-white text-sm font-medium">
                    {selectedImage + 1} / {marketingItems.length}
                  </span>
                </div>
              )}
            </motion.div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
              <p className="text-gray-400 text-sm">
                Use ← → arrow keys to navigate • ESC to close
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MarketingTools