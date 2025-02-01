"use client"
import Link from "next/link";
import { MdFavoriteBorder } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { BiUser } from "react-icons/bi";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-purple-600 text-white px-4 py-2">
      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between mx-auto max-w-screen-xl px-4">
        {/* Left Section: Email & Phone */}
        <div className="flex items-center gap-4 text-sm">
          <Link href="/" className="flex items-center gap-1 hover:text-gray-300">
            📧 <span>haniafareed7@gmail.com</span>
          </Link>
          <Link href="/" className="flex items-center gap-1 hover:text-gray-300">
            📞 <span>(0333) 3538055</span>
          </Link>
        </div>

        {/* Right Section: Language, Currency, Login, Icons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/" className="hover:text-gray-300">English</Link>
          <Link href="/" className="hover:text-gray-300">USD</Link>
          <Link href="/Login" className="hover:text-gray-300 flex items-center gap-1">
            Login <BiUser />
          </Link>
          <Link href="/" className="hover:text-gray-300 flex items-center gap-1">
            Wishlist <MdFavoriteBorder />
          </Link>
          <Link href="/Cart" className="hover:text-gray-300">
            <LuShoppingCart />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
          <FiMenu />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-3 mt-2 text-sm bg-purple-700 py-2">
          <Link href="/" className="hover:text-gray-300">English</Link>
          <Link href="/" className="hover:text-gray-300">USD</Link>
          <Link href="/Login" className="hover:text-gray-300 flex items-center gap-1">
            Login <BiUser />
          </Link>
          <Link href="/" className="hover:text-gray-300 flex items-center gap-1">
            Wishlist <MdFavoriteBorder />
          </Link>
          <Link href="/Cart" className="hover:text-gray-300">
            <LuShoppingCart />
          </Link>
        </div>
      )}
    </div>
  );
}
