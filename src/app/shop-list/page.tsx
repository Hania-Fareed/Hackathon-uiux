"use client";
import Image from "next/image";
import Footer from "../components/footer";
import Swal from "sweetalert2";
import Link from "next/link";
import { Product } from "../../../types/product";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { productAll } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { addToCart } from "../actions/actions";

const ListPage = () => { 

  const [product, setProduct] = useState<Product[]>([])

  useEffect(() => {
    async function fetchproduct() {
      const fetchedProduct : Product[] = await client.fetch(productAll)
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
        });
        addToCart(product)
        
      }

  return (
    <div>
      <header className="relative w-[1900px] py-6 bg-[#E7E4F8]">
                 <div className="container mx-auto">
                    <h1 className="text-2xl font-bold text-blue-900">Shop List Default</h1>
                    <p className="text-sm text-black">
                        <Link href={"/"}>Home</Link>
                         . Pages
                         <Link href={"/"}> <span className="text-pink-500">. Shop List Default</span></Link>
                    </p>
                </div>
      </header>
    <div className="space-y-6 px-6 py-4">
      {product.map((product) => (
        <div key={product._id}
        className="border rounded-lg p-4 shadow-md hover:shadow-xl transition duration-300 flex items-center gap-6">
        <Link href={`/product/${product.slug.current}`} className="flex items-center gap-6">
          {/* Image Section */}
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={200}
              height={200}
             className='object-cover rounded-md sm:w-30 md:w-60'
            />
           )}
          
          {/* Product Details */}
          <div className="flex-1">
            {/* Dots */}
            <div className="flex space-x-1">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
            </div>
      
            {/* Heading */}
            <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
      
            {/* Price Section */}
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-lg font-bold text-blue-900">${product.price}</span>
              <span className="text-sm text-pink-500 line-through">${product.oldPrice}</span>
            </div>
      
            {/* Description */}
            <p className="text-sm text-gray-600 mt-2">{product.description}</p>
      
            {/* Add to Cart Button */}
            <button
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg 
                         hover:scale-110 transition-transform duration-300 ease-in-out mt-3"
              onClick={(e) => handleAddToCart(e, product)}
            >
              Add to Cart
            </button>
          </div>
        </Link>
      </div>
      ))}
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
  );
};

export default ListPage;