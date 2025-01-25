"use client"
// import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder , MdZoomIn } from "react-icons/md";
import Link from 'next/link';
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
      {/* leatest product */}
      <div className="flex flex-col items-center space-y-16 p-4">
        <h2 className="text-4xl font-bold text-blue-900">Leatest Products</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 font-medium text-lg">
        <Link href={"/"}> <li className="text-pink-500 hover:text-blue-900 transition-all duration-300 underline">New Arrival</li></Link>
        <Link href={"/"}><li className="text-blue-900 hover:text-pink-500 transition-all duration-300">Best Seller</li></Link>
        <Link href={"/"}><li className="text-blue-900 hover:text-pink-500 transition-all duration-300">Featured</li></Link>
        <Link href={"/"}> <li className="text-blue-900 hover:text-pink-500 transition-all duration-300">Special Offer</li></Link>
        </ul>
        <div className="flex grid-col-1 md:grid-cols-2 lg:grid-colos-3 gap-14">
         <div>
         <div className="w-80 h-auto p-5 bg-gray-100">
            {/* <img className="w-60" src="image 1166.png"/> */}
            <Image 
            src="/image 1166.png"
            alt="image 1166.png"
            width={230}
            height={150}
            />
          </div>
          <div className="flex items-center justify-between">
             <h1 className="text-lg font-semibold text-blue-800 shadow-md">Comfort Handy Craft</h1>
                 <div className="flex items-center space-x-2">
                  <p className="text-blue-800 font-semibold text-lg">$42.00</p>
                  <p className="text-red-500 line-through font-semibold text-base">$65.00</p>
                </div>
          </div>
         </div>
         <div>
            {/* <img src="Frame 1.png"/> */}
            <Image 
              src="/Frame 1.png"
              alt="Frame 1.png"
              width={370}
              height={150}
              />
          <div className="flex items-center justify-between">
             <h1 className="text-lg font-semibold text-blue-800 shadow-md">Comfort Handy Craft</h1>
                 <div className="flex items-center space-x-2">
                  <p className="text-blue-800 font-semibold text-lg">$42.00</p>
                  <p className="text-red-500 line-through font-semibold text-base">$65.00</p>
                </div>
          </div>
         </div>
         <div>
         <div className="w-80 h-auto p-5 bg-gray-100">
            {/* <img className="w-60" src="image 1168.png"/> */}
            <Image 
              src="/image 1168.png"
              alt="image 1168.png"
              width={230}
              height={150}
              />
          </div>
          <div className="flex items-center justify-between">
             <h1 className="text-lg font-semibold text-blue-800 shadow-md">Comfort Handy Craft</h1>
                 <div className="flex items-center space-x-2">
                  <p className="text-blue-800 font-semibold text-lg">$42.00</p>
                  <p className="text-red-500 line-through font-semibold text-base">$65.00</p>
                </div>
          </div>
         </div>
        </div>
        <div className="flex grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        <div>
         <div className="w-80 h-auto p-5 bg-gray-100">
            {/* <img className="w-60" src="image 23.png"/> */}
            <Image 
              src="/image 23.png"
              alt="image 23.png"
              width={240}
              height={150}
              />
          </div>
          <div className="flex items-center justify-between">
             <h1 className="text-lg font-semibold text-blue-800 shadow-md">Comfort Handy Craft</h1>
                 <div className="flex items-center space-x-2">
                  <p className="text-blue-800 font-semibold text-lg">$42.00</p>
                  <p className="text-red-500 line-through font-semibold text-base">$65.00</p>
                </div>
          </div>
         </div>
         <div>
         <div className="w-80 h-72 p-5 bg-gray-100">
            {/* <img className="w-60 mt-12" src="image.png"/> */}
            <Image 
             className="mt-8 "
              src="/image.png"
              alt="image.png"
              width={250}
              height={150}
              />
          </div>
          <div className="flex items-center justify-between">
             <h1 className="text-lg font-semibold text-blue-800 shadow-md">Comfort Handy Craft</h1>
                 <div className="flex items-center space-x-2">
                  <p className="text-blue-800 font-semibold text-lg">$42.00</p>
                  <p className="text-red-500 line-through font-semibold text-base">$65.00</p>
                </div>
          </div>
         </div>
         <div>
         <div className="w-80 h-72 p-5 bg-gray-100">
            {/* <img className="w-60 mt-14" src="image 3.png"/> */}
            <Image 
             className="mt-14 "
              src="/image 3.png"
              alt="image 3.png"
              width={260}
              height={150}
              />
          </div>
          <div className="flex items-center justify-between">
             <h1 className="text-lg font-semibold text-blue-800 shadow-md">Comfort Handy Craft</h1>
                 <div className="flex items-center space-x-2">
                  <p className="text-blue-800 font-semibold text-lg">$42.00</p>
                  <p className="text-red-500 line-through font-semibold text-base">$65.00</p>
                </div>
          </div>
         </div>
        </div>
      </div>
       {/* What Shopex Offer */}
       <div className="flex flex-col items-center space-y-16 p-4">
          <h1 className="text-4xl font-bold text-blue-900">What Shopex Offer!</h1>
          <div className="grid grid-col-1 md:grid-col-2 lg:col-4">
            <div className="flex gap-14 mt-16">
            <div className="flex flex-col items-center text-center space-y-3 p-8 w-64 h-72 bg-white shadow-lg">
              {/* <img src="free-delivery 1.png"/> */}
              <Image
              src="/free-delivery 1.png"
              alt="free-delivery 1.png"
              width={60}
              height={100}
              />
              <h2 className="text-xl font-bold text-blue-800">24/7 Support</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
              </p>
           </div>
           <div className="flex flex-col items-center text-center space-y-3 p-8 w-64 h-72 bg-white shadow-lg">
              {/* <img src="cashback 1.png"/> */}
              <Image
              src="/cashback 1.png"
              alt="cashback 1.png"
              width={60}
              height={100}
              />
              <h2 className="text-xl font-bold text-blue-800">24/7 Support</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
              </p>
           </div>
           <div className="flex flex-col items-center text-center space-y-3 p-8 w-64 h-72 bg-white shadow-lg">
              {/* <img src="Group.png"/> */}
              <Image
              src="/Group.png"
              alt="Group.png"
              width={50}
              height={100}
              />
              <h2 className="text-xl font-bold text-blue-800">24/7 Support</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
              </p>
           </div>
           <div className="flex flex-col items-center text-center space-y-3 p-8 w-64 h-72 bg-white shadow-lg">
              {/* <img src="Group 1.png"/> */}
              <Image
              src="/Group 1.png"
              alt="Group 1.png"
              width={50}
              height={100}
              />
              <h2 className="text-xl font-bold text-blue-800">24/7 Support</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
              </p>
           </div>
           </div>
          </div>
        </div>
        {/* Unique Features */}
        <div className="bg-purple-50 p-8">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">

    <div className="relative">
      <div className="absolute bg-pink-200 rounded-full w-72 h-72 -z-10 top-10 left-10"></div>
      {/* <img src="Group 153.png" alt="Sofa" className="relative z-10 rounded-lg"/> */}
      <Image
        className="relative z-10 rounded-lg"
        src="/Group 153.png"
        alt="Sofa"
        width={600}
        height={300}
      />
    </div>
    <div className="space-y-4 text-gray-700">
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
        <button className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow hover:bg-pink-600">
          Add To Cart
        </button>
        <div>
          <h2 className="font-bold text-blue-900">B&amp;B Italian Sofa</h2>
          <p className="text-gray-500">$32.00</p>
        </div>
      </div>
    </div>
  </div>
</div>
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
{/* Discount Items Section */}
<div className="flex flex-col items-center space-y-16 p-4">
  {/* Heading */}
  <h1 className="text-4xl mt-12 font-bold text-blue-900 text-center">Discount Item</h1>

  {/* Navigation Links */}
  <ul className="flex font-medium text-lg text-blue-900 gap-5">
    <li className="text-pink-500 underline">Wood Chair</li>
    <li className="w-2 h-2 bg-pink-500 rounded-full mt-3"></li>
    <li>Plastic Chair</li>
    <li>Sofa Collection</li>
  </ul>

  {/* Discount Section */}
  <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl">
    {/* Text Section */}
    <div className="flex-1">
      <h1 className="text-4xl font-semibold text-blue-900">20% Discount on All Products</h1>
      <p className="text-pink-500 text-lg mt-4">Eames Sofa Compact</p>

      {/* Description */}
      <p className="text-slate-300 mt-4 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget<br />
        feugiat habitasse nec, bibendum condimentum.
      </p>

      {/* Features Section */}
      <div className="text-slate-300 mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <p>Material exposed like metals</p>
        <p>Clear lines and geometric figures</p>
        <p>Simple neutral colors</p>
        <p>Durable material choices</p>
      </div>

      {/* Button */}
      <button className="mt-8 w-52 h-14 bg-pink-500 text-white font-light rounded-sm hover:bg-pink-600">
        Shop Now
      </button>
    </div>

    <div className="relative flex justify-center items-center">
  {/* Background Circle */}
  <div className="absolute w-96 h-96 rounded-full bg-pink-50"></div>

  {/* Chair Image */}
  <div className="relative">
    <Image
      src="/tortuga-01-b 1.png"
      alt="Chair"
      width={580}
      height={240}
    />
  </div>
</div>

  </div>
</div>
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
  );
}

export default Featured