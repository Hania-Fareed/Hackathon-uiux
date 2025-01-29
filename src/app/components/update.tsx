import React from 'react'
import Image from 'next/image'

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
    <button className="mt-10 w-52 h-14 bg-pink-500 text-white font-light rounded-sm hover:bg-pink-600">
      Shop Now
    </button>
  </div>
</div>
    </div>
  )
}

export default Update