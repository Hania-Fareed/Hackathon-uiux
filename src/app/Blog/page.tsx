import Sidebar from "../components/Sidebar";
import PostCard from "../components/PostCard";
import Footer from "../components/footer";
import Image from "next/image";

const posts = [
  {
    title: "Mauris at orci non vulputate diam tincidunt nec.",
    date: "Aug 07 2020",
    category: "Surf Avalon",
    image: "/unsplash 2.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
    date: "Aug 07 2020",
    category: "Surf Avalon",
    image: "/unsplash 3.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Sit nam congue feugiat nisl, mauris amet nisi.",
    date: "Aug 07 2020",
    category: "Surf Avalon",
    image: "/unsplash 4.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function Blog() {
  return (
    <div>
       <header className="relative py-16 mt-14 bg-purple-50">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold text-blue-900">Blog Page</h1>
                    <p className="text-sm text-gray-500">
                        Home . Pages . <span className="text-pink-500">Blog Page</span>
                    </p>
                </div>
            </header>
      <main className="container mx-auto px-4">
        <div className="flex">
          <div className="w-3/4">
            {posts.map((post, index) => (
              <PostCard key={index} {...post} />
            ))}
          </div>
          <Sidebar />
        </div>
      </main>
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
