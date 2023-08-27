import Banner from "../components/Banner";
import Cards from "../components/Cards";

const ClasesPage = () => {
  return (
    <div>
      <Banner title={"Clases Disponibles"} icon={"display-alt"} />
      <section className="px-5 ">
        <div className="max-w-6xl mx-auto">
          <nav className="py-7">
            <ul className="flex text-white gap-3 flex-wrap">
              <li className="border p-2 px-3 cursor-pointer rounded-md bg-red-500 hover:bg-red-600 ease-in-out duration-200">
                Todo
              </li>
              <li className="border p-2 px-3 cursor-pointer rounded-md bg-orange-500 hover:bg-orange-600 ease-in-out duration-200">
                HTML
              </li>
              <li className="border p-2 px-3 cursor-pointer rounded-md bg-blue-500 hover:bg-blue-600 ease-in-out duration-200">
                CSS
              </li>
              <li className="border p-2 px-3 cursor-pointer rounded-md bg-purple-500 hover:bg-purple-600 ease-in-out duration-200">
                Responsice Design
              </li>
              <li className="border p-2 px-3 cursor-pointer rounded-md bg-green-500 hover:bg-green-600 ease-in-out duration-200">
                Flexbox
              </li>
              <li className="border p-2 px-3 cursor-pointer rounded-md bg-blue-500 hover:bg-blue-600 ease-in-out duration-200">
                React
              </li>
              <li className="border p-2 px-3 cursor-pointer rounded-md bg-red-500 hover:bg-red-600 ease-in-out duration-200">
                Angular
              </li>
            </ul>
          </nav>
          <h2 className="text-lg text-[#170055] font-semibold pt-2 pb-4">
            Lista de clases disponibles
          </h2>
          <p>
            Aquí podrás encontrar las sesiones junto con material referente a
            los temas de las clases.
          </p>
        </div>

        <div className="pb-20">
          <Cards />
        </div>
      </section>
    </div>
  );
};

export default ClasesPage;
