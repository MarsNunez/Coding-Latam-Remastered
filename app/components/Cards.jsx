const Cards = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-10">
      <div className="w-72 rounded-xl overflow-hidden card cursor-pointer relative">
        <div className="font-bold text-3xl h-52 face-card text-white ">
          <div className=" h-full">
            <img
              src="/img/bg-images/img02.png"
              alt="card image"
              className="h-full object-cover"
            />
          </div>
          <h3 className="drop-shadow-4xl top-0 px-4 pt-5 absolute">
            Curso de React Native avanzado
          </h3>
        </div>
        <div className="flex px-7 py-4">
          <div className="mr-12 text-center">
            <p className="font-bold text-2xl">4</p>
            <span className="text-gray-600 text-xs">Chapters</span>
          </div>
          <div className="text-center">
            <p className="font-bold text-2xl">17</p>
            <span className="text-gray-600 text-xs">Items</span>
          </div>
          <div className="text-center absolute bottom-3 right-8">
            <div className="border-4 hover:text-[#3e00ff] ease-in-out duration-300 flex items-center justify-center h-16 w-16 rounded-full bg-white playbutton">
              <i class="lni lni-vercel text-sm rotate-90"></i>
            </div>
            <p className="text-gray-600 font-bold mt-4 text-lg">0%</p>
          </div>
        </div>
      </div>
      <div className="w-72 rounded-xl overflow-hidden card cursor-pointer relative">
        <div className="font-bold text-3xl h-52 face-card text-white ">
          <div className=" h-full">
            <img
              src="/img/bg-images/img04.png"
              alt="card image"
              className="h-full object-cover"
            />
          </div>
          <h3 className="drop-shadow-4xl top-0 px-4 pt-5 absolute">
            Taller de Responsive Design
          </h3>
        </div>
        <div className="flex px-7 py-4">
          <div className="mr-12 text-center">
            <p className="font-bold text-2xl">4</p>
            <span className="text-gray-600 text-xs">Chapters</span>
          </div>
          <div className="text-center">
            <p className="font-bold text-2xl">17</p>
            <span className="text-gray-600 text-xs">Items</span>
          </div>
          <div className="text-center absolute bottom-3 right-8">
            <div className="border-4 hover:text-[#3e00ff] ease-in-out duration-300 flex items-center justify-center h-16 w-16 rounded-full bg-white playbutton">
              <i class="lni lni-vercel text-sm rotate-90"></i>
            </div>
            <p className="text-gray-600 font-bold mt-4 text-lg">0%</p>
          </div>
        </div>
      </div>
      <div className="w-72 rounded-xl overflow-hidden card cursor-pointer relative">
        <div className="font-bold text-3xl h-52 face-card text-white ">
          <div className=" h-full">
            <img
              src="/img/bg-images/img03.jfif"
              alt="card image"
              className="h-full object-cover"
            />
          </div>
          <h3 className="drop-shadow-4xl top-0 px-4 pt-5 absolute">
            Taller de Flexbox
          </h3>
        </div>
        <div className="flex px-7 py-4">
          <div className="mr-12 text-center">
            <p className="font-bold text-2xl">4</p>
            <span className="text-gray-600 text-xs">Chapters</span>
          </div>
          <div className="text-center">
            <p className="font-bold text-2xl">17</p>
            <span className="text-gray-600 text-xs">Items</span>
          </div>
          <div className="text-center absolute bottom-3 right-8">
            <div className="border-4 hover:text-[#3e00ff] ease-in-out duration-300 flex items-center justify-center h-16 w-16 rounded-full bg-white playbutton">
              <i class="lni lni-vercel text-sm rotate-90"></i>
            </div>
            <p className="text-gray-600 font-bold mt-4 text-lg">0%</p>
          </div>
        </div>
      </div>
      <div className="w-72 rounded-xl overflow-hidden card cursor-pointer relative">
        <div className="font-bold text-3xl h-52 face-card text-white ">
          <div className="h-full">
            <img
              src="/img/bg-images/img01.png"
              alt="card image"
              className="h-full object-cover"
            />
          </div>
          <h3 className="drop-shadow-4xl top-0 px-4 pt-5 absolute">
            Curso de Angular y CLI
          </h3>
        </div>
        <div className="flex px-7 py-4">
          <div className="mr-12 text-center">
            <p className="font-bold text-2xl">4</p>
            <span className="text-gray-600 text-xs">Chapters</span>
          </div>
          <div className="text-center">
            <p className="font-bold text-2xl">17</p>
            <span className="text-gray-600 text-xs">Items</span>
          </div>
          <div className="text-center absolute bottom-3 right-8">
            <div className="border-4 hover:text-[#3e00ff] ease-in-out duration-300 flex items-center justify-center h-16 w-16 rounded-full bg-white playbutton">
              <i class="lni lni-vercel text-sm rotate-90"></i>
            </div>
            <p className="text-gray-600 font-bold mt-4 text-lg">0%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
