import Image from "next/image";
import { FaFacebookF, FaSquareInstagram, FaTwitter } from "react-icons/fa6";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-full md:w-1/4 mt-10 md:mt-20 md:ml-8 lg:ml-24 px-4">
      {/* Search Section */}
      <div className="mb-6">
        <h2 className="font-bold text-blue-900 text-xl md:text-2xl">Search</h2>
        <div className="relative mt-3">
          <input
            type="text"
            className="w-full md:w-64 border px-3 py-2 rounded hover:border-gray-400 focus:outline-none"
            placeholder="Search for posts"
          />
        </div>
      </div>

      {/* Categories Section */}
      <div className="text-blue-900">
        <h2 className="font-bold text-xl md:text-2xl mt-10">Categories</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7">
          <li className="flex items-center justify-center bg-pink-500 text-white rounded-lg py-2 px-4">
            Hobbies (14)
          </li>
          <li className="py-2 px-4">Women (21)</li>
          <li className="py-2 px-4">Women (21)</li>
          <li className="py-2 px-4">Women (21)</li>
          <li className="py-2 px-4">Women (21)</li>
          <li className="py-2 px-4">Women (21)</li>
        </ul>
      </div>

      {/* Recent Posts Section */}
      <div className="text-blue-900 mt-10">
        <h2 className="font-bold text-xl md:text-2xl">Recent Posts</h2>
        {[...Array(4)].map((_, index) => (
          <div className="flex items-start mt-8" key={index}>
            <Image
              src={`/Rectangle 12${6 + index}.png`}
              alt={`recent-post-${index}`}
              width={100}
              height={30}
              className="w-20 h-auto"
            />
            <div className="ml-3">
              <h2 className="text-sm font-medium">It is a long established fact</h2>
              <p className="text-xs text-slate-400">Aug 09 2020</p>
            </div>
          </div>
        ))}
      </div>

      {/* Sale Products Section */}
      <div className="text-blue-900 mt-10">
        <h2 className="font-bold text-xl md:text-2xl">Sale Products</h2>
        {[...Array(3)].map((_, index) => (
          <div className="flex items-start mt-8" key={index}>
            <Image
              src={`/Rectangle 13${0 + index}.png`}
              alt={`sale-product-${index}`}
              width={100}
              height={30}
              className="w-20 h-auto"
            />
            <div className="ml-3">
              <h2 className="text-sm font-medium">Sample Product Title</h2>
              <p className="text-xs text-slate-400">Aug 09 2020</p>
            </div>
          </div>
        ))}
      </div>

      {/* Offer Products Section */}
      {/* Offer Products Section */}
<div className="text-blue-900 mt-10">
  <h2 className="font-bold text-xl md:text-2xl">Offer Products</h2>
  {/* First Row */}
  <div className="mt-8 flex flex-col md:flex-row items-start gap-4">
    {/* First Image and Text */}
    <div className="flex-1">
      <Image
        src="/Rectangle 133.png"
        alt="group197"
        width={200}
        height={30}
        className="w-full h-auto"
      />
      <p className="text-sm text-blue-900 mt-2">Duis lectus est.</p>
      <p className="text-xs text-gray-400">$12.00 - $15.00</p>
    </div>

    {/* Second Image and Text */}
    <div className="flex-1">
      <Image
        src="/Mask Group.png"
        alt="new group"
        width={200}
        height={30}
        className="w-full h-auto"
      />
      <p className="text-sm text-blue-900 mt-2">Sed placerat.</p>
      <p className="text-xs text-gray-400">$12.00 - $15.00</p>
    </div>
  </div>

  {/* Second Row */}
  <div className="mt-8 flex flex-col md:flex-row items-start gap-4">
    {/* First Image and Text */}
    <div className="flex-1">
      <Image
        src="/Rectangle134.png"
        alt="group197"
        width={200}
        height={30}
        className="w-full h-auto"
      />
      <p className="text-sm text-blue-900 mt-2">Netus proin.</p>
      <p className="text-xs text-gray-400">$12.00 - $15.00</p>
    </div>

    {/* Second Image and Text */}
    <div className="flex-1">
      <Image
        src="/Mask Group 2.png"
        alt="new group"
        width={200}
        height={30}
        className="w-full h-auto"
      />
      <p className="text-sm text-blue-900 mt-2">Platea in.</p>
      <p className="text-xs text-gray-400">$12.00 - $15.00</p>
    </div>
  </div>
</div>


      {/* Follow Us Section */}
      <div className="text-blue-900 mt-10">
        <h2 className="font-bold text-xl md:text-2xl">Follow Us</h2>
        <div className="flex mt-5 space-x-5">
          <Link href={"/"}>
            <FaFacebookF className="text-2xl text-blue-900" />
          </Link>
          <Link href={"/"}>
            <FaSquareInstagram className="text-2xl text-blue-900" />
          </Link>
          <Link href={"/"}>
            <FaTwitter className="text-2xl text-blue-900" />
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
