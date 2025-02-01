import React from 'react'
import Image from 'next/image'

const Offer = () => {
  return (
    <div className="flex flex-col items-center space-y-16 p-4 py-14">
      <h1 className="text-4xl font-bold text-blue-900 text-center">What Shopex Offer!</h1>

      {/* Corrected Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {/* Offer Box 1 */}
        <div className="flex flex-col items-center text-center space-y-3 p-6 w-full max-w-xs bg-white shadow-md rounded-lg hover:shadow-xl transition duration-300">
          <Image src="/free-delivery 1.png" alt="Free Delivery" width={60} height={100} />
          <h2 className="text-xl font-bold text-blue-800">Free Delivery</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
          </p>
        </div>

        {/* Offer Box 2 */}
        <div className="flex flex-col items-center text-center space-y-3 p-6 w-full max-w-xs bg-white shadow-md rounded-lg hover:shadow-xl transition duration-300">
          <Image src="/cashback 1.png" alt="Cashback" width={60} height={100} />
          <h2 className="text-xl font-bold text-blue-800">Cashback</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
          </p>
        </div>

        {/* Offer Box 3 */}
        <div className="flex flex-col items-center text-center space-y-3 p-6 w-full max-w-xs bg-white shadow-md rounded-lg hover:shadow-xl transition duration-300">
          <Image src="/Group.png" alt="Quality Product" width={50} height={100} />
          <h2 className="text-xl font-bold text-blue-800">Quality Product</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
          </p>
        </div>

        {/* Offer Box 4 */}
        <div className="flex flex-col items-center text-center space-y-3 p-6 w-full max-w-xs bg-white shadow-md rounded-lg hover:shadow-xl transition duration-300">
          <Image src="/Group 1.png" alt="24/7 Support" width={50} height={100} />
          <h2 className="text-xl font-bold text-blue-800">24/7 Support</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Offer
