import Image from "next/image";

const NewsDetailsPage = async ({ params }: { params: { newsId: string } }) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
  );
  const data = await res.json();
  const news = data.data;

  return (
    <div className="flex flex-col items-center mx-auto max-w-2xl">
      <h1 className="text-2xl font-bold leading-snug text-neutral-900 sm:text-3xl">
        {news.title}
      </h1>
      <p className="my-3 text-lg text-neutral-600">
        {news.description.blocks[0].model.blocks[0].model.text}
      </p>
      {/* Image */}
      <Image
        src={news.imageUrl}
        width={600}
        height={600}
        className="w-full rounded-2xl"
        alt={`${news.imageAlt} || ${news.title}`}
      />

      <p>{news.text}</p>
    </div>
  );
};

export default NewsDetailsPage;
