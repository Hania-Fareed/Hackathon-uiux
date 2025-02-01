import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/product";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Footer from "@/app/components/footer";
import AddToCartButton from "@/app/components/AddToCartButton"; // Import the Client Component

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
  const {slug} = await params;
  const product = await getProduct(slug);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-slate-50 rounded-full mt-10 px-14">
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={500}
                height={500}
              />
            )}
          </div>
          <div>
            <h1 className="text-2xl font-bold py-20">{product.name}</h1>
            <p className="text-lg -mt-10">{product.description}</p>
            <p className="text-lg font-semibold text-pink-500 italic py-1">
              Rs. {product.price}
            </p>
          </div>
        </div>
        <div className="ml-56">
          <AddToCartButton product={product} /> {/* ✅ Use the Client Component here */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
