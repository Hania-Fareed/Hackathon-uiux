import Link from "next/link";
import { IoMdCheckmarkCircle } from "react-icons/io";
import Image from "next/image";

const HektoSidebar = () => {
  const products = [
    {
      id: 1,
      image: "/Rectangle 39.png",
      name: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      price: "$32.00",
    },
    {
      id: 2,
      image: "/Rectangle 40.png",
      name: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      price: "$32.00",
    },
    {
      id: 3,
      image: "/Rectangle 41.png",
      name: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      price: "$32.00",
    },
    {
      id: 4,
      image: "/Rectangle 42.png",
      name: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      price: "$32.00",
    },
    {
      id: 5,
      image: "/Rectangle 43.png",
      name: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      price: "$32.00",
    },
  ];

  return (
    <aside className="">
      <div className="grid lg:grid-cols-3 grid-cols-1">
      <div className="container mx-auto mt-28 space-y-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex items-center justify-between border-b border-gray-300 pb-4"
        >
          {/* Product Image */}
          <div className="flex items-center space-x-4">
            <Image
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
              className="rounded-md"
            />
            <div>
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-500">
                Color: <span className="text-blue-500">{product.color}</span>
              </p>
              <p className="text-sm text-gray-500">
                Size: <span className="text-blue-500">{product.size}</span>
              </p>
            </div>
          </div>
          {/* Product Price */}
          <div className="text-lg font-bold text-blue-900 ml-32">{product.price}</div>
        </div>
      ))}
    </div>
        {/* items */}
        <div className="col-span-2"></div>
        {/* summary */}
        <div className="bg-[#E8E6F1] p-5 rounded-lg w-96 mt-10">
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
          <div className="flex mt-5 items-center justify-center w-full bg-green-500 h-10 hover:bg-green-600 transition duration-300">
            <button className="text-medium text-white">Proceed To Checkout</button>
          </div>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default HektoSidebar;
