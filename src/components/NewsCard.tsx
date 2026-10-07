import Image from "next/image";
import React from "react";

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
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <Image
            src={news.imageUrl}
            width={600}
            height={600}
            alt={news.imageAlt}
          />
        </figure>
        <div className="card-body px-3 py-4">
          <p className="text-red-600 text-xs font-semibold">{news.category}</p>
          <h2 className="text-base font-semibold line-clamp-2">{news.title}</h2>
          <p className="text-neutral-600 text-sm line-clamp-2">
            {news.description}
          </p>
          {/* date */}
          <p className="text-xs text-neutral-400 mt-2">
            {formatBengaliDateTime(news.firstPublished)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
