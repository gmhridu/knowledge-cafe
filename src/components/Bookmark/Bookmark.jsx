
const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  
  return (
    <div className="bg-white shadow rounded-lg  p-6 flex flex-col">
      <h3 className="text-xl font-semibold text-[#111] mb-3">{title}</h3>
    </div>
  );
};

export default Bookmark;