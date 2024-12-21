import Link from "next/link"
export default function Contacts(){
    return(
        <div>
            <ul className="flex items-center gap-9 bg-purple-600 h-10 text-white">
                <Link className="hover:text-black transition-all duration-300" href={"/"}><li className="ml-96">haniafareed7@gmail.com</li></Link>
                <Link className="hover:text-black transition-all duration-300" href={"/"}><li className="mr-64">(0333)3538055</li></Link>
                <Link className="hover:text-black transition-all duration-300" href={"/"}><li className="ml-96 ">English</li></Link>
                <Link className="hover:text-black transition-all duration-300" href={"/"}><li>USD</li></Link>  
                <Link className="hover:text-black transition-all duration-300" href={"/Login"}><li>Login</li></Link>
                <Link className="hover:text-black transition-all duration-300" href={"/"}><li>Wishlist</li></Link>
            </ul>
        </div>
    )
}