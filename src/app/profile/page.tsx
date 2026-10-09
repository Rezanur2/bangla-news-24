"use client";
import { updateUser, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";

const ProfilePage = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const [show, setShow] = useState(false);

  const handleUpdateProfile = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
    };

    await updateUser({
      ...newUserData,
    });
  };
  const handleShowForm = () => {
    setShow(!show);
  };

  return (
    <div className="flex flex-col gap-2 items-center">
      <Link href={"/profile"}>
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-60 rounded-full ring-2 ring-offset-2">
            <img
              alt="Tailwind-CSS-Avatar-component"
              src={user?.image as string}
              width={600}
              height={600}
            />
          </div>
        </div>
      </Link>
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
      <button onClick={handleShowForm} className="btn">
        Edit Profile
      </button>
      {show && <form onSubmit={handleUpdateProfile} className="flex flex-col">
        <fieldset className="fieldset w-xs">
          <label className="text-sm text-neutral-700">নাম</label>
          <input
            type="text"
            className="rounded border border-neutral-300 px-3 py-2 mb-2 text-sm outline-none focus:border-red-700"
            name="name"
          />
          <label className="text-sm text-neutral-700">Image</label>
          <input
            type="url"
            className="rounded border border-neutral-300 px-3 py-2 mb-2 text-sm outline-none focus:border-red-700"
            name="image"
          />
          <button
            type="submit"
            className="rounded bg-red-700 px-3 py-2 text-sm font-semibold text-white hover:bg-red-800"
          >
            Update Profile
          </button>
        </fieldset>
      </form>}
    </div>
  );
};

export default ProfilePage;
