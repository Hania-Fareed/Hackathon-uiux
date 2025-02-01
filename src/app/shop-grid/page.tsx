"use client"
import React, { useEffect, useState } from 'react'
import { Product } from '../../../types/product'
import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { MdWindow } from "react-icons/md"
import { TfiMenuAlt } from "react-icons/tfi"
import { some } from '@/sanity/lib/queries'
import Link from 'next/link'
import Footer from '../components/footer'
import { addToCart } from '../actions/actions'
import Swal from 'sweetalert2'

const Shop = () => {
    const [product, setProduct] = useState<Product[]>([])

    useEffect(() => {
      async function fetchProduct() {
          const fetchedProduct: Product[] = await client.fetch(some);
          console.log("Fetched Products:", fetchedProduct); // Debugging
          setProduct(fetchedProduct);
      }
      fetchProduct();
  }, []);
  

    const handleAddToCart = (e: React.MouseEvent, product: Product) => {
      e.preventDefault()
      Swal.fire({
        title: `${product.name}`,
        text: "Thanks for Add to Cart!",
        icon: "success",
        timer: 1000
      });
      addToCart(product)
      
    }

  return (
    <div className='py-8'>
        <header className="relative w-[1900px] py-6 bg-[#E7E4F8]">
                 <div className="container mx-auto">
                    <h1 className="text-2xl font-bold text-blue-900">Shop Grid Default</h1>
                    <p className="text-sm text-black">
                        <Link href={"/"}>Home</Link>
                         . Pages
                         <Link href={"/"}> <span className="text-pink-500">. Shop Grid Default</span></Link>
                    </p>
                </div>
             </header>
             {/* Heading and Filters Section */}
             <div className="flex justify-between items-center py-28 px-10 max-w-7xl">
                {/* Heading */}
                 <div>
                     <h1 className="text-xl font-semibold text-blue-900">Ecommerce Accessories &amp; Fashion Items</h1>
                     <p className="mt-2 text-sm text-slate-400">About 9,620 results (0.62 seconds)</p>
                 </div>
                 {/* Filters */}
                 <div className="flex items-center gap-3">                     {/* Per Page */}
                     <div className="flex items-center space-x-2">
                         <label className="text-sm font-medium text-blue-900">Per Page:</label>
                         <div className="w-20 h-5 border"></div>
                    </div>
                    {/* Sort By */}
                    <div className="flex items-center space-x-2">
                         <label className="text-sm font-medium text-blue-900">Sort By:</label>
                         <select className="block text-xs text-slate-400 w-32 pl-3 pr-10 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                             <option>Best Match</option>
                             <option>Price: Low to High</option>
                             <option>Price: High to Low</option>
                         </select>
                     </div>
                                           {/* View */}
                     <div className="flex items-center space-x-2">
                         <label className="text-sm font-medium text-blue-900">View:</label>
                         <div className="flex space-x-2 mt-2">
                         <MdWindow />
                         <TfiMenuAlt />
                         <div className="w-32 h-5 border"></div>
                         </div>
                     </div>
                </div>
             </div>
             <div className='max-w-7xl mx-auto px-4 py-8'>
             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
             {product.map((product) => (
                <div key={product._id} 
                className='border rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300'>
                    <Link href={`/product/${product.slug?.current || ''}`}>
                    {product.image && (
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.name}
                      width={200}
                      height={200}
                      className='object-cover rounded-md w-full h-80 sm:w-30 md:w-60 lg:w-full'
                    />
      
                     )}
                      <h1 className='text-lg font-semibold mt-4'>
                        {product.name}
                      </h1>
                      <div className='flex text-gray-500 mt-2'>
                      <p className=''>
                      ${product.price}
                      </p>
                      <p className='line-through  text-pink-500 ml-2'>
                        ${product.oldPrice}
                      </p>
                     </div>
                     <button
                     className='bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadw-lg 
                     hover:scale-110 transition-transform duration-300 ease-in-out mt-3'
                     onClick={(e) => handleAddToCart(e, product)}
                     >
                      Add To Cart
                     </button>
                     </Link>
                </div>
             ))}
             </div>
             </div>
             <div className="ml-96 mt-5 py-10">
                     <Image
                     src="/image 117.png"
                     alt="Footer"
                     width={1000}
                     height={200}
                      />
            </div>
            <Footer/>
    </div>
  )
}

export default Shop