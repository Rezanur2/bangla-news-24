import Image from "next/image";
import Navlinks from "./Navlinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  console.log(date);
  return (
    <header>
      <div className="relative mx-auto max-w-7xl px-4 py-4">
        <div className=" flex items-center justify-center gap-1 flex-row sm:gap-2 max-sm:-ml-45">
        <Image
          src="/logo.webp"
          alt="Bangla News 24"
          width={40}
          height={40}
          priority
        />
        <div className="flex flex-col items-center sm:items-start">
          <span className="text-xl sm:text-2xl font-bold text-red-700">
            Bangla News 24
          </span>
          <span className="text-xs text-neutral-500">{date}</span>
        </div>
      </div>
      <div className="absolute right-4 top-4 flex items-center justify-self-end gap-1.5 text-sm">
        <button className="btn px-2 py-1.5 h-fit text-neutral-700 bg-white border-0">সাইন ইন</button>
        <button className="btn bg-red-700 text-white px-3 py-1.5 h-fit hover:bg-black">সাইন আপ</button>
        </div>
        <div className="flex justify-center">
          <Navlinks />
        </div>
        </div>
    </header>
  );
};

export default Header;
