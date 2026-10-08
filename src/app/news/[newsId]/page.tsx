import Image from "next/image";

const NewsDetailsPage = async ({ params }: { params: { newsId: string } }) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
  );
  const data = await res.json();
  const news = data.data;

  const formatBengaliDateTime = (dateString: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleString("bn-BD", {
      dateStyle: "long",
      timeStyle: "short",
    });
  };

  return (
    <div className="flex flex-col items-center mx-auto max-w-2xl">
      <h1 className="text-2xl font-bold leading-snug text-neutral-900 sm:text-3xl">
        {news.title}
      </h1>
      <p className="my-3 text-lg text-neutral-600">
        {news.description.blocks[0].model.blocks[0].model.text}
      </p>
      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 border-y border-neutral-200 py-3 text-sm text-neutral-500 mb-8 w-full">
        <span>{formatBengaliDateTime(news.firstPublished)}</span>
        <span>{news.wordCount}  শব্দ</span>
      </div>
      {/* Image */}
      <Image
        src={news.imageUrl}
        width={600}
        height={600}
        className="w-full rounded-2xl"
        alt={`${news.imageAlt} || ${news.title}`}
      />

      <p className="mt-6 text-justify">{news.text}</p>
      
    </div>
  );
};

export default NewsDetailsPage;
