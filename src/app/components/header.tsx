"use client";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi"; // Search Icon

export default function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const Router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
        setIsHomeOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuItemClick = (path: string) => {
    Router.push(path);
    setIsProductsOpen(false);
    setIsHomeOpen(false);
  };

  return (
    <div className="bg-gray-50 w-full shadow-md">
      <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-5">
        {/* Logo */}
        <h1 className="text-2xl md:text-4xl font-semibold">Hekto</h1>

        {/* Navigation Menu */}
        <ul className="flex flex-wrap gap-6 md:gap-10 mt-4 md:mt-0 font-medium text-gray-800">
          <li className="relative group">
            <button
              onClick={() => setIsHomeOpen(!isHomeOpen)}
              className="flex items-center gap-1 text-red-500 hover:text-black transition-all duration-300"
            >
              Home
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 transition-transform duration-300 ${isHomeOpen ? "rotate-180" : "rotate-0"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isHomeOpen && (
              <div ref={dropdownRef} className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-50">
                <button
                  onClick={() => handleMenuItemClick("/Hekto")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Hekto Demo
                </button>
                <button
                  onClick={() => handleMenuItemClick("/")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  About Home
                </button>
              </div>
            )}
          </li>

          <Link href="/Pages">
            <li className="hover:text-pink-600 transition-all duration-300">Pages</li>
          </Link>
          <Link href="/Blog">
            <li className="hover:text-pink-600 transition-all duration-300">Blog</li>
          </Link>

          <li className="relative group">
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="focus:outline-none hover:text-red-500"
            >
              Shop
            </button>
            {isProductsOpen && (
              <div ref={dropdownRef} className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-50">
                <button
                  onClick={() => handleMenuItemClick("/shop-grid")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Shop Grid Default
                </button>
                <button
                  onClick={() => handleMenuItemClick("/shop-list")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Shop List
                </button>
              </div>
            )}
          </li>

          <Link href="/Contact">
            <li className="hover:text-pink-600 transition-all duration-300">Contact</li>
          </Link>
        </ul>

        {/* Search Bar & Icons */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <FiSearch className="absolute right-3 top-2.5 text-gray-500 cursor-pointer" size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
