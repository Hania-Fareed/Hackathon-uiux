import Link from "next/link";

export default function Contacts() {
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
            <li>mhhasanul@gmail.com</li>
          </Link>

          <Link
            className="flex items-center gap-1 hover:text-black transition-all duration-300"
            href="/"
          >
            <span>📞</span> {/* Phone Icon */}
            <li>(12345)67890</li>
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
            <li>Login</li>
          </Link>
          <Link
            className="hover:text-black transition-all duration-300"
            href="/"
          >
            <li>Wishlist</li>
          </Link>
        </div>
      </ul>
    </div>
  );
}
