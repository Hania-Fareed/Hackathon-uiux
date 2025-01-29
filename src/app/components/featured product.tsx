"use client"
// import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder , MdZoomIn } from "react-icons/md";
// import { Product } from '../../../types/product';
// import { client } from '@/sanity/lib/client';
// import { allProduct } from '@/sanity/lib/queries';
const Featured = () => {

  // const [product, setProduct] = useState<Product[]>([])

  // useEffect(() => {
  //     async function fetchproduct() {
  //         const fetchedProduct : Product[] = await client.fetch(allProduct) 
  //         setProduct(fetchedProduct)
  //     }
  //     fetchproduct()
  // },[])
  return (
    <div className="flex flex-col items-center space-y-16 p-4">
      {/* Heading */}
      <h1 className="text-4xl mt-12 font-bold text-blue-900">Featured Products</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* First Product */}
     <div className="flex flex-col shadow-lg">
          <div className="w-64 h-60 bg-gray-100 flex items-center justify-center">
          <Image 
          src="/image 1168.png"
          alt="image"
         height ={32}
          width ={150}
          />
          </div>
          <div className="w-64 h-36 bg-white p-4">
            <h1 className="text-lg text-pink-500 font-semibold text-center">Cantilever Chair</h1>
            {/* <img className="mx-auto mt-2" src="Group 141.png" alt="Rating" /> */}
            <Image 
            className="mx-auto mt-2"
            src="/Group 141.png"
            alt="image"
            width={49}
            height ={32}
            />
            <p className="text-blue-900 font-medium text-sm text-center mt-2">Code - Y523201</p>
            <p className="text-blue-900 font-medium text-sm text-center mt-2">$42.00</p>
          </div>
        </div>

        {/* Second Product */}
        <div className="flex flex-col shadow-xl">
          <div className="w-64 h-60 bg-gray-100 flex items-center justify-center">
            <h3 className="flex gap-3 -mt-48 -ml-16">
            <IoCartOutline/>
            <MdOutlineFavoriteBorder />
            <MdZoomIn />
            </h3>
            <p className="text-xl text-gray-500">
              {/* <img className="h-32" src="image 1.png"/> */}
              <Image 
              src="/image 1.png"
              alt="image"
              width={120}
              height={32}
              />
              <p className="w-24 h-7 mt-7 -mb-8 p-2 bg-green-500 text-xs text-white">View Details</p>
            </p>
          </div>
          <div className="w-64 h-36 bg-blue-900 p-4">
            <h1 className="text-lg text-white font-semibold text-center">Cantilever chair</h1>
              {/* <img className="mx-auto mt-2" src="Group 141.png"/> */}
              <Image 
            className="mx-auto mt-2"
            src="/Group 141.png"
            alt="image"
            width={49}
            height ={32}
            />
            <p className="text-gray-200 font-medium text-sm text-center mt-2">Code - ABC12345</p>
            <p className="text-gray-200 font-medium text-sm text-center mt-2">$99.00</p>
          </div>
        </div>

        {/* Third Product */}
        <div className="flex flex-col shadow-lg">
          <div className="w-64 h-60 bg-gray-100 flex items-center justify-center">
              {/* <img src="image 1169.png"/> */}
              <Image 
              src="/image 1169.png"
              alt="image"
              width={150}
              height={32}
              />
          </div>
          <div className="w-64 h-36 bg-white p-4">
            <h1 className="text-lg text-pink-500 font-semibold text-center">Cantilever chair</h1>
              {/* <img className="mx-auto mt-2" src="Group 141.png"/> */}
              <Image 
            className="mx-auto mt-2"
            src="/Group 141.png"
            alt="image"
            width={49}
            height ={32}
            />
            <p className="text-blue-900 font-medium text-sm text-center mt-2">Code - XYZ67890</p>
            <p className="text-blue-900 font-medium text-sm text-center mt-2">$75.00</p>
          </div>
        </div>

        {/* Fourth product */}
        <div className="flex flex-col shadow-lg">
          <div className="w-64 h-60 bg-gray-100 flex items-center justify-center">
            {/* <img src="image 3.png"/> */}
            <Image 
              src="/image 3.png"
              alt="image"
              width={180}
              height={32}
              />
          </div>
          <div className="w-64 h-36 bg-white p-4">
            <h1 className="text-lg text-pink-500 font-semibold text-center">Cantilever chair</h1>
              {/* <img className="mx-auto mt-2" src="Group 141.png"/> */}
              <Image 
            className="mx-auto mt-2"
            src="/Group 141.png"
            alt="image"
            width={49}
            height ={32}
            />
            <p className="text-blue-900 font-medium text-sm text-center mt-2">Code - XYZ67890</p>
            <p className="text-blue-900 font-medium text-sm text-center mt-2">$75.00</p>
          </div>
        </div>
      </div>
      {/* <img src="Group 169.png"/> */}
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