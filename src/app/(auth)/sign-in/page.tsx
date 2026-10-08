'use client'

import { signIn } from "@/lib/auth-client";
import toast from "react-hot-toast";

const page = () => {
    const onSubmit = async(e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries()) as { email: string, password: string };

        const {data, error} = await signIn.email({
            ...user,
            callbackURL: "/"
        })
        if (data) {
            toast.success("Sign In successful!")
        }
        if (error) {
            toast.error(error.message ?? "একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।")
        }
    }
  return (
    <div className="mx-auto max-w-sm">
      <p className="mb-4 text-center text-2xl font-bold text-red-700">
        সাইন ইন
      </p>
      <form onSubmit={onSubmit} className="flex flex-col">
        <fieldset className="fieldset w-xs">
          <label className="text-sm text-neutral-700">ইমেইল</label>
          <input
            type="email"
            className="rounded border border-neutral-300 px-3 py-2 mb-2 text-sm outline-none focus:border-red-700"
            name="email"
          />
          <label className="text-sm text-neutral-700">পাসওয়ার্ড</label>
          <input
            type="password"
            className="rounded border border-neutral-300 px-3 py-2 mb-3 text-sm outline-none focus:border-red-700"
            name="password"
          />
          <button className="rounded bg-red-700 px-3 py-2 text-sm font-semibold text-white hover:bg-red-800">
            সাইন ইন করুন
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default page;
