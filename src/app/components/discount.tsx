import React from 'react'
import Image from 'next/image'

const Discount = () => {
  return (
    <div>
        <div className="flex flex-col items-center space-y-16 p-4">
          {/* Heading */}
          <h1 className="text-4xl mt-12 font-bold text-blue-900 text-center">Discount Item</h1>
        
          {/* Navigation Links */}
          <ul className="flex font-medium text-lg text-blue-900 gap-5">
            <li className="text-pink-500 underline">Wood Chair</li>
            <li className="w-2 h-2 bg-pink-500 rounded-full mt-3"></li>
            <li>Plastic Chair</li>
            <li>Sofa Collection</li>
          </ul>
        
          {/* Discount Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl">
            {/* Text Section */}
            <div className="flex-1">
              <h1 className="text-4xl font-semibold text-blue-900">20% Discount on All Products</h1>
              <p className="text-pink-500 text-lg mt-4">Eames Sofa Compact</p>
        
              {/* Description */}
              <p className="text-slate-300 mt-4 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget<br />
                feugiat habitasse nec, bibendum condimentum.
              </p>
        
              {/* Features Section */}
              <div className="text-slate-300 mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <p>Material exposed like metals</p>
                <p>Clear lines and geometric figures</p>
                <p>Simple neutral colors</p>
                <p>Durable material choices</p>
              </div>
        
              {/* Button */}
              <button className="mt-8 w-52 h-14 bg-pink-500 text-white font-light rounded-sm hover:bg-pink-600">
                Shop Now
              </button>
            </div>
        
            <div className="relative flex justify-center items-center">
          {/* Background Circle */}
          <div className="absolute w-96 h-96 rounded-full bg-pink-50"></div>
        
          {/* Chair Image */}
          <div className="relative">
            <Image
              src="/tortuga-01-b 1.png"
              alt="Chair"
              width={580}
              height={240}
            />
          </div>
        </div>
        
          </div>
    </div>
    </div>
  )
}

export default Discount