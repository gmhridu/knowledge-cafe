import { BsBookmark } from "react-icons/bs";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img
        className="w-full rounded-lg mb-8"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between">
        <div className="flex gap-3 mb-3">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3 className="text-xl *:md:text-2xl text-[#111] font-bold">
              {author}
            </h3>
            <p className="md:text-base font-semibold text-[#11111199]">
              {posted_date}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <span className="text-base md:text-xl font-medium text-[#11111199]">
            {reading_time} min read
          </span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="text-xl md:text-2xl text-[#11111199]"
          >
            <BsBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-2xl text-center md:text-left md:text-4xl text-[#111] font-bold mb-4">
        {title}
      </h2>
      <p className="flex items-center justify-center md:items-start md:justify-start gap-3 mb-4">
        {hashtags.map((hash, idx) => (
          <span key={idx} className="text-gray-500">
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className="text-xl font-semibold text-[#6047EC] underline"
      >
        Mark as read
      </button>
    </div>
  );
};

export default Blog;