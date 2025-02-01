"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { Product } from '../../../types/product';
import { client } from '@/sanity/lib/client';
import { four } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
const Featured = () => {

  const [product, setProduct] = useState<Product[]>([])

  useEffect(() => {
      async function fetchproduct() {
          const fetchedProduct : Product[] = await client.fetch(four) 
          setProduct(fetchedProduct)
      }
      fetchproduct()
  },[])
  return (
    <div className="flex flex-col items-center space-y-16 p-4">
  {/* Heading */}
  <h1 className="text-4xl mt-12 font-bold text-blue-900">Featured Products</h1>

  {/* Grid Container yahan hona chahiye */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
    {product.map((product) => (
      <div key={product._id} className="flex flex-col shadow-md hover:shadow-xl transition duration-300">
        <Link href={`/product/${product.slug?.current || ''}`}>
        <div className="w-64 h-60 bg-gray-100 flex items-center justify-center">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={200}
              height={200}
              className='object-cover rounded-md w-24 sm:w-30 md:w-60 lg:w-full'
            />
          )}
        </div>
        <div className="w-64 h-36 bg-white p-4">
          <h1 className="text-lg text-pink-500 font-semibold text-center">
            {product.name}
          </h1>
          <Image 
            className="mx-auto mt-2"
            src="/Group 141.png"
            alt="image"
            width={49}
            height={32}
          />
          <p className="text-blue-900 font-medium text-sm text-center mt-2">
            Code - Y523201
          </p>
          <p className="text-blue-900 font-medium text-sm text-center mt-2">
            ${product.price}
          </p>
        </div>
        </Link>
      </div>
    ))}
  </div>
  
  <Image 
    src="/Group 169.png"
    alt="images"
    width={100}
    height={300}
  />
</div>

  );
}

export default Featured