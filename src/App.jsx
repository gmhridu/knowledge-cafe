import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time);

    // remove the read blog from bookmark
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
      <div className="container mx-auto">
        <Header />
        <div className="md:flex gap-4">
          <Blogs
            handleAddToBookmark={handleAddToBookmark}
            handleMarkAsRead=
            {handleMarkAsRead}
          />
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
        </div>
      </div>
    </>
  );
};

export default App;