import React from "react";
import Footer from "./footer";
import Link from "next/link";
import { IoMdCheckmarkCircle } from "react-icons/io";

const HektoSidebar = () => {
  return (
    <div className="mt-[50px] mb-[100px]">
      <div className="grid lg:grid-cols-3 grid-cols-1">
        {/* <div className="text-blue-900 mt-10">
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
              </div> */}
        {/* items */}
        <div className="col-span-2"></div>
        {/* summary */}
        <div className="bg-[#E8E6F1] p-5 rounded-lg w-96 ml-28">
          <div className="text-lg text-blue-900 font-semibold tracking-tight uppercase">
            <div className="flex items-center justify-between capitalize">
              <h2>Subtotals:</h2>
              <h2 className="font-medium">$219.00</h2>
            </div>
            {/* Divider */}
            <hr className="border-t-2 border-gray-300 my-2" />
            <div className="flex items-center justify-between capitalize mt-6">
              <h2>Totals:</h2>
              <h2 className="font-medium">$325.00</h2>
            </div>
            <hr className="border-t-2 border-gray-300 my-2" />
          </div>
          {/* Note */}
          <p className="text-xs font-semibold tracking-tight ml-10 text-gray-400 italic mt-5">
          Shipping & taxes calculated at checkout
          </p>
          <IoMdCheckmarkCircle className="text-green-600 -mt-4 ml-5"/>
          {/* Button */}
          <Link href={"/"}>
          <div className="flex mt-8 items-center justify-center w-full bg-green-500 h-10 hover:bg-green-600 transition duration-300">
            <button className="text-medium text-white">Proceed To Checkout</button>
          </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HektoSidebar;
