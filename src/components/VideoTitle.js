const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video  pt-[20%] mt-5 px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex gap-4">
        <button className="bg-white text-black p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-gray-50 transition-opacity">
          ▶  Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
