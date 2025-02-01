"use client";

import Swal from "sweetalert2";
import { addToCart } from "@/app/actions/actions";
import { Product } from "../../../types/product";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    Swal.fire({
      title: `${product.name}`,
      text: "Thanks for adding to Cart!",
      icon: "success",
      timer: 1000,
    });
    addToCart(product);
  };

  return (
    <button
      className="ml-96 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-10 rounded-lg shadow-md hover:shadow-lg 
                 hover:scale-110 transition-transform duration-300 ease-in-out"
      onClick={handleAddToCart}
    >
      Add To Cart
    </button>
  );
}
