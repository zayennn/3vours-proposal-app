import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const SalesReport: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const salesData = {
    batch1: [
      { product: 'Bakso Mercon', sold: 45, revenue: 'Rp 675.000' },
      { product: 'Mocktail', sold: 60, revenue: 'Rp 480.000' },
      { product: 'Dessert Roti', sold: 50, revenue: 'Rp 350.000' },
      { total: true, product: 'Total Batch 1', sold: 155, revenue: 'Rp 1.505.000', highlight: true }
    ],
    batch2: [
      { product: 'Bakso Mercon', sold: 55, revenue: 'Rp 825.000' },
      { product: 'Mocktail', sold: 70, revenue: 'Rp 560.000' },
      { product: 'Dessert Roti', sold: 65, revenue: 'Rp 455.000' },
      { total: true, product: 'Total Batch 2', sold: 190, revenue: 'Rp 1.840.000', highlight: true }
    ]
  }

  const SalesTable = ({ title, data }: { title: string, data: any[] }) => (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">
                Product
              </th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">
                Units Sold
              </th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">
                Revenue
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={row.highlight ? 'bg-primary-50 dark:bg-primary-900' : ''}>
                <td className={`border border-gray-300 dark:border-gray-600 px-4 py-2 ${
                  row.highlight ? 'font-bold text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'
                }`}>
                  {row.product}
                </td>
                <td className={`border border-gray-300 dark:border-gray-600 px-4 py-2 ${
                  row.highlight ? 'font-bold text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'
                }`}>
                  {row.sold}
                </td>
                <td className={`border border-gray-300 dark:border-gray-600 px-4 py-2 ${
                  row.highlight ? 'font-bold text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'
                }`}>
                  {row.revenue}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  return (
    <section id="sales-report" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Sales Report
          </h2>
          
          <div className="space-y-8">
            <SalesTable title="Batch 1 Sales" data={salesData.batch1} />
            <SalesTable title="Batch 2 Sales" data={salesData.batch2} />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 grid md:grid-cols-2 gap-6"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Total Units Sold</h3>
              <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">345 units</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Total Revenue</h3>
              <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">Rp 3.345.000</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SalesReport