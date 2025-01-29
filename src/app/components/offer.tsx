import React from 'react'
import Image from 'next/image'

const Offer = () => {
  return (
    <div>
        <div className="flex flex-col items-center space-y-16 p-4">
                  <h1 className="text-4xl font-bold text-blue-900">What Shopex Offer!</h1>
                  <div className="grid grid-col-1 md:grid-col-2 lg:col-4">
                    <div className="flex gap-14 mt-16">
                    <div className="flex flex-col items-center text-center space-y-3 p-8 w-64 h-72 bg-white shadow-lg">
                      {/* <img src="free-delivery 1.png"/> */}
                      <Image
                      src="/free-delivery 1.png"
                      alt="free-delivery 1.png"
                      width={60}
                      height={100}
                      />
                      <h2 className="text-xl font-bold text-blue-800">24/7 Support</h2>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                      </p>
                   </div>
                   <div className="flex flex-col items-center text-center space-y-3 p-8 w-64 h-72 bg-white shadow-lg">
                      {/* <img src="cashback 1.png"/> */}
                      <Image
                      src="/cashback 1.png"
                      alt="cashback 1.png"
                      width={60}
                      height={100}
                      />
                      <h2 className="text-xl font-bold text-blue-800">24/7 Support</h2>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                      </p>
                   </div>
                   <div className="flex flex-col items-center text-center space-y-3 p-8 w-64 h-72 bg-white shadow-lg">
                      {/* <img src="Group.png"/> */}
                      <Image
                      src="/Group.png"
                      alt="Group.png"
                      width={50}
                      height={100}
                      />
                      <h2 className="text-xl font-bold text-blue-800">24/7 Support</h2>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                      </p>
                   </div>
                   <div className="flex flex-col items-center text-center space-y-3 p-8 w-64 h-72 bg-white shadow-lg">
                      {/* <img src="Group 1.png"/> */}
                      <Image
                      src="/Group 1.png"
                      alt="Group 1.png"
                      width={50}
                      height={100}
                      />
                      <h2 className="text-xl font-bold text-blue-800">24/7 Support</h2>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                      </p>
                   </div>
                   </div>
                  </div>
                </div>
    </div>
  )
}

export default Offer