import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Leatest = () => {
  return (
    <div>
    <div className="flex flex-col items-center space-y-16 p-4">
    <h2 className="text-4xl font-bold text-blue-900">Leatest Products</h2>
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 font-medium text-lg">
    <Link href={"/"}> <li className="text-pink-500 hover:text-blue-900 transition-all duration-300 underline">New Arrival</li></Link>
    <Link href={"/"}><li className="text-blue-900 hover:text-pink-500 transition-all duration-300">Best Seller</li></Link>
    <Link href={"/"}><li className="text-blue-900 hover:text-pink-500 transition-all duration-300">Featured</li></Link>
    <Link href={"/"}> <li className="text-blue-900 hover:text-pink-500 transition-all duration-300">Special Offer</li></Link>
    </ul>
    <div className="flex grid-col-1 md:grid-cols-2 lg:grid-colos-3 gap-14">
     <div>
     <div className="w-80 h-auto p-5 bg-gray-100">
        {/* <img className="w-60" src="image 1166.png"/> */}
        <Image 
        src="/image 1166.png"
        alt="image 1166.png"
        width={230}
        height={150}
        />
      </div>
      <div className="flex items-center justify-between">
         <h1 className="text-lg font-semibold text-blue-800 shadow-md">Comfort Handy Craft</h1>
             <div className="flex items-center space-x-2">
              <p className="text-blue-800 font-semibold text-lg">$42.00</p>
              <p className="text-red-500 line-through font-semibold text-base">$65.00</p>
            </div>
      </div>
     </div>
     <div>
        {/* <img src="Frame 1.png"/> */}
        <Image 
          src="/Frame 1.png"
          alt="Frame 1.png"
          width={370}
          height={150}
          />
      <div className="flex items-center justify-between">
         <h1 className="text-lg font-semibold text-blue-800 shadow-md">Comfort Handy Craft</h1>
             <div className="flex items-center space-x-2">
              <p className="text-blue-800 font-semibold text-lg">$42.00</p>
              <p className="text-red-500 line-through font-semibold text-base">$65.00</p>
            </div>
      </div>
     </div>
     <div>
     <div className="w-80 h-auto p-5 bg-gray-100">
        {/* <img className="w-60" src="image 1168.png"/> */}
        <Image 
          src="/image 1168.png"
          alt="image 1168.png"
          width={230}
          height={150}
          />
      </div>
      <div className="flex items-center justify-between">
         <h1 className="text-lg font-semibold text-blue-800 shadow-md">Comfort Handy Craft</h1>
             <div className="flex items-center space-x-2">
              <p className="text-blue-800 font-semibold text-lg">$42.00</p>
              <p className="text-red-500 line-through font-semibold text-base">$65.00</p>
            </div>
      </div>
     </div>
    </div>
    <div className="flex grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
    <div>
     <div className="w-80 h-auto p-5 bg-gray-100">
        {/* <img className="w-60" src="image 23.png"/> */}
        <Image 
          src="/image 23.png"
          alt="image 23.png"
          width={240}
          height={150}
          />
      </div>
      <div className="flex items-center justify-between">
         <h1 className="text-lg font-semibold text-blue-800 shadow-md">Comfort Handy Craft</h1>
             <div className="flex items-center space-x-2">
              <p className="text-blue-800 font-semibold text-lg">$42.00</p>
              <p className="text-red-500 line-through font-semibold text-base">$65.00</p>
            </div>
      </div>
     </div>
     <div>
     <div className="w-80 h-72 p-5 bg-gray-100">
        {/* <img className="w-60 mt-12" src="image.png"/> */}
        <Image 
         className="mt-8 "
          src="/image.png"
          alt="image.png"
          width={250}
          height={150}
          />
      </div>
      <div className="flex items-center justify-between">
         <h1 className="text-lg font-semibold text-blue-800 shadow-md">Comfort Handy Craft</h1>
             <div className="flex items-center space-x-2">
              <p className="text-blue-800 font-semibold text-lg">$42.00</p>
              <p className="text-red-500 line-through font-semibold text-base">$65.00</p>
            </div>
      </div>
     </div>
     <div>
     <div className="w-80 h-72 p-5 bg-gray-100">
        {/* <img className="w-60 mt-14" src="image 3.png"/> */}
        <Image 
         className="mt-14 "
          src="/image 3.png"
          alt="image 3.png"
          width={260}
          height={150}
          />
      </div>
      <div className="flex items-center justify-between">
         <h1 className="text-lg font-semibold text-blue-800 shadow-md">Comfort Handy Craft</h1>
             <div className="flex items-center space-x-2">
              <p className="text-blue-800 font-semibold text-lg">$42.00</p>
              <p className="text-red-500 line-through font-semibold text-base">$65.00</p>
            </div>
      </div>
     </div>
    </div>
  </div>
  </div>
  )
}

export default Leatest



