import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Product } from '../../../types/product'
import { client } from '@/sanity/lib/client'
import { six } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

const Leatest = () => {
  const [product, setProduct] = useState<Product[]>([])

  useEffect(() => {
    async function fetchproduct() {
      const fetchedProduct: Product[] = await client.fetch(six)
      setProduct(fetchedProduct)
    }
    fetchproduct()
  }, [])

  return (
    <div className="flex flex-col items-center space-y-16 p-4">
      <h2 className="text-4xl font-bold text-blue-900">Leatest Products</h2>

      {/* Navigation Tabs */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 font-medium text-lg">
        <Link href={"/"}> 
          <li className="text-pink-500 hover:text-blue-900 transition-all duration-300 underline">New Arrival</li>
        </Link>
        <Link href={"/"}>
          <li className="text-blue-900 hover:text-pink-500 transition-all duration-300">Best Seller</li>
        </Link>
        <Link href={"/"}>
          <li className="text-blue-900 hover:text-pink-500 transition-all duration-300">Featured</li>
        </Link>
        <Link href={"/"}> 
          <li className="text-blue-900 hover:text-pink-500 transition-all duration-300">Special Offer</li>
        </Link>
      </ul>

      {/* Correct Grid Placement */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {product.map((product) => (
          <div key={product._id} className="flex flex-col shadow-md hover:shadow-xl transition duration-300 p-4">
            <Link href={`/product/${product.slug?.current || ''}`}>
            <div className="w-full p-5 bg-gray-100">
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={200}
                  height={200}
                  className='object-cover rounded-md w-36 sm:w-30 md:w-60 lg:w-full'
                />
              )}
            </div>
            <div className="flex flex-col items-center mt-4">
              <h1 className="text-lg font-semibold text-blue-800">{product.name}</h1>
              <div className="flex items-center space-x-2">
                <p className="text-blue-800 font-semibold text-lg">{product.price}</p>
                <p className="text-red-500 line-through font-semibold text-base">{product.oldPrice}</p>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Leatest
