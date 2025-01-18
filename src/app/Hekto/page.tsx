import Link from "next/link";
import HektoSidebar from "../components/hektosidebar";
import Footer from "../components/footer";

export default function Hekto() {
  return (
    <div>
      <header className="relative py-16 mt-14 bg-purple-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-900">Hekto Demo</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 mt-14 flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="flex-1">
          <div className="text-blue-900 mb-8">
            <h1 className="text-3xl font-bold">Hekto Demo</h1>
            <p className="mt-5">Cart/ Information/ Shipping/ Payment</p>
          </div>
          {/* Form Section */}
          <section className="bg-slate-50 p-8 shadow-md py-28 rounded-md">
            <form>
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-blue-900 text-xl font-semibold">Contact Information</h1>
                <p className="text-sm text-gray-400">
                  Already have an account?{" "}
                  <Link href="/Login" className="text-blue-600 hover:underline">
                    Log in
                  </Link>
                </p>
              </div>

              {/* Email Input */}
              <div className="mb-6">
                <input
                  type="email"
                  className="w-full border border-[#A4B6C8B3] rounded-md p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  name="email"
                  placeholder="Email or mobile phone number"
                  required
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center mb-10">
                <input
                  type="checkbox"
                  id="updates"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
                <label htmlFor="updates" className="ml-2 text-sm text-gray-600">
                  Keep me up to date on news and exclusive offers
                </label>
              </div>

              <h1 className="mb-6 text-blue-900 font-semibold text-xl">Shipping Address</h1>

              {/* Name Inputs */}
              <div className="flex gap-4 mb-6">
                <input
                  type="text"
                  className="flex-1 border border-[#A4B6C8B3] rounded-md p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  name="first_name"
                  placeholder="First name (optional)"
                />
                <input
                  type="text"
                  className="flex-1 border border-[#A4B6C8B3] rounded-md p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  name="last_name"
                  placeholder="Last name"
                  required
                />
              </div>

              {/* Address Input */}
              <div className="mb-6">
                <input
                  type="text"
                  className="w-full border border-[#A4B6C8B3] rounded-md p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  name="address"
                  placeholder="Address"
                  required
                />
              </div>

              {/* Apartment Input */}
              <div className="mb-6">
                <input
                  type="text"
                  className="w-full border border-[#A4B6C8B3] rounded-md p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  name="apartment"
                  placeholder="Apartment, suite, etc. (optional)"
                />
              </div>

              {/* City Input */}
              <div className="mb-6">
                <input
                  type="text"
                  className="w-full border border-[#A4B6C8B3] rounded-md p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  name="city"
                  placeholder="City"
                />
              </div>

              {/* Country and Postal Code */}
              <div className="flex gap-4 mb-10">
                <input
                  type="text"
                  className="flex-1 border border-[#A4B6C8B3] rounded-md p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  name="country"
                  placeholder="Country"
                  required
                />
                <input
                  type="text"
                  className="flex-1 border border-[#A4B6C8B3] rounded-md p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  name="postal_code"
                  placeholder="Postal Code"
                  required
                />
              </div>

              <button className="w-52 h-12 bg-pink-500 mt-10 text-white rounded hover:bg-pink-600 transition duration-300">
                Continue Shipping
              </button>
            </form>
          </section>
        </div>

        {/* Right Section (Sidebar) */}
        <div className="w-full lg:w-1/3">
          <HektoSidebar />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
