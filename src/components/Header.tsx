import Image from "next/image";
import Navlinks from "./Navlinks";
import UserInfo from "./UserInfo";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
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
        <UserInfo />
        <div className="flex justify-center">
          <Navlinks />
        </div>
      </div>
    </header>
  );
};

export default Header;
