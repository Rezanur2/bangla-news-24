const page = () => {
  return (
    <div className="mx-auto max-w-sm">
      <p className="mb-4 text-center text-2xl font-bold text-red-700">
        সাইন ইন
      </p>
      <form className="flex flex-col">
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
