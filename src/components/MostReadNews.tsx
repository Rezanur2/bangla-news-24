interface MostReadNews {
  id: string;
  title: string;
}

const MostReadNews = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();
  const newsArticle: MostReadNews[] = data.data;
  return (
    <div className="card p-4 bg-base-100 border border-gray-300">
      <h2 className="font-bold text-lg mb-3">সর্বাধিক পঠিত</h2>
      <div className="grid gap-3">
        {newsArticle.map((news, ind) => (
          <div key={news.id} className="flex gap-3">
            <span className="text-red-700 text-xl font-bold">{ind + 1}</span>
            <h2 className="text-neutral-900 font-semibold">{news.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostReadNews;
