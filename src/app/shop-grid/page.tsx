import Footer from "../components/footer";import { MdWindow } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineZoomIn } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import Image from "next/image";

export default function Shop() {
    return (
        <div>
            <header className="relative py-6 bg-[#E7E4F8]">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold text-blue-900">Shop Grid Default</h1>
                    <p className="text-sm text-black">
                        Home . Pages <span className="text-pink-500">. Shop Grid Default</span>
                    </p>
                </div>
            </header>
            {/* Heading and Filters Section */}
            <div className="flex justify-between items-center py-28 px-4 mx-auto max-w-7xl">
                {/* Heading */}
                <div>
                    <h1 className="text-xl font-semibold text-blue-900">Ecommerce Accessories &amp; Fashion Items</h1>
                    <p className="mt-2 text-sm text-slate-400">About 9,620 results (0.62 seconds)</p>
                </div>
                {/* Filters */}
                <div className="flex items-center gap-3">
                    {/* Per Page */}
                    <div className="flex items-center space-x-2">
                        <label className="text-sm font-medium text-blue-900">Per Page:</label>
                        <div className="w-20 h-5 border"></div>
                    </div>
                    {/* Sort By */}
                    <div className="flex items-center space-x-2">
                        <label className="text-sm font-medium text-blue-900">Sort By:</label>
                        <select className="block text-xs text-slate-400 w-32 pl-3 pr-10 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option>Best Match</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>
                    {/* View */}
                    <div className="flex items-center space-x-2">
                        <label className="text-sm font-medium text-blue-900">View:</label>
                        <div className="flex space-x-2 mt-2">
                        <MdWindow />
                        <TfiMenuAlt />
                        <div className="w-32 h-5 border"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center space-y-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mt-16">
        {/* Product Card */}
        <div className="flex flex-col items-center text-center w-72 p-4">
            {/* Product Image */}
            <div className="w-full h-72 bg-gray-100 flex items-center justify-center">
                <Image
                    src="/image 9.png"
                    alt="Product Image"
                    width={300}
                    height={100}
                />
            </div>
            {/* Product Details */}
            <div className="mt-4">
                <h2 className="text-lg font-semibold text-blue-900">Vel elit euismod</h2>
                <p className="ml-10 mt-1">
                    <Image
                    src="/Group 44.png"
                    alt="group44"
                    width={40}
                    height={10}
                    />
                </p>
                <div className="flex items-center ml-3 mt-1 space-x-2">
                  <p className="text-blue-800 font-semibold text-sm">$26.00</p>
                  <p className="text-pink-500 line-through font-semibold text-sm">$42.00</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center text-center w-72 p-4">
    {/* Product Image with Icons */}
    <div className="w-full h-72 bg-green-50 flex items-center justify-center relative">
        {/* Icons on the left */}
        <div className="absolute left-4 flex flex-col space-y-3 mt-28 text-blue-900">
            <FiShoppingCart className="text-xl" />
            <MdOutlineZoomIn className="text-xl"/>
            <MdFavoriteBorder className="text-xl" />
        </div>
        {/* Product Image */}
        <Image
            src="/image 1165.png"
            alt="Product Image"
            width={200}
            height={100}
        />
    </div>
    {/* Product Details */}
    <div className="mt-4">
        <h2 className="text-base font-semibold text-blue-900">Ultricies condimentum imperdiet</h2>
        <p className="ml-24 mt-1">
            <Image
                src="/Group 44.png"
                alt="group44"
                width={40}
                height={10}
            />
        </p>
        <div className="flex items-center ml-20 mt-1 space-x-2">
            <p className="text-blue-800 font-semibold text-sm">$26.00</p>
            <p className="text-pink-500 line-through font-semibold text-sm">$42.00</p>
        </div>
    </div>
</div>
       <div className="flex flex-col items-center text-center w-72 p-4">
            {/* Product Image */}
            <div className="w-full h-72 bg-gray-100 flex items-center justify-center">
                <Image
                    src="/image 1173.png"
                    alt="Product Image"
                    width={300}
                    height={100}
                />
            </div>
            {/* Product Details */}
            <div className="mt-4">
                <h2 className="text-lg font-semibold text-blue-900">Vitae suspendisse sed</h2>
                <p className="ml-20 mt-1">
                    <Image
                    src="/Group 44.png"
                    alt="group44"
                    width={40}
                    height={10}
                    />
                </p>
                <div className="flex items-center ml-12 mt-1 space-x-2">
                  <p className="text-blue-800 font-semibold text-sm">$26.00</p>
                  <p className="text-pink-500 line-through font-semibold text-sm">$42.00</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center text-center w-72 p-4">
            {/* Product Image */}
            <div className="w-full h-72 bg-gray-100 flex items-center justify-center">
                <Image
                    src="/10011 1.png"
                    alt="Product Image"
                    width={300}
                    height={100}
                />
            </div>
            {/* Product Details */}
            <div className="mt-4">
                <h2 className="text-lg font-semibold text-blue-900">Sed at fermentum</h2>
                <p className="ml-14 mt-1">
                    <Image
                    src="/Group 44.png"
                    alt="group44"
                    width={40}
                    height={10}
                    />
                </p>
                <div className="flex items-center ml-8 mt-1 space-x-2">
                  <p className="text-blue-800 font-semibold text-sm">$26.00</p>
                  <p className="text-pink-500 line-through font-semibold text-sm">$42.00</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="flex flex-col items-center space-y-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mt-16">
        {/* Product Card */}
        <div className="flex flex-col items-center text-center w-72 p-4">
            {/* Product Image */}
            <div className="w-full h-72 bg-gray-100 flex items-center justify-center">
                <Image
                    src="/unnamed 1.png"
                    alt="Product Image"
                    width={130}
                    height={100}
                />
            </div>
            {/* Product Details */}
            <div className="mt-4">
                <h2 className="text-lg font-semibold text-blue-900">Fusce pellentesque at</h2>
                <p className="ml-20 mt-1">
                    <Image
                    src="/Group 44.png"
                    alt="group44"
                    width={40}
                    height={10}
                    />
                </p>
                <div className="flex items-center ml-14 mt-1 space-x-2">
                  <p className="text-blue-800 font-semibold text-sm">$26.00</p>
                  <p className="text-pink-500 line-through font-semibold text-sm">$42.00</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center text-center w-72 p-4">
    {/* Product Image with Icons */}
    <div className="w-full h-72 bg-gray-100 flex items-center justify-center relative">
        {/* Product Image */}
        <Image
            src="/1562.png"
            alt="Product Image"
            width={200}
            height={100}
        />
    </div>
    {/* Product Details */}
    <div className="mt-4">
        <h2 className="text-base font-semibold text-blue-900">Vestibulum magna laoreet</h2>
        <p className="ml-20 mt-1">
            <Image
                src="/Group 44.png"
                alt="group44"
                width={40}
                height={10}
            />
        </p>
        <div className="flex items-center ml-14 mt-1 space-x-2">
            <p className="text-blue-800 font-semibold text-sm">$26.00</p>
            <p className="text-pink-500 line-through font-semibold text-sm">$42.00</p>
        </div>
    </div>
</div>
       <div className="flex flex-col items-center text-center w-72 p-4">
            {/* Product Image */}
            <div className="w-full h-72 bg-gray-100 flex items-center justify-center">
                <Image
                    src="/purepng 1.png"
                    alt="Product Image"
                    width={130}
                    height={100}
                />
            </div>
            {/* Product Details */}
            <div className="mt-4">
                <h2 className="text-lg font-semibold text-blue-900">Sollicitudin amet orci</h2>
                <p className="ml-16 mt-1">
                    <Image
                    src="/Group 44.png"
                    alt="group44"
                    width={40}
                    height={10}
                    />
                </p>
                <div className="flex items-center ml-10 mt-1 space-x-2">
                  <p className="text-blue-800 font-semibold text-sm">$26.00</p>
                  <p className="text-pink-500 line-through font-semibold text-sm">$42.00</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center text-center w-72 p-4">
            {/* Product Image */}
            <div className="w-full h-72 bg-gray-100 flex items-center justify-center">
                <Image
                    src="/image 1164.png"
                    alt="Product Image"
                    width={200}
                    height={100}
                />
            </div>
            {/* Product Details */}
            <div className="mt-4">
                <h2 className="text-lg font-semibold text-blue-900">Ultrices mauris sit</h2>
                <p className="ml-14 mt-1">
                    <Image
                    src="/Group 44.png"
                    alt="group44"
                    width={40}
                    height={10}
                    />
                </p>
                <div className="flex items-center ml-8 mt-1 space-x-2">
                  <p className="text-blue-800 font-semibold text-sm">$26.00</p>
                  <p className="text-pink-500 line-through font-semibold text-sm">$42.00</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="flex flex-col items-center space-y-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mt-16">
        {/* Product Card */}
        <div className="flex flex-col items-center text-center w-72 p-4">
            {/* Product Image */}
            <div className="w-full h-72 bg-gray-100 flex items-center justify-center">
                <Image
                    src="/res.png"
                    alt="Product Image"
                    width={200}
                    height={100}
                />
            </div>
            {/* Product Details */}
            <div className="mt-4">
                <h2 className=" font-semibold text-blue-900">Pellentesque condimentum ac</h2>
                <p className="ml-20 mt-1">
                    <Image
                    src="/Group 44.png"
                    alt="group44"
                    width={40}
                    height={10}
                    />
                </p>
                <div className="flex items-center ml-14 mt-1 space-x-2">
                  <p className="text-blue-800 font-semibold text-sm">$26.00</p>
                  <p className="text-pink-500 line-through font-semibold text-sm">$42.00</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center text-center w-72 p-4">
    {/* Product Image with Icons */}
    <div className="w-full h-72 bg-gray-100 flex items-center justify-center relative">
        {/* Product Image */}
        <Image
            src="/cam 2.png"
            alt="Product Image"
            width={200}
            height={100}
        />
    </div>
    {/* Product Details */}
    <div className="mt-4">
        <h2 className="text-base font-semibold text-blue-900">Cras scelerisque velit</h2>
        <p className="ml-16 mt-1">
            <Image
                src="/Group 44.png"
                alt="group44"
                width={40}
                height={10}
            />
        </p>
        <div className="flex items-center ml-12 mt-1 space-x-2">
            <p className="text-blue-800 font-semibold text-sm">$26.00</p>
            <p className="text-pink-500 line-through font-semibold text-sm">$42.00</p>
        </div>
    </div>
</div>
       <div className="flex flex-col items-center text-center w-72 p-4">
            {/* Product Image */}
            <div className="w-full h-72 bg-gray-100 flex items-center justify-center">
                <Image
                    src="/czNm.png"
                    alt="Product Image"
                    width={200}
                    height={100}
                />
            </div>
            {/* Product Details */}
            <div className="mt-4">
                <h2 className="text-lg font-semibold text-blue-900">Lectus vulputate faucibus</h2>
                <p className="ml-20 mt-1">
                    <Image
                    src="/Group 44.png"
                    alt="group44"
                    width={40}
                    height={10}
                    />
                </p>
                <div className="flex items-center ml-14 mt-1 space-x-2">
                  <p className="text-blue-800 font-semibold text-sm">$26.00</p>
                  <p className="text-pink-500 line-through font-semibold text-sm">$42.00</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center text-center w-72 p-4">
            {/* Product Image */}
            <div className="w-full h-72 bg-gray-100 flex items-center justify-center">
                <Image
                    src="/10011 1.png"
                    alt="Product Image"
                    width={200}
                    height={100}
                />
            </div>
            {/* Product Details */}
            <div className="mt-4">
                <h2 className="text-lg font-semibold text-blue-900">Purus risus, ut</h2>
                <p className="ml-14 mt-1">
                    <Image
                    src="/Group 44.png"
                    alt="group44"
                    width={40}
                    height={10}
                    />
                </p>
                <div className="flex items-center ml-8 mt-1 space-x-2">
                  <p className="text-blue-800 font-semibold text-sm">$26.00</p>
                  <p className="text-pink-500 line-through font-semibold text-sm">$42.00</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="ml-96 mt-5 py-10">
    <Image
    src="/image 117.png"
    alt="Footer"
    width={1000}
    height={200}
    />
</div>

            <Footer/>
        </div>
    );
}
