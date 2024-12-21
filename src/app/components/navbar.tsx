import Link from "next/link";

export default function Contacts() {
  return (
    <div className="bg-purple-600 text-white">
      <ul className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-9 p-4">
        {/* Email */}
        <Link
          className="hover:text-black transition-all duration-300"
          href="/"
        >
          <li>haniafareed7@gmail.com</li>
        </Link>

        {/* Phone */}
        <Link
          className="hover:text-black transition-all duration-300"
          href="/"
        >
          <li>(0333) 3538055</li>
        </Link>

        {/* Language */}
        <Link
          className="hover:text-black transition-all duration-300"
          href="/"
        >
          <li>English</li>
        </Link>

        {/* Currency */}
        <Link
          className="hover:text-black transition-all duration-300"
          href="/"
        >
          <li>USD</li>
        </Link>

        {/* Login */}
        <Link
          className="hover:text-black transition-all duration-300"
          href="/Login"
        >
          <li>Login</li>
        </Link>

        {/* Wishlist */}
        <Link
          className="hover:text-black transition-all duration-300"
          href="/"
        >
          <li>Wishlist</li>
        </Link>
      </ul>
    </div>
  );
}
