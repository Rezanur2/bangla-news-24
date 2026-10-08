'use client'
import { signUp } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const SignUpPage = () => {

    const onSubmit = async (e:React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries()) as {name: string, image: string, email: string, password: string};

        const { data, error } = await signUp.email({
            ...user,
            callbackURL: "/"
        });

        if (data) {
            toast.success("Sign In successful!")
            redirect("/");
        }
        if (error) {
            toast.error(error.message ?? "একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।")
        }
    }

  return (
    <div className="mx-auto max-w-sm">
      <p className="mb-4 text-center text-2xl font-bold text-red-700">
        সাইন আপ
      </p>
      <form onSubmit={onSubmit} className="flex flex-col">
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
          <button type="submit" className="rounded bg-red-700 px-3 py-2 text-sm font-semibold text-white hover:bg-red-800">
            সাইন আপ করুন
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUpPage;
