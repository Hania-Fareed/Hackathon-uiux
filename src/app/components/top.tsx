import React from 'react'
import Image from 'next/image'

const Top = () => {
  return (
    <div>
        <div className="flex flex-col items-center space-y-16 p-4">
          <h1 className="text-4xl mt-12 font-bold text-blue-900 text-center">Top Categories</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Image
            src="/Top catagories 01.png"
            alt="Top Categories"
            width={300}
            height={350}
            />
             <Image
            src="/Top catagories.png"
            alt="Top Categories"
            width={300}
            height={350}
            />
             <Image
            src="/Top catagories 02.png"
            alt="Top Categories"
            width={300}
            height={350}
            />
             <Image
            src="/Top catagories 03.png"
            alt="Top Categories"
            width={300}
            height={350}
            />
          </div>
          <Image
          src="/promotional page nav 1.png"
          alt="Image 1163"
          width={70}
          height={100}
          />
        </div>
    </div>
  )
}

export default Top