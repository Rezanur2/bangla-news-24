import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Headlines {
  title: string;
  id: string;
}

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const newsObj = await res.json();
  const headlines: Headlines[] = newsObj.data;
  return (
    <div className="bg-red-700 text-white text-sm">
      <div className="flex mx-auto max-w-7xl">
        <div className="px-5 py-2 bg-red-800 font-bold">সর্বশেষ</div>
        <MarqueeText className="py-2" direction="right" duration={10}>
          {headlines.map((news) => (
            <span key={news.id}>
              <span>{news.title}</span>
              <span className="mx-5">•</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
