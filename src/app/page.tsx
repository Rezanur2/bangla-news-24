import MainNews from "@/components/MainNews";
import MostReadNews from "@/components/MostReadNews";
import NewsCard from "@/components/NewsCard";

interface IOtherSection {
  curationId: string;
  title: string;
  articles: {
    title: string;
    id: string;
    category: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    firstPublished: string;
  }[];
}

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;
  const otherSections: IOtherSection[] = sections.slice(1, 10);

  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {/* Main News */}
        <div className="col-span-2">
          <MainNews news={mainNews} />
          <div className="mt-5 grid gap-5">
            {otherSections.map((otherSectionNews) => (
              <div key={otherSectionNews.curationId}>
                <h1 className="font-bold text-lg border-red-700 my-3 border-b-2 pb-1">
                  {otherSectionNews.title}
                </h1>
                <div className="grid grid-cols-3 gap-4">
                  {otherSectionNews.articles.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* News List */}
        <div className="col-span-1">
          <MostReadNews />
        </div>
      </div>
    </div>
  );
}
