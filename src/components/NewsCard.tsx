import Image from "next/image";
import Link from "next/link";

interface News {
  title: string;
  id: string;
  category: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  firstPublished: string;
}

const NewsCard = ({ news }: { news: News }) => {
  const formatBengaliDateTime = (dateString: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleString("bn-BD", {
      dateStyle: "long",
      timeStyle: "short",
    });
  };

  return (
    <Link href={`/news/${news.id}`} className="block w-full h-full group">
      <div className="card bg-base-100 shadow-sm overflow-hidden flex flex-col h-full transition-shadow duration-200 group-hover:shadow-md">
        <figure className="relative aspect-video w-full">
          <Image
            src={news.imageUrl}
            fill
            className="object-contain"
            alt={news.imageAlt}
          />
        </figure>
        <div className="card-body p-4">
          <div className="w-full space-y-2">
            <p className="text-red-600 text-xs font-semibold m-0 p-0">
              {news.category}
            </p>
            <h2 className="text-base font-semibold line-clamp-2 mt-1 p-0">
              {news.title}
            </h2>
            <p className="text-neutral-600 text-sm line-clamp-2 mt-1 p-0">
              {news.description}
            </p>
          </div>
          {/* date */}
          <p className="text-xs text-neutral-400 mt-2">
            {formatBengaliDateTime(news.firstPublished)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
