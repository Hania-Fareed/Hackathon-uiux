"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isHomeOpen, setIsHomeOpen] = useState(false); // State for Home dropdown
  const dropdownRef = useRef<HTMLDivElement>(null);
  const Router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
        setIsHomeOpen(false); // Close Home dropdown as well
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown on menu item click
  const handleMenuItemClick = (path: string) => {
    Router.push(path); // Navigate to the desired path
    setIsProductsOpen(false); // Close the Products dropdown
    setIsHomeOpen(false); // Close the Home dropdown
  };

  return (
    <div className="bg-gray-50">
      <div className="flex flex-col md:flex-row items-center justify-between p-5">
        {/* Logo */}
        <h1 className="text-2xl md:text-4xl font-semibold">Hekto</h1>

        {/* Navigation Menu */}
        <ul className="flex flex-wrap gap-4 md:gap-8 mt-4 md:mt-0 font-medium">
          {/* Home Menu with Dropdown */}
          <li className="relative group">
            <button
              onClick={() => setIsHomeOpen(!isHomeOpen)}
              className="focus:outline-none flex items-center gap-2 text-red-500 hover:text-black transition-all duration-300"
            >
              Home
              {/* Dropdown Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 transition-transform duration-300 ${
                  isHomeOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isHomeOpen && (
              <div
                ref={dropdownRef}
                className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50"
              >
                <button
                  onClick={() => handleMenuItemClick("/Hekto")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Hekto Demo
                </button>
                <button
                  onClick={() => handleMenuItemClick("/home-services")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  FAQ
                </button>
                <button
                  onClick={() => handleMenuItemClick("/home-about")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  About Home
                </button>
              </div>
            )}
          </li>

          <Link href="/Pages">
            <li className="hover:text-pink-600 transition-all duration-300">
              Pages
            </li>
          </Link>
          <Link href="/Product">
            <li className="hover:text-pink-600 transition-all duration-300">
              Products
            </li>
          </Link>
          <Link href="/Blog">
            <li className="hover:text-pink-600 transition-all duration-300">
              Blog
            </li>
          </Link>

          {/* Shop Menu with Dropdown */}
          <li className="relative group">
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="focus:outline-none hover:text-red-500"
            >
              Shop
            </button>
            {isProductsOpen && (
              <div
                ref={dropdownRef}
                className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50"
              >
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
                <button
                  onClick={() => handleMenuItemClick("/shop-sidebar")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Shop Left Sidebar
                </button>
              </div>
            )}
          </li>
          <Link href="/Contact">
            <li className="hover:text-pink-600 transition-all duration-300">
              Contact
            </li>
          </Link>
        </ul>

        {/* Icons Section */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <Image
            className="w-8 h-8 md:w-12 md:h-12"
            src="/Group 15.png"
            alt="Logo"
            width={48}
            height={48}
          />
          <Image
            className="w-6 h-6 md:w-8 md:h-8"
            src="/Vector.png"
            alt="Vector"
            width={32}
            height={32}
          />
        </div>
      </div>
    </div>
  );
}
