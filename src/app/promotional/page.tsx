"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { one } from "@/sanity/lib/queries";
import { Product } from "../../../types/product";
import Leatest from "../components/leatest";
import Offer from "../components/offer";
import Unique from "../components/unique";
import Trending from "../components/trending";
import Top from "../components/top";
import Update from "../components/update";
import Featured from "../components/featured product";

const slides = [
  {
    title: "Luxury Flower Shell Sofa Chair",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    buttonText: "Shop Now",
    chairImage: "/sofa header.png",
    lampImage: "/image 32.png",
  },
  {
    title: "Modern Chair Designs for Your Home",
    description:
      "Discover the latest modern furniture trends to elevate your living space.",
    buttonText: "Shop Now",
    chairImage: "/sofa header.png",
    lampImage: "/image 32.png",
  },
  {
    title: "Elegant Furniture for Every Space",
    description:
      "Bring timeless elegance to your home with our exclusive furniture collection.",
    buttonText: "Shop Now",
    chairImage: "/sofa header.png",
    lampImage: "/image 32.png",
  },
];

function HeroSection() {
  const [product, setProduct] = useState<Product[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(one);
      setProduct(fetchedProduct);
    }
    fetchProduct();
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const current = slides[currentSlide];

  return (
    <div>
    <div className="bg-purple-100">
      {product.map((product) => (
        <section
          key={product._id}
          className="relative py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden"
        >
          {/* Left Column: Lamp */}
          <div className="md:w-1/4 flex justify-center items-start relative">
            <div className="absolute top-[-385px] left-[50px] z-10">
              {product.image && (
                <Image
                  src={current.lampImage}
                  alt="Lamp Image"
                  width={387}
                  height={387}
                  className="object-contain"
                />
              )}
            </div>
          </div>

          {/* Center Column: Content */}
          <div className="md:w-1/3 max-w-lg text-center md:text-left flex flex-col justify-center">
            <p className="text-sm text-pink-500 font-medium">
              Best Furniture For Your Castle...
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-indigo-950 leading-tight mt-2">
              {current.title}
            </h1>
            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              {current.description}
            </p>
            <Link
              href="/shop-grid"
              className="inline-block text-sm py-3 px-6 rounded-lg mt-6 w-1/3 text-center
              bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-md hover:shadw-lg 
                     hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              {current.buttonText}
            </Link>
          </div>

          {/* Right Column: Chair Image */}
          <div className="md:w-1/3 flex justify-center items-center relative">
            <div className="relative bg-gradient-to-r from-pink-100 to-purple-200 rounded-full p-10 shadow-xl mt-10 mx-auto">
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={706}
                  height={689}
                  className="object-contain w-full h-auto"
                />
              )}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index
                    ? "bg-gradient-to-r from-purple-500 to-pink-500"
                    : "bg-gray-300 hover:bg-gray-400"
                    
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100"
            aria-label="Previous Slide"
          >
            ❮
          </button>
          <button
            onClick={handleNextSlide}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100"
            aria-label="Next Slide"
          >
            ❯
          </button>
        </section>
      ))}
    </div>
    <Featured/>
    <Leatest/>
    <Offer/>
    <Unique/>
    <Trending/>
    <Top/>
    <Update/>
    </div>
  );
}

export default HeroSection;
