import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:h-1/3 lg:w-1/4 space-y-3">
      <div className="bg-[#6047EC1A] border-2 border-[#6047EC1A] rounded-lg p-4">
        <h3 className="text-xl lg:text-2xl font-bold text-[#6047EC]">
          Spent time on read: {readingTime} min
        </h3>
      </div>
      <div className=" bg-[#1111110D] p-3 lg:p-4 rounded-xl">
        <h2 className="text-xl lg:text-2xl font-bold text-[#111] text-nowrap">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        <div className="flex flex-col gap-4 my-3">
          {bookmarks.map((bookmark) => (
            <Bookmark key={bookmark.id} bookmark={bookmark} />
          ))}
        </div>
      </div>
    </div>
  );
};
 
export default Bookmarks;