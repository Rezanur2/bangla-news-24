import NewsCard from "@/components/NewsCard";

interface News {
  title: string;
  id: string;
  category: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  firstPublished: string;
}

const CategoryNewsPage = async ({ params }: { params: { categoryId: [] } }) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );
  const data = await res.json();
  const categoryNews: News[] = data.data;

  return (
    <div>
      <h1 className="text-2xl font-bold border-b-2 border-red-700 my-5">
        {data.title}
      </h1>
      <div className="grid grid-cols-3 gap-10">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNewsPage;
