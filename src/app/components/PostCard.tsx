import Image from "next/image";

interface PostCardProps {
  title: string;
  date: string;
  category: string;
  image: string; // Assuming the image is a string URL
  description: string;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  date,
  category,
  image,
  description,
}) => {
  return (
    <div className="mb-8 px-4 md:px-0 mt-20">
      {/* Image Section */}
      <div className="rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={1000}
          height={200}
          className="w-full h-auto"
        />
      </div>

      {/* Content Section */}
      <div className="mt-4">
        <div className="flex flex-wrap items-center space-x-2 text-sm">
          <span className="text-purple-500">{category}</span>
          <span className="text-gray-500">{date}</span>
        </div>
        <h2 className="text-lg md:text-2xl text-blue-900 font-semibold mt-2">
          {title}
        </h2>
        <p className="text-gray-400 mt-2">{description}</p>
        <a href="#" className="text-blue-500 mt-2 inline-block">
          Read More
        </a>
      </div>
    </div>
  );
};

export default PostCard;
