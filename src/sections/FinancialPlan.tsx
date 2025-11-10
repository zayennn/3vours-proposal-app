// src/sections/FinancialPlan.tsx
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const FinancialPlan: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const financialData = {
    initialInvestment: [
      { item: 'Perlengkapan Dapur', cost: 'Rp 500.000' },
      { item: 'Bahan Baku Awal', cost: 'Rp 800.000' },
      { item: 'Packaging', cost: 'Rp 300.000' },
      { item: 'Marketing', cost: 'Rp 400.000' },
      { item: 'Total', cost: 'Rp 2.000.000', highlight: true }
    ],
    productionCost: [
      { item: 'Bakso Mercon (per porsi)', cost: 'Rp 8.000' },
      { item: 'Mocktail (per cup)', cost: 'Rp 4.000' },
      { item: 'Dessert Roti (per pcs)', cost: 'Rp 3.500' }
    ],
    sellingPrice: [
      { item: 'Bakso Mercon', price: 'Rp 15.000' },
      { item: 'Mocktail', price: 'Rp 8.000' },
      { item: 'Dessert Roti', price: 'Rp 7.000' }
    ],
    profitCalculation: [
      { item: 'Pendapatan Harian (est)', amount: 'Rp 300.000' },
      { item: 'Biaya Produksi Harian', amount: 'Rp 150.000' },
      { item: 'Laba Kotor Harian', amount: 'Rp 150.000', highlight: true },
      { item: 'Laba Bulanan (25 hari)', amount: 'Rp 3.750.000', highlight: true }
    ],
    bepCalculation: [
      { item: 'Fixed Cost Bulanan', amount: 'Rp 1.000.000' },
      { item: 'Average Price', amount: 'Rp 10.000' },
      { item: 'Average Variable Cost', amount: 'Rp 5.000' },
      { item: 'Contribution Margin', amount: 'Rp 5.000' },
      { item: 'BEP (Units)', amount: '200 units', highlight: true },
      { item: 'BEP (Rupiah)', amount: 'Rp 2.000.000', highlight: true }
    ]
  }

  const Table = ({ title, data, columns }: { title: string, data: any[], columns: string[] }) => (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              {columns.map((column, index) => (
                <th key={index} className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={row.highlight ? 'bg-primary-50 dark:bg-primary-900' : ''}>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">
                  {row.item}
                </td>
                <td className={`border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium ${
                  row.highlight ? 'text-primary-600 dark:text-primary-400 font-bold' : 'text-gray-700 dark:text-gray-300'
                }`}>
                  {row.cost || row.price || row.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  return (
    <section id="financial-plan" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Financial Plan
          </h2>
          
          <div className="space-y-8">
            <Table 
              title="Initial Investment" 
              data={financialData.initialInvestment} 
              columns={['Item', 'Cost']} 
            />
            
            <Table 
              title="Production Cost per Unit" 
              data={financialData.productionCost} 
              columns={['Product', 'Cost']} 
            />
            
            <Table 
              title="Selling Price" 
              data={financialData.sellingPrice} 
              columns={['Product', 'Price']} 
            />
            
            <Table 
              title="Profit Calculation" 
              data={financialData.profitCalculation} 
              columns={['Description', 'Amount']} 
            />
            
            <Table 
              title="Break-Even Point Analysis" 
              data={financialData.bepCalculation} 
              columns={['Component', 'Value']} 
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 p-6 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl text-center text-white"
          >
            <h3 className="text-2xl font-bold mb-2">Total Estimated Monthly Profit</h3>
            <p className="text-4xl font-bold">Rp 3.750.000</p>
            <p className="mt-2 opacity-90">After accounting for all operational costs</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinancialPlan