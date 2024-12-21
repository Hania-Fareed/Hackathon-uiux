import Contacts from "../components/navbar";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";

export default function Contact() {
  return (
    <div>
      <Contacts />
      <Header />

      <header className="relative py-16 mt-14 bg-purple-50">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-blue-900">Contact Us</h1>
          <p className="text-sm text-gray-500">
            Home . Pages . <span className="text-pink-500">Contact us</span>
          </p>
        </div>
      </header>

      <div className="flex space-x-16 ml-96 mt-24">
        {/* Information About Us Section */}
        <section className="w-1/2">
          <h2 className="text-blue-900 font-bold text-4xl">Information About Us</h2>
          <p className="mt-4 text-blue-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
          </p>
          {/* <img src="group 94.png" alt="Information about us" className="mt-8" /> */}
          <Image 
          className="mt-8"
          src="/group 94.png"
          alt="Information about us"
          width={100}
          height={400}
          />
          

        </section>

        {/* Contact Way Section */}
        <section className="w-1/2 space-y-16">
          <h2 className="text-blue-900 font-bold text-4xl">Contact Way</h2>
          <div className="grid grid-cols-2 gap-3 mt-10">
            {/* First Contact */}
            <div className="flex items-center">
              <div className="bg-purple-950 w-10 h-10 rounded-full"></div>
              <div className="ml-4">
                <p className="text-gray-500 text-sm">Tel: 877-67-88-99</p>
                <p className="text-gray-500 text-sm">E-Mail: shop@store.com</p>
              </div>
            </div>

            {/* Second Contact */}
            <div className="flex items-center">
              <div className="bg-pink-500 w-10 h-10 rounded-full"></div>
              <div className="ml-4">
                <p className="text-gray-500 text-sm">Support Forum</p>
                <p className="text-gray-500 text-sm">For over 24hr</p>
              </div>
            </div>

            {/* Third Contact */}
            <div className="flex items-center">
              <div className="bg-orange-300 w-10 h-10 rounded-full"></div>
              <div className="ml-4">
                <p className="text-gray-500 text-sm">20 Margaret st, London</p>
                <p className="text-gray-500 text-sm">Great Britain, 3NM98-LK</p>
              </div>
            </div>

            {/* Fourth Contact */}
            <div className="flex items-center">
              <div className="bg-green-400 w-10 h-10 rounded-full"></div>
              <div className="ml-4">
                <p className="text-gray-500 text-sm">Free standard shipping</p>
                <p className="text-gray-500 text-sm">on all orders.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="ml-96">
        <h2 className="text-blue-900 font-bold text-4xl">Get In Touch</h2>
        <p className="mt-4 text-blue-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
        </p>
      </section>

      {/* Contact Form in a Box */}
      <section className=" max-w-3xl ml-72 space-y-8 p-6">
        <div className="space-y-4">
          {/* Name and Email sections side by side */}
          <div className="flex space-x-4">
            {/* Your Name */}
            <div className="flex flex-col w-1/2">
              <label className="text-[#8A8FB9] text-[16px] font-lato">Your Name*</label>
              <input type="text" className="border border-[#A4B6C8B3] rounded-[3px] p-2" />
            </div>

            {/* Your E-mail */}
            <div className="flex flex-col w-1/2">
              <label className="text-[#8A8FB9] text-[16px] font-lato">Your E-mail*</label>
              <input type="email" className="border border-[#A4B6C8B3] rounded-[3px] p-2" />
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col">
            <label className="text-[#8A8FB9] text-[16px] font-lato">Subject*</label>
            <input type="text" className="border border-[#A4B6C8B3] rounded-[3px] p-2" />
          </div>

          {/* Type Your Message */}
          <div className="flex flex-col">
            <label className="text-[#8A8FB9] text-[16px] font-lato">Type Your Message*</label>
            <textarea className="border border-[#A4B6C8B3] rounded-[3px] p-2" rows={5}></textarea>
          </div>
        </div>

        {/* Send Mail Button */}
        <div className="flex justify-center">
          <button className="relative left-[-300px] bg-[#FB2E86] text-white text-[16px] font-josefin-sans py-2 px-8 rounded-[3px] hover:bg-purple-600 transition-all duration-300">
            Send Mail
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
