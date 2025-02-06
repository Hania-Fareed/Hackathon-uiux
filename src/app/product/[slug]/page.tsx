import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/product";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Footer from "@/app/components/footer";
import AddToCartButton from "@/app/components/AddToCartButton";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
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
    }`, { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg p-6 flex justify-center">
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={500}
                height={500}
                className="rounded-lg shadow-md w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
              />
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-lg text-gray-600">{product.description}</p>
            <p className="text-2xl font-semibold text-pink-500">Rs. {product.price}</p>

            {/* Add to Cart Button */}
            <div className="flex justify-center md:justify-start">
              <AddToCartButton product={product} />
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
