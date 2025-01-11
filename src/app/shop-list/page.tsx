// "use client";
// import React, { useState } from 'react';

// import Footer from "../components/footer";
// import Image from "next/image";


// const ProductListing: React.FC = () => {
//     const [cart, setCart] = useState<number[]>([]);
//     const [favorites, setFavorites] = useState<number[]>([]);

//     const products = [
//         {
//             id: 1,
//             name: "Accumsan tincidunt",
//             oldPrice: 26.0,
//             newPrice: 19.0,
//             rating: 5,
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
//             imageUrl: "Rectangle 32.png",
//         },
//         {
//             id: 2,
//             name: "In nulla",
//             oldPrice: 30.0,
//             newPrice: 25.0,
//             rating: 4,
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
//             imageUrl: "Rectangle 33.png",
//         },
//         {
//             id: 3,
//             name: "Vel sem",
//             oldPrice: 35.0,
//             newPrice: 29.0,
//             rating: 4,
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
//             imageUrl: "Rectangle 34.png",
//         },
//     ];

//     const addToCart = (id: number) => {
//         setCart((prevCart) => [...prevCart, id]);
//         alert("Added to cart!");
//     };

//     const toggleFavorite = (id: number) => {
//         setFavorites((prevFavorites) =>
//             prevFavorites.includes(id)
//                 ? prevFavorites.filter((favId) => favId !== id)
//                 : [...prevFavorites, id]
//         );
//     };

//     return (
//         <div>
//         <div className="bg-gray-100 min-h-screen py-8">
//             <div className="container mx-auto space-y-6">
//                 {products.map((product) => (
//                     <div
//                         key={product.id}
//                         className="bg-white shadow-md rounded-lg p-4 flex items-start"
//                     >
//                         <img
//                             src={product.imageUrl}
//                             alt={product.name}
//                             className="w-32 h-32 rounded-md"
//                         />
//                         <div className="ml-4 flex-1">
//                             <h2 className="text-lg font-semibold text-gray-800">
//                                 {product.name}
//                             </h2>
//                             <div className="text-sm text-gray-600 flex items-center">
//                                 <span className="line-through mr-2 text-gray-400">
//                                     ${product.oldPrice.toFixed(2)}
//                                 </span>
//                                 <span className="text-red-600 font-bold">
//                                     ${product.newPrice.toFixed(2)}
//                                 </span>
//                                 <span className="ml-auto text-yellow-500 text-sm">
//                                     {"★".repeat(product.rating)}
//                                 </span>
//                             </div>
//                             <p className="text-gray-500 mt-2">
//                                 {product.description}
//                             </p>
//                             <div className="mt-4 flex items-center space-x-3">
//                                 <button
//                                     onClick={() => addToCart(product.id)}
//                                     className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                                 >
//                                     Add to Cart
//                                 </button>
//                                 <button
//                                     onClick={() => toggleFavorite(product.id)}
//                                     className={`px-3 py-2 rounded hover:bg-gray-300 ${favorites.includes(product.id) ? 'bg-red-200' : 'bg-gray-200'}`}
//                                 >
//                                     ❤
//                                 </button>
//                                 <button className="bg-gray-200 px-3 py-2 rounded hover:bg-gray-300">
//                                     🔍
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//         <div className="ml-96 mt-5 py-10">
//             <Image
//             src="/image 117.png"
//             alt="Footer"
//             width={1000}
//             height={200}
//             />
//         </div>
//         <Footer />
//         </div>
//     );
// };

// export default ProductListing;




















// "use client";
// import React, { useEffect } from 'react'
// import styles from '../styles/productcard.module.css'
// import Image from 'next/image'
// import { useDispatch } from 'react-redux';
// import { AppDispatch, useAppSelector } from '@/redux/store';
// import { updateCart } from '@/redux/features/cart-slice';


// interface Product{
//     name: string;
//     id: number;
//     imagePath: string;
//     price: number;
//     description: string;
// }

// interface CartItem{
//     name: string;
//     id: number;
//     imagePath: string;
//     price: number;
//     description: string;
//     quantity: number;
//   }
// const page = () => {
//     const dispatch = useDispatch<AppDispatch>();
//     const cartArray:CartItem[] = useAppSelector((state) => state.cartReducer);


//     const products:Product[] = [
//         {
//             name: 'Accumsan tincidunt',
//             id : 1,
//             imagePath: '/Rectangle 32.png',
//             price: 100,
//             description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'
//         },
//         {
//             name: 'In nulla',
//             id : 1,
//             imagePath: '/Rectangle 33.png',
//             price: 100,
//             description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'
//         },
//         {
//             name: 'Vel sem',
//             id : 1,
//             imagePath: '/Rectangle 34.png',
//             price: 100,
//             description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'
//         },
//         {
//             name: 'Porttitor cum',
//             id : 1,
//             imagePath: '/Rectangle 35.png',
//             price: 100,
//             description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'
//         },
//         {
//             name: 'Nunc in',
//             id : 1,
//             imagePath: '/Rectangle 36.png',
//             price: 100,
//             description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'
//         },
//         {
//             name: 'Vitae facilisis',
//             id : 1,
//             imagePath: '/Rectangle 37.png',
//             price: 100,
//             description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'
//         },
//         {
//             name: 'Curabitur lectus',
//             id : 1,
//             imagePath: '/Rectangle 38.png',
//             price: 100,
//             description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'
//         },
//     ]

//     const addToCart = (product:Product) => {
//         const itemIndex = cartArray.findIndex((item) => item.id === product.id)

//         if(itemIndex !== -1) {
//             const updatedCart = cartArray.map((item, index) =>
//                 index === itemIndex ? {...item, quantity:item.quantity + 1} : item
//             )

//             dispatch(updateCart(updatedCart));
//         }
//         else {
//             const newCartItem ={
//                 name: product.name,
//                 id: product.id,
//                 imagePath: product.imagePath,
//                 price: product.price,
//                 description: product.description,
//                 quantity: 1,
//             };

//             const updatedCart = [...cartArray, newCartItem];
//             dispatch(updateCart(updatedCart));
//         }
//     }

//     useEffect(() => {
//         console.log("cartArray", cartArray);
//     }, [cartArray]);
//   return (
//     <div className={styles.productsContainer}>
//         {
//             products.map((product, index) => (
//                 <div className={styles.productcard1}>
//                     <Image src={product.imagePath} alt={product.name} width={200} height={200}/>
//                     <div className={styles.row}>
//                          <h2>{product.name}</h2>
//                          <p>${product.price}</p>
//                     </div>
//                     <div>
//                         <button
//                              onClick={()=> addToCart(product)}
//                         >
//                             Add to Card</button>
//                     </div>
//                 </div>
//             ))  
//         }     
//     </div>
//   )
// }

// export default page

















"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { updateCart } from "@/redux/features/cart-slice";

interface Product {
  name: string;
  id: number;
  imagePath: string;
  price: number;
  originalPrice: number; // Added for original price
  description: string;
}

interface CartItem {
  name: string;
  id: number;
  imagePath: string;
  price: number;
  description: string;
  quantity: number;
}

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartArray: CartItem[] = useAppSelector((state) => state.cartReducer);

  const products: Product[] = [
    {
      name: "Accumsan tincidunt",
      id: 1,
      imagePath: "/Rectangle 32.png",
      price: 26.0,
      originalPrice: 52.0, // Added
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'
    },
    {
      name: 'In nulla',
      id : 1,
      imagePath: '/Rectangle 33.png',
      price: 100,
      originalPrice: 52.0,
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'
    },
    {
      name: 'Vel sem',
      id : 1,
      imagePath: '/Rectangle 34.png',
      price: 100,
      originalPrice: 52.0,
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'
    },
    {
      name: 'Porttitor cum',
      id : 1,
      imagePath: '/Rectangle 35.png',
      price: 100,
      originalPrice: 52.0,
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'
    },
    {
      name: 'Nunc in',
      id : 1,
      imagePath: '/Rectangle 36.png',
      price: 100,
      originalPrice: 52.0,
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'
    },
    {
      name: 'Vitae facilisis',
      id : 1,
      imagePath: '/Rectangle 37.png',
      price: 100,
      originalPrice: 52.0,
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'
    },
    {
      name: 'Curabitur lectus',
      id : 1,
      imagePath: '/Rectangle 38.png',
      price: 100,
      originalPrice: 52.0,
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'
    },
  ];

  const addToCart = (product: Product) => {
    const itemIndex = cartArray.findIndex((item) => item.id === product.id);

    if (itemIndex !== -1) {
      const updatedCart = cartArray.map((item, index) =>
        index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
      );

      dispatch(updateCart(updatedCart));
    } else {
      const newCartItem = {
        name: product.name,
        id: product.id,
        imagePath: product.imagePath,
        price: product.price,
        description: product.description,
        quantity: 1,
      };

      const updatedCart = [...cartArray, newCartItem];
      dispatch(updateCart(updatedCart));
    }
  };

  useEffect(() => {
    console.log("cartArray", cartArray);
  }, [cartArray]);

  return (
    <div className="space-y-6 px-6 py-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg p-4 shadow-md flex items-center space-x-4"
        >
          {/* Image Section */}
          <Image
            src={product.imagePath}
            alt={product.name}
            width={250}
            height={150}
            className="rounded-md"
          />

          {/* Product Details */}
          <div className="flex-1">
            {/* Dots */}
            <div className="flex space-x-1 ml-48">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
            </div>

            {/* Heading */}
            <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>

            {/* Price Section */}
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-lg font-bold text-blue-900">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-sm text-pink-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mt-2">{product.description}</p>

            {/* Add to Cart Button */}
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;


