import Link from "next/link"
import Image from "next/image"
export default function Header(){
    return(
        <div>
          <div className="flex ml-96 p-5 w-auto h-14 bg-gray-50 mt-7">
            <h1 className="text-4xl font-semibold">Hekto</h1>
            <ul className="flex gap-8 ml-20 mt-1 font-medium">
              <Link href={"/"}><li className="text-red-500 hover:text-black transition-all duration-300">Home</li></Link>
                <Link href={"/pages"}><li className="hover:text-pink-600 transition-all duration-300">Pages</li></Link>
                <Link href={"/products"}><li className="hover:text-pink-600 transition-all duration-300">Products</li></Link>
                <Link href={"/Blog"}><li className="hover:text-pink-600 transition-all duration-300">Blog</li></Link>
                <Link href={"/shop"}><li className="hover:text-pink-600 transition-all duration-300">Shop</li></Link>
                <Link href={"/Contact"}><li className="hover:text-pink-600 transition-all duration-300">Contact</li></Link>
                <Link href={"image"}><li>
                    {/* <img className="absolute left-[1450px] top-[76px] " src="Group 15.png"/> */}
                    <Image 
                    className="absolute left-[1450px] top-[76px] " 
                    src = "/Group 15.png"
                    alt = "Logo"
                    width = {320}
                    height = {32}
                    />
                    {/* <img className="absolute left-[1730px] top-[87px]" src="Vector.png"/> */}
                    <Image
                    className="absolute left-[1730px] top-[87px]"
                    src="/Vector.png"
                    alt = "Vector"
                    width = {23}
                    height = {32}
                    />
                </li></Link>
            </ul>
          </div>
        </div>
    )
}