import React from 'react'
import Image from 'next/image'

const Unique = () => {
  return (
    <div>
        <div className="bg-purple-50 p-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        
            <div className="relative">
              <div className="absolute bg-pink-200 rounded-full w-72 h-72 -z-10 top-10 left-10"></div>
              {/* <img src="Group 153.png" alt="Sofa" className="relative z-10 rounded-lg"/> */}
              <Image
                className="relative z-10 rounded-lg"
                src="/Group 153.png"
                alt="Sofa"
                width={600}
                height={300}
              />
            </div>
            <div className="space-y-4 text-gray-700">
              <h1 className="text-3xl font-bold text-blue-900">
                Unique Features Of Latest &amp; Trending Products
              </h1>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-pink-500">●</span>
                  <p>All frames constructed with hardwood solids and laminates</p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500">●</span>
                  <p>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-400">●</span>
                  <p>Arms, backs and seats are structurally reinforced</p>
                </li>
              </ul>
        
              {/* Button and Price */}
              <div className="flex items-center space-x-4">
                <button className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow hover:bg-pink-600">
                  Add To Cart
                </button>
                <div>
                  <h2 className="font-bold text-blue-900">B&amp;B Italian Sofa</h2>
                  <p className="text-gray-500">$32.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Unique