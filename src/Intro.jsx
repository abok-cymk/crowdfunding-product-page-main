import { CiBookmark } from "react-icons/ci";

const Intro = () => {
  return (
    <div className="mx-auto w-full max-w-2xl rounded-md bg-white px-4 py-3 pb-5 text-center shadow-md lg:px-8">
      <img
        src="/logo-mastercraft.svg"
        alt="Mastercraft"
        className="absolute left-1/2 -mt-10 -translate-x-1/2"
      />
      <div className="mt-12 flex flex-col gap-6">
        <h1 className="font-700 text-lg/7 capitalize lg:text-3xl/7">
          mastercraft bamboo monitor riser
        </h1>
        <p className="text-custom-gray-500 font-500 text-sm/6 lg:text-base/6">
          {" "}
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="flex items-center justify-between">
          <button className="bg-custom-green-400 font-500 hover:bg-custom-green-700 shrink-0 cursor-pointer rounded-full px-6 py-4 text-sm text-gray-200 transition-colors duration-500 lg:text-lg/6">
            Back this project
          </button>
          <button className="font-500 flex shrink-0 cursor-pointer items-center gap-2 rounded-full lg:bg-gray-200 pr-6 text-sm/6 text-neutral-700 transition-colors duration-500 lg:text-base/6">
            {/* <CiBookmark
              size={24}
              className="rounded-full bg-gray-600  text-custom-gray-500"
            /> */}
            <img src="/icon-bookmark.svg" alt="" />
            <span className="hidden lg:flex">Bookmark</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
