import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Product } from '../../../types/product'
import { client } from '@/sanity/lib/client'
import { sofa } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import Swal from 'sweetalert2'
import { addToCart } from '../actions/actions'

const Unique = () => {
  const [product, setProduct] = useState<Product[]>([])

  useEffect(() => {
    async function fetchproduct() {
      const fetchedProduct: Product[] = await client.fetch(sofa)
      setProduct(fetchedProduct)
    }
    fetchproduct()
  }, [])

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault()
    Swal.fire({
      title: `${product.name}`,
      text: "Thanks for Add to Cart!",
      icon: "success",
      timer: 1000
    })
    addToCart(product)
  }

  return (
    <div className="bg-purple-50 p-8">
      {product.map((product) => (
        <div key={product._id} className="max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          
          {/* Image Section */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <div className="absolute bg-pink-200 rounded-full w-72 h-72 -z-10 top-10 left-10"></div>
            <Link href={`/product/${product.slug?.current || ''}`}>
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={600}
                  height={300}
                  className="relative z-10 rounded-lg"
                />
              )}
            </Link>
          </div>

          {/* Content Section */}
          <div className="space-y-4 text-gray-700 flex-1">
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
              <button
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg 
                hover:scale-110 transition-transform duration-300 ease-in-out mt-3"
                onClick={(e) => handleAddToCart(e, product)}
              >
                Add To Cart
              </button>
              <div>
                <h2 className="font-bold text-blue-900">{product.name}</h2>
                <p className="text-gray-500">${product.price}</p>
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}

export default Unique
