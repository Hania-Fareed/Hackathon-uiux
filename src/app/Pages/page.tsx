import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";

export default function Pages() {
    return (
        <div>
            <header className="relative py-16 mt-14 bg-purple-50">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold text-blue-900">404 Not Found</h1>
                    <p className="text-sm text-gray-500">
                        Home . Pages . <span className="text-pink-500">404 Not Found</span>
                    </p>
                </div>
            </header>
            <div className="flex items-center justify-center mt-20">
                <Image
                    src="/Group 197.png"
                    alt="404 not found"
                    width={900}
                    height={400}
                />
            </div>
            <div>
            <p className="flex items-center justify-center mt- text-blue-900 font-bold text-xl">
              opps! The page you requested was not found!
            </p>
            <div className="flex items-center justify-center mt-10 py-5">
            <Link className="flex w-36 h-10 bg-pink-500  items-center justify-center rounded-lg hover:bg-pink-600" href={"/"}>
            Back To Home
            </Link>
            </div>
            </div>
            <div className="ml-96 mt-5 py-10">
                <Image
                src="/image 117.png"
                alt="Footer"
                width={1000}
                height={200}
                />
            </div>
            <Footer/>
        </div>
    );
}
