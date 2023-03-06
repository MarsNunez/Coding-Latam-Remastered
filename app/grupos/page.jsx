import Banner from "../components/Banner";

const Grupos = () => {
  return (
    <div>
      <Banner
        title={"Mejora tu aprendizaje con los grupos de estudio"}
        icon={"users"}
      />
      <nav className="py-7 px-5 max-w-5xl mx-auto">
        <ul className="flex text-white gap-3 flex-wrap">
          <li className="border p-2 px-3 cursor-pointer rounded-md bg-blue-500 hover:bg-blue-600 ease-in-out duration-200">
            Todo
          </li>
          <li className="border p-2 px-3 cursor-pointer rounded-md bg-blue-500 hover:bg-blue-600 ease-in-out duration-200">
            HTML
          </li>
          <li className="border p-2 px-3 cursor-pointer rounded-md bg-blue-500 hover:bg-blue-600 ease-in-out duration-200">
            CSS
          </li>
          <li className="border p-2 px-3 cursor-pointer rounded-md bg-blue-500 hover:bg-blue-600 ease-in-out duration-200">
            Javascrip
          </li>
          <li className="border p-2 px-3 cursor-pointer rounded-md bg-blue-500 hover:bg-blue-600 ease-in-out duration-200">
            Git
          </li>
          <li className="border p-2 px-3 cursor-pointer rounded-md bg-blue-500 hover:bg-blue-600 ease-in-out duration-200">
            UX
          </li>
          <li className="border p-2 px-3 cursor-pointer rounded-md bg-blue-500 hover:bg-blue-600 ease-in-out duration-200">
            SASS
          </li>
          <li className="border p-2 px-3 cursor-pointer rounded-md bg-blue-500 hover:bg-blue-600 ease-in-out duration-200">
            Performance
          </li>
          <li className="border p-2 px-3 cursor-pointer rounded-md bg-blue-500 hover:bg-blue-600 ease-in-out duration-200">
            Accesibilidad
          </li>
          <li className="border p-2 px-3 cursor-pointer rounded-md bg-blue-500 hover:bg-blue-600 ease-in-out duration-200">
            Angular
          </li>
          <li className="border p-2 px-3 cursor-pointer rounded-md bg-blue-500 hover:bg-blue-600 ease-in-out duration-200">
            React
          </li>
          <li className="border p-2 px-3 cursor-pointer rounded-md bg-blue-500 hover:bg-blue-600 ease-in-out duration-200">
            Vue
          </li>
          <li className="border p-2 px-3 cursor-pointer rounded-md bg-blue-500 hover:bg-blue-600 ease-in-out duration-200">
            Wordpress
          </li>
        </ul>
      </nav>
      <div className="pb-10 pt-9 grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-fit mx-auto">
        <div className="flex mx-auto text-white groups-card w-fit rounded-sm overflow-hidden">
          <div className="backdrop-blur-md px-5 py-5 flex gap-6 items-center rounded--sm overflow-hidden mx-auto my-auto w-full group-container">
            <div className="text-5xl h-fit">
              <i className="lni lni-html5"></i>
            </div>
            <div>
              <h4 className="font-bold leading-5 mb-1">HTML</h4>
              <p className="leading-5">Ven y conoce HTML desde 0</p>
            </div>
          </div>
        </div>
        <div className="flex mx-auto text-white groups-card w-fit rounded-sm overflow-hidden">
          <div className="backdrop-blur-md px-5 py-5 flex gap-6 items-center rounded--sm overflow-hidden mx-auto my-auto w-full group-container">
            <div className="text-5xl h-fit">
              <i class="lni lni-css3"></i>
            </div>
            <div>
              <h4 className="font-bold leading-5 mb-1">CSS</h4>
              <p className="leading-5">Estiliza tus templates aplicando CSS</p>
            </div>
          </div>
        </div>
        <div className="flex mx-auto text-white groups-card w-fit rounded-sm overflow-hidden">
          <div className="backdrop-blur-md px-5 py-5 flex gap-6 items-center rounded--sm overflow-hidden mx-auto my-auto w-full group-container">
            <div className="text-5xl h-fit">
              <i class="lni lni-javascript"></i>
            </div>
            <div>
              <h4 className="font-bold leading-5 mb-1">Javascript</h4>
              <p className="leading-5">Conoce las bases de Javascript</p>
            </div>
          </div>
        </div>
        <div className="flex mx-auto text-white groups-card w-fit rounded-sm overflow-hidden">
          <div className="backdrop-blur-md px-5 py-5 flex gap-6 items-center rounded--sm overflow-hidden mx-auto my-auto w-full group-container">
            <div className="text-5xl h-fit">
              <i class="lni lni-tailwindcss"></i>
            </div>
            <div>
              <h4 className="font-bold leading-5 mb-1">Tailwind</h4>
              <p className="leading-5">Dale superpoderes a tu CSS</p>
            </div>
          </div>
        </div>
        <div className="flex mx-auto text-white groups-card w-fit rounded-sm overflow-hidden">
          <div className="backdrop-blur-md px-5 py-5 flex gap-6 items-center rounded--sm overflow-hidden mx-auto my-auto w-full group-container">
            <div className="text-5xl h-fit">
              <i class="lni lni-website"></i>
            </div>
            <div>
              <h4 className="font-bold leading-5 mb-1">Accesibilidad Web</h4>
              <p className="leading-5">¿Qué tan accesible es tu web?</p>
            </div>
          </div>
        </div>
        <div className="flex mx-auto text-white groups-card w-fit rounded-sm overflow-hidden">
          <div className="backdrop-blur-md px-5 py-5 flex gap-6 items-center rounded--sm overflow-hidden mx-auto my-auto w-full group-container">
            <div className="text-5xl h-fit">
              <i className="lni lni-html5"></i>
            </div>
            <div>
              <h4 className="font-bold leading-5 mb-1">HTML Semantico</h4>
              <p className="leading-5">
                ¿Estás usando las etiquetas correctas?
              </p>
            </div>
          </div>
        </div>
        <div className="flex mx-auto text-white groups-card w-fit rounded-sm overflow-hidden">
          <div className="backdrop-blur-md px-5 py-5 flex gap-6 items-center rounded--sm overflow-hidden mx-auto my-auto w-full group-container">
            <div className="text-5xl h-fit">
              <i class="lni lni-laptop-phone"></i>
            </div>
            <div>
              <h4 className="font-bold leading-5 mb-1">Responsive Design</h4>
              <p className="leading-5">
                Tu web adaptable a todos los dispotivos
              </p>
            </div>
          </div>
        </div>
        <div className="flex mx-auto text-white groups-card w-fit rounded-sm overflow-hidden">
          <div className="backdrop-blur-md px-5 py-5 flex gap-6 items-center rounded--sm overflow-hidden mx-auto my-auto w-full group-container">
            <div className="text-5xl h-fit">
              <i class="lni lni-stats-up"></i>
            </div>
            <div>
              <h4 className="font-bold leading-5 mb-1">
                Performance y optimización
              </h4>
              <p className="leading-5">¿En cuántos segundos carga tu web?</p>
            </div>
          </div>
        </div>
        <div className="flex mx-auto text-white groups-card w-fit rounded-sm overflow-hidden">
          <div className="backdrop-blur-md px-5 py-5 flex gap-6 items-center rounded--sm overflow-hidden mx-auto my-auto w-full group-container">
            <div className="text-5xl h-fit">
              <i class="lni lni-react"></i>
            </div>
            <div>
              <h4 className="font-bold leading-5 mb-1">React JS</h4>
              <p className="leading-5">
                Crea componentes reutilizables con Javascript
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grupos;
