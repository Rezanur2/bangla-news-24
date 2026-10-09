"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const UserInfo = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="absolute right-4 top-4 flex items-center justify-self-end gap-1.5 text-sm">
      {user ? (
        <div className="flex flex-col gap-2 items-center">
          <Link href={"/profile"}>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-6 rounded-full ring-2 ring-offset-2">
                <Image
                  alt="Tailwind-CSS-Avatar-component"
                  src={user?.image as string}
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </Link>
          <h2>{user?.name}</h2>
          <button onClick={handleSignOut} className="btn btn-error btn-sm">
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <Link href={"/sign-in"}>
            <button className="btn px-2 py-1.5 h-fit text-neutral-700 bg-white border-0">
              সাইন ইন
            </button>
          </Link>
          <Link href={"/sign-up"}>
            <button className="btn bg-red-700 text-white px-3 py-1.5 h-fit hover:bg-black">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
