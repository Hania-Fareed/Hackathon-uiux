"use client"
import React, { useEffect, useState } from 'react';
import { Product } from '../../../types/product';
import { getCartItems, removeFromCart, updateCartQuntity } from '../actions/actions';
import Swal from 'sweetalert2';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Footer from '../components/footer';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Cartpage = () => {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    useEffect(() => {
        setCartItems(getCartItems());
    }, []);

    const handleRemove = (id: string) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!'
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromCart(id);
                setCartItems(getCartItems());
                Swal.fire('Removed!', 'Your item has been removed.', 'success');
            }
        });
    };

    const handleQuantityChange = (id: string, quantity: number) => {
        updateCartQuntity(id, quantity);
        setCartItems(getCartItems());
    };

    const handleIncrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if (product) {
            handleQuantityChange(id, product.stockLevel + 1)
        }
    };

    const handleDecrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if (product && product.stockLevel > 1) {
            handleQuantityChange(id, product.stockLevel - 1)
        }
    };

    const calculatedTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.stockLevel, 0);
    };

    const router = useRouter();

    const handleProceed = () => {
        Swal.fire({
            title: 'Proceed to checkout?',
            text: 'Please review your order before proceeding!',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, proceed!',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Success', 'Your order has been successfully processed', 'success');
                router.push('/checkout')
                setCartItems([]);
            }
        });
    };

    return (
        <div>
        <div className="max-w-5xl mx-auto p-6 mt-5 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p className="text-lg text-gray-500">Your cart is empty.</p>
            ) : (
                <div className="bg-white p-4 shadow-md rounded-md">
                    {cartItems.map((item) => (
                        <div key={item._id} className="flex justify-between items-center border-b py-4">
                            {item.image && (
                                        <Image
                                          src={urlFor(item.image).url()}
                                          alt={item.name}
                                          width={500}
                                          height={500}
                                          className="w-20 h-20 object-cover rounded" 
                                        />
                                      )}
                            <div className="flex-1 ml-4">
                                <h2 className="text-lg font-semibold">{item.name}</h2>
                                <p className="text-gray-600">${item.price}</p>
                            </div>
                            <div className="flex items-center">
                                <button onClick={() => handleDecrement(item._id)} className="px-3 py-1 bg-gray-300 rounded-l">-</button>
                                <span className="px-4 py-2 bg-white border text-center">{item.stockLevel}</span>
                                <button onClick={() => handleIncrement(item._id)} className="px-3 py-1 bg-gray-300 rounded-r">+</button>
                            </div>
                            <button
                                onClick={() => handleRemove(item._id)}
                                className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="flex justify-between items-center mt-6">
                        <h2 className="text-xl font-semibold">Total: ${calculatedTotal().toFixed(2)}</h2>
                        <Link href={""}>
                        <button
                            onClick={handleProceed}
                            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                        >
                            Proceed to Checkout
                        </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
        <Footer />
        </div>
    );
};

export default Cartpage;