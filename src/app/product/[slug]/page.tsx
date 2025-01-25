"use client"
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/product";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { addToCart } from "@/app/actions/actions";
import Footer from "@/app/components/footer";

interface ProductPageProps {
  params: { slug: string }; 
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      _type,
      name,
      price,
      description,
      image
    }`,{ slug }
  );
}

const handleAddToCart = (e: React.MouseEvent, product: Product) => {
      e.preventDefault()
      Swal.fire({
        title: `${product.name}`,
        text: "Thanks for Add to Cart!",
        icon: "success",
        timer: 1000
      });
      addToCart(product)
      
    }

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.slug); 

  return (
    <div>
    <div className="max-w-7xl mx-auto px-4 py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className=" bg-slate-50 rounded-full mt-10 px-14">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={500}
              height={500}
              className=""
            />
          )}
        </div>
        <div>
          <h1 className="text-2xl font-bold py-20 ">{product.name}</h1>
          <p className="text-lg -mt-10">{product.description}</p>
          <p className="text-lg font-semibold text-pink-500 italic py-1 ">Rs. {product.price}</p>
        </div>
      </div>
      <div className="ml-56">
      <button className='ml-96 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-10 rounded-lg shadow-md hover:shadw-lg 
                     hover:scale-110 transition-transform duration-300 ease-in-out'
                     onClick={(e) => handleAddToCart(e, product)}>
        Add To cart     
      </button>
      </div>
      </div>
      <Footer/>
    </div>
  );
}