import React from 'react'
import Image from 'next/image'

const Trending = () => {
  return (
    <div>
        {/* Trending Product */}
        <div className="flex flex-col items-center space-y-16 p-4">
          <h1 className="text-4xl mt-12 font-bold text-blue-900">Trending Products</h1>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "image 1171.png",
            "image 1170.png",
            "image 31.png",
            "image.png",
          ].map((image, index) => (
            <div key={index} className="w-80 h-96 bg-white shadow-lg mx-auto">
              <div className="flex justify-center items-center w-64 h-60 bg-gray-100 mx-auto mt-8">
                <Image
                  className="p-4"
                  src={`/${image}`} // Adjust the path if needed
                  alt={`Product ${index + 1}`}
                  width={256} // Provide width (w-64 in Tailwind = 16rem = 256px)
                  height={240} // Provide height (h-60 in Tailwind = 15rem = 240px)
                />
              </div>
              <h1 className="text-xl text-blue-900 p-4 font-semibold text-center">
                Cantilever chair
              </h1>
              <p className="text-center text-base font-semibold text-blue-900">
                $26.00{" "}
                <span className="text-slate-300 ml-3 text-sm line-through">
                  $42.00
                </span>
              </p>
            </div>
          ))}
        </div>
        
        
          {/* Promotional Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Box 1 */}
            <div className="relative w-[440px] h-[410px] bg-[#FFF6FB] shadow-lg p-6">
              <h1 className="text-3xl font-semibold text-blue-900 mt-5">23% off in all products</h1>
              <a
                href="/"
                className="inline-block mt-3 font-semibold text-[#FB2E86] underline"
              >
                Shop Now
              </a>
              {/* <img
                className="ml-48 mt-12"
                src="image 1162.png"
                alt="Product"
              /> */}
              <Image
              className="ml-28 w-80 -mt-5"
              src="/image 1162.png"
              alt="Product"
              width={430}
              height={300}
              />
            </div>
        
            {/* Box 2 */}
            <div className="relative w-[440px] h-[415x] bg-[#EEEFFB] shadow-lg p-6">
              <h1 className="text-3xl font-semibold text-blue-900 mt-5">23% off in all products</h1>
              <a
                href="/"
                className="inline-block mt-3 font-semibold text-[#FB2E86] underline"
              >
                View Collection
              </a>
              {/* <img
                className="ml-10 mt-14"
                src="image 1161.png"
                alt="Product"
              /> */}
              <Image
              className="ml- mt-14"
              src="/image 1161.png"
              alt="Product"
              width={430}
              height={415}
              />
            </div>
        
            {/* Box 3 */}
            <div className="flex flex-col space-y-4">
              {/* First Vertical Box */}
              <div className="flex shadow-lg">
                <div className="flex items-center justify-center w-32 h-32 bg-gray-100">
                  {/* <img src="image 30.png" alt="Chair 1" className="w-16" /> */}
                  <Image
                  src="/image 30.png"
                  alt="Chair 1"
                  width={55}
                  height={32}
                  />
                </div>
                <div className="flex mt-10 flex-1 bg-white px-4">
                  <p className="text-blue-900 font-bold">Executive Seat chair</p>
                  <p className="text-blue-900 mt-6 -ml-40 text-sm font-semibold line-through">$32.00</p>
                </div>
              </div>
        
              {/* Second Vertical Box */}
              <div className="flex shadow-lg">
                <div className="flex items-center justify-center w-32 h-32 bg-gray-100">
                  {/* <img src="image 19.png" alt="Chair 2" className="w-16" /> */}
                  <Image
                  src="/image 19.png"
                  alt="Chair 2"
                  width={55}
                  height={32}
                  />
                </div>
                <div className="flex mt-10 flex-1 bg-white px-4">
                  <p className="text-blue-900 font-bold">Executive Seat chair</p>
                  <p className="text-blue-900 mt-6 -ml-40 text-sm font-semibold line-through">$32.00</p>
                </div>
              </div>
        
              {/* Third Vertical Box */}
              <div className="flex shadow-lg">
                <div className="flex items-center justify-center w-32 h-32 bg-gray-100">
                  {/* <img src="image 28.png" alt="Chair 3" className="w-16" /> */}
                  <Image
                  src="/image 28.png"
                  alt="Chair 3"
                  width={55}
                  height={32}
                  />
                </div>
                <div className="flex mt-10 flex-1 bg-white px-4">
                  <p className="text-blue-900 font-bold">Executive Seat chair</p>
                  <p className="text-blue-900 mt-6 -ml-40 text-sm font-semibold line-through">$32.00</p>
                </div>
              </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Trending