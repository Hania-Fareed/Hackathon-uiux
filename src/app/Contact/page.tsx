"use client";
import React from "react";
import Footer from "../components/footer";
import Image from "next/image";
import Swal from "sweetalert2";
import Link from "next/link";

const Contact = () => {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "b2a921ef-606a-45d4-96a1-83dbb0e6e6a4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  };

  return (
    <div>
    <div className="container mx-auto px-4">
      {/* Header */}
      <header className="relative py-16 mt-14 bg-purple-50 text-center">
        <h1 className="text-2xl font-bold text-blue-900">Contact Us</h1>
        <p className="text-sm text-gray-500">
          <Link href="/">Home</Link> . Pages . <span className="text-pink-500">Contact Us</span>
        </p>
      </header>

      {/* Contact Information */}
      <div className="flex flex-col lg:flex-row gap-10 mt-10 px-4">
        {/* Information Section */}
        <section className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-blue-900 font-bold text-3xl">Information About Us</h2>
          <p className="mt-4 text-blue-800 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
          </p>
          <div className="flex justify-center lg:justify-start mt-6">
            <Image src="/group 94.png" alt="Information about us" width={100} height={100} />
          </div>
        </section>

        {/* Contact Methods */}
        <section className="lg:w-1/2">
          <h2 className="text-blue-900 font-bold text-3xl text-center lg:text-left">Contact Way</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {[
              { bg: "bg-purple-950", text1: "Tel: 877-67-88-99", text2: "E-Mail: shop@store.com" },
              { bg: "bg-pink-500", text1: "Support Forum", text2: "For over 24hr" },
              { bg: "bg-orange-300", text1: "20 Margaret St, London", text2: "Great Britain, 3NM98-LK" },
              { bg: "bg-green-400", text1: "Free standard shipping", text2: "on all orders." },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className={`${item.bg} w-10 h-10 rounded-full`}></div>
                <div className="ml-4">
                  <p className="text-gray-500 text-sm">{item.text1}</p>
                  <p className="text-gray-500 text-sm">{item.text2}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Get in Touch */}
      <section className="text-center mt-16 px-4">
        <h2 className="text-blue-900 font-bold text-3xl">Get In Touch</h2>
        <p className="mt-4 text-blue-800 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>

      {/* Contact Form */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-10 px-4">
        <section className="w-full max-w-lg">
          <form onSubmit={onSubmit} className="bg-white p-6 rounded-lg shadow-lg space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-gray-700">Your Name*</label>
                <input type="text" name="name" placeholder="Enter your name" required className="border p-2 rounded" />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-700">Your E-mail*</label>
                <input type="email" name="email" placeholder="Your E-mail" required className="border p-2 rounded" />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700">Subject*</label>
              <input type="text" name="subject" placeholder="Subject" required className="border p-2 rounded" />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700">Type Your Message*</label>
              <textarea name="message" placeholder="Type Your Message" required rows={4} className="border p-2 rounded"></textarea>
            </div>
            <button type="submit" className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition">Send Mail</button>
          </form>
        </section>
        <Image src="/group 124.png" alt="Contact Form" width={400} height={400} className="hidden lg:block" />
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;