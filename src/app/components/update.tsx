import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Update = () => {
  return (
    <div>
        <div className="relative">
  {/* Background Image */}
  <Image
    src="/Rectangle 102.png"
    alt="Background"
    width={3000}
    height={100}
    className="w-full h-auto"
  />

  {/* Overlay Text */}
  <div className="absolute inset-0 flex flex-col justify-center items-center space-y-8">
    <h1 className="text-blue-900 text-4xl font-bold">
      Get Leatest Update By Subscribe
    </h1>
    <p className="text-blue-900 text-4xl font-bold">
      Our Newsletter
    </p>
    {/* Button */}
    <Link href={"/shop-list"}>
    <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadw-lg 
                     hover:scale-110 transition-transform duration-300 ease-in-out mt-3">
      Shop Now
    </button>
    </Link>
  </div>
</div>
    </div>
  )
}

export default Update