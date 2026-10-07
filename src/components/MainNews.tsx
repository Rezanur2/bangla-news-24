import Image from "next/image";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
  firstPublished: string;
}

const MainNews = ({ news }: { news: News[] }) => {
  const [firstNews, ...otherNews] = news;
  const formatBengaliDateTime = (dateString: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleString("bn-BD", {
      dateStyle: "long",
      timeStyle: "short",
    });
  };

  return (
    <div className="flex gap-4">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <Image
            src={firstNews.imageUrl}
            width={600}
            height={600}
            alt={firstNews.imageAlt}
          />
        </figure>
        <div className="card-body p-4">
          <p className="text-red-600 font-semibold">{firstNews.category}</p>
          <h2 className="card-title line-clamp-2">{firstNews.title}</h2>
          <p className="line-clamp-3 text-sm text-neutral-600">
            {firstNews.description}
          </p>
          {/* date */}
          <p className="text-xs text-neutral-400 mt-2">
            {formatBengaliDateTime(firstNews.firstPublished)}
          </p>
        </div>
      </div>
      <div className="grid gap-2">
        {otherNews.slice(0, 4).map((newsList) => (
          <div
            className="card bg-base-100 border border-gray-200 p-4"
            key={newsList.id}
          >
            <p className="text-red-700 font-semibold text-xs">
              {firstNews.category}
            </p>
            <div className="font-semibold text-neutral-900 mt-0.5">
              {newsList.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
