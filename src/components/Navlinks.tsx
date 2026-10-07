import Link from "next/link";

interface Navs {
  slug: string;
  title: string;
  topicId: string;
  url: string;
  scrapable: boolean;
}

const Navlinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const dataCategories = await res.json();
  const navs: Navs[] = dataCategories.data;
  const filteredNavs = navs.filter((nav) => nav.scrapable);
  return (
    <div className="flex mt-4 px-4 gap-5 text-neutral-700 text-sm">
      <Link href="/" className=" hover:text-red-700">
        হোম
      </Link>
      {filteredNavs.map((nav, ind) => (
        <Link key={ind} href={nav.slug} className=" hover:text-red-700">
          {nav.title}
        </Link>
      ))}
    </div>
  );
};

export default Navlinks;
