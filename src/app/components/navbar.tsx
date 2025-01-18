import Link from "next/link";
import { MdFavoriteBorder } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { BiUser } from "react-icons/bi";
export default function Navbar() {
  return (
    <div className="bg-purple-600 text-white px-4">
      <ul className="flex items-center justify-between px-96 h-10">
        {/* Left Section: Email and Phone */}
        <div className="flex items-center gap-4">
          <Link
            className="flex items-center gap-1 hover:text-black transition-all duration-300"
            href="/"
          >
            <span>📧</span> {/* Email Icon */}
            <li>haniafareed7@gmail.com</li>
          </Link>

          <Link
            className="flex items-center gap-1 hover:text-black transition-all duration-300"
            href="/"
          >
            <span>📞</span> {/* Phone Icon */}
            <li>(0333)3538055</li>
          </Link>
        </div>

        {/* Right Section: Language, Currency, Login, Wishlist */}
        <div className="flex items-center gap-4">
          <Link
            className="hover:text-black transition-all duration-300"
            href="/"
          >
            <li>English</li>
          </Link>
          <Link
            className="hover:text-black transition-all duration-300"
            href="/"
          >
            <li>USD</li>
          </Link>
          <Link
            className="hover:text-black transition-all duration-300"
            href="/Login"
          >
            <li>Login <BiUser className="ml-10 -mt-5"/></li>
          </Link>
          <Link
            className="hover:text-black transition-all duration-300"
            href="/"
          >
            <li>Wishlist</li>
          </Link>
          <Link
            className="hover:text-black transition-all duration-300"
            href="/"
          >
            <li><MdFavoriteBorder /></li>
          </Link>
          <Link
            className="hover:text-black transition-all duration-300"
            href="/Cart"
          >
            <li><LuShoppingCart /></li>
          </Link>
        </div>
      </ul>
    </div>
  );
}
