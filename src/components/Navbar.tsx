import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, Eye, Target, Utensils, Users, BarChart3, DollarSign, Image, TrendingUp, FileText, ChevronDown } from 'lucide-react'

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Overview', href: '#overview', icon: Eye },
    { name: 'Vision & Mission', href: '#vision-mission', icon: Target },
    { name: 'Products', href: '#products', icon: Utensils },
    { name: 'Organization', href: '#organization', icon: Users },
    { name: 'Business Model', href: '#business-model', icon: BarChart3 },
    { name: 'Financial Plan', href: '#financial-plan', icon: DollarSign },
    { name: 'Marketing Tools', href: '#marketing-tools', icon: Image },
    { name: 'Sales Report', href: '#sales-report', icon: TrendingUp },
    { name: 'Closure', href: '#closure', icon: FileText },
  ]

  // Split items: 5 utama + sisanya di dropdown
  const mainItems = navItems.slice(0, 5)
  const dropdownItems = navItems.slice(5)

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-800'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 text-2xl font-bold text-primary-600 dark:text-primary-400"
            >
              3Vours
            </motion.div>

            {/* Desktop Menu dengan Dropdown */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Main Items */}
              {mainItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex flex-col items-center p-2 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 rounded-lg min-w-[70px] group"
                  title={item.name}
                >
                  <item.icon className="w-4 h-4 mb-1" />
                  <span className="text-[10px] leading-tight text-center">
                    {item.name}
                  </span>
                  <div className="w-0 group-hover:w-full h-0.5 bg-primary-600 dark:bg-primary-400 transition-all duration-200" />
                </motion.a>
              ))}
              
              {/* Dropdown untuk items tambahan */}
              {dropdownItems.length > 0 && (
                <div className="relative" ref={dropdownRef}>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex flex-col items-center p-2 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 rounded-lg min-w-[70px] group"
                  >
                    <ChevronDown className="w-4 h-4 mb-1" />
                    <span className="text-[10px] leading-tight">More</span>
                    <div className="w-0 group-hover:w-full h-0.5 bg-primary-600 dark:bg-primary-400 transition-all duration-200" />
                  </motion.button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50"
                      >
                        {dropdownItems.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={() => {
                              setIsDropdownOpen(false)
                            }}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                          >
                            <item.icon className="w-4 h-4 mr-3" />
                            {item.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - SEMUA ITEM TAMPIL */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="max-h-[80vh] overflow-y-auto">
                <div className="px-4 py-3 space-y-1">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center py-3 px-4 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

export default Navbar