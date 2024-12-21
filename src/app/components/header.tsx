import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-gray-50">
      <div className="flex flex-col md:flex-row items-center justify-between p-5">
        {/* Logo */}
        <h1 className="text-2xl md:text-4xl font-semibold">Hekto</h1>

        {/* Navigation Menu */}
        <ul className="flex flex-wrap gap-4 md:gap-8 mt-4 md:mt-0 font-medium">
          <Link href="/">
            <li className="text-red-500 hover:text-black transition-all duration-300">
              Home
            </li>
          </Link>
          <Link href="/pages">
            <li className="hover:text-pink-600 transition-all duration-300">
              Pages
            </li>
          </Link>
          <Link href="/products">
            <li className="hover:text-pink-600 transition-all duration-300">
              Products
            </li>
          </Link>
          <Link href="/Blog">
            <li className="hover:text-pink-600 transition-all duration-300">
              Blog
            </li>
          </Link>
          <Link href="/shop">
            <li className="hover:text-pink-600 transition-all duration-300">
              Shop
            </li>
          </Link>
          <Link href="/Contact">
            <li className="hover:text-pink-600 transition-all duration-300">
              Contact
            </li>
          </Link>
        </ul>

        {/* Icons Section */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <Image
            className="w-85 h-8 md:w-12 md:h-12"
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
