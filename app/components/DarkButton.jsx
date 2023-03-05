const DarkButton = () => {
  return (
    <>
      {dark && (
        <div
          onClick={() => setDark(false)}
          className="cursor-pointer text-2xl rounded-full py-2 px-2 mr-4 font-black bg-[#3E00FF] text-white flex items-center justify-center"
        >
          <i className="lni lni-night"></i>
        </div>
      )}
      {!dark && (
        <div
          onClick={() => setDark(true)}
          className="cursor-pointer text-2xl rounded-full py-2 px-2 mr-4 font-black bg-[#e6c314] text-white flex items-center justify-center"
        >
          <i className="lni lni-sun"></i>
        </div>
      )}
    </>
  );
};

export default DarkButton;
