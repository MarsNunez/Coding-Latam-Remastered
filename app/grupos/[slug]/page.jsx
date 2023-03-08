import { returnTitle } from "@/app/helpers";
import Link from "next/link";

const Clase = ({ params }) => {
  const { slug } = params;
  return (
    <div className="pb-10 lg:flex lg:max-w-7xl mx-auto lg:mt-7">
      <div className="w-full">
        <iframe
          className="w-full h-56 sm:h-96 lg:pl-7"
          src="https://www.youtube.com/embed/KPlYOA8UMrs?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"
        ></iframe>
        <div className="px-6 py-6 max-w-xl mx-auto md:px-0 lg:mx-0 lg:max-w-none lg:pl-7 lg:pr-20">
          <h2 className="font-black text-2xl text-[#170055] mb-5">
            {returnTitle(slug)}
          </h2>
          <p className="mb-8 text-justify">
            ¡Bienvenido al curso de CSS! En este curso aprenderás a crear sitios
            web atractivos y profesionales utilizando CSS. CSS es un lenguaje de
            estilo utilizado para dar formato a los documentos HTML.
            <br /> <br /> Aprenderás a utilizar selectores, reglas, propiedades
            y valores para controlar el diseño de tus páginas web. Además,
            aprenderás a utilizar herramientas de diseño avanzadas como flexbox
            y grid para crear diseños modernos y adaptables. ¡Estamos
            emocionados de que seas parte de este curso y esperamos que
            disfrutes aprendiendo CSS!
          </p>
          <Link
            href={"/clases"}
            className="bg-transparent hover:bg-[#3E00FF] ease-out duration-300 text-[#350dac] border border-[#350dac] hover:text-white text-md font-semibold py-3 px-5 rounded-sm hover:border-[#3E00FF]"
          >
            Regresar
          </Link>
        </div>
      </div>
      <div className="px-6 lg:max-w-md">
        <div className="formulario max-w-xl mx-auto">
          <h2 className="text-[#170055] font-black text-xl">
            Preguntas de clase
          </h2>
          <p className="my-3">Tienes alguna duda? Déjala aquí:</p>
          <textarea className="w-full h-24 border px-3 py-1 mb-3"></textarea>
          <button className="bg-[#3E00FF] hover:bg-[#350dac] ease-out duration-300 text-white text-md text-md font-semibold py-2 px-5 rounded-sm">
            Agregar
          </button>
        </div>
        <div className="preguntas mt-6 flex flex-col gap-3 max-w-xl mx-auto md:mt-10">
          <div className="pregunta border px-4 py-3 rounded-md bg-[#170055] text-white max-w-xl">
            <h3 className="mb-5 text-md font-bold">
              Necesito saber HTML para empezar con este curso?
            </h3>
            <div className="flex">
              <div className="flex gap-10">
                <div className="flex items-center gap-2 cursor-pointer hover:text-gray-400 duration-150">
                  <i class="lni lni-popup text-2xl"></i>
                  <p className="text-md">5</p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:text-gray-400 duration-150">
                  <i class="lni lni-thumbs-up text-2xl"></i>
                  <p className="text-md">23</p>
                </div>
              </div>
              <button className="bg-[#3E00FF] hover:bg-[#350dac] ml-auto ease-out duration-300 text-white text-sm text-md font-semibold py-1 px-3 rounded-sm">
                Responder
              </button>
            </div>
          </div>
          <div className="pregunta border px-4 py-3 rounded-md bg-[#170055] text-white max-w-xl">
            <h3 className="mb-5 text-md font-bold ">
              Como puedo implementarlo con SASS?
            </h3>
            <div className="flex">
              <div className="flex gap-10">
                <div className="flex items-center gap-2 cursor-pointer hover:text-gray-400 duration-150">
                  <i class="lni lni-popup text-2xl"></i>
                  <p className="text-md">2</p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:text-gray-400 duration-150">
                  <i class="lni lni-thumbs-up text-2xl"></i>
                  <p className="text-md">10</p>
                </div>
              </div>
              <button className="bg-[#3E00FF] hover:bg-[#350dac] ml-auto ease-out duration-300 text-white text-sm text-md font-semibold py-1 px-3 rounded-sm">
                Responder
              </button>
            </div>
          </div>
          <div className="pregunta border px-4 py-3 rounded-md bg-[#170055] text-white max-w-xl">
            <h3 className="mb-5 text-md font-bold ">
              La paleta de colores no son las mismas
            </h3>
            <div className="flex">
              <div className="flex gap-10">
                <div className="flex items-center gap-2 cursor-pointer hover:text-gray-400 duration-150">
                  <i class="lni lni-popup text-2xl"></i>
                  <p className="text-md">7</p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:text-gray-400 duration-150">
                  <i class="lni lni-thumbs-up text-2xl"></i>
                  <p className="text-md">18</p>
                </div>
              </div>
              <button className="bg-[#3E00FF] hover:bg-[#350dac] ml-auto ease-out duration-300 text-white text-sm text-md font-semibold py-1 px-3 rounded-sm">
                Responder
              </button>
            </div>
          </div>
        </div>
        <div className="recursos text-[#170055] max-w-xl mx-auto">
          <h3 className="font-black text-xl pt-10 pb-4">
            Recursos de la Clase
          </h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center">
              <i class="lni lni-add-files text-4xl pr-5"></i>
              <a href="#" className="text-md underline underline-offset-4">
                Manual para aprender CSS
              </a>
            </div>
            <div className="flex items-center">
              <i class="lni lni-add-files text-4xl pr-5"></i>
              <a href="#" className="text-md underline underline-offset-4">
                Manual para aprender CSS
              </a>
            </div>
            <div className="flex items-center">
              <i class="lni lni-add-files text-4xl pr-5"></i>
              <a href="#" className="text-md underline underline-offset-4">
                Manual para aprender CSS
              </a>
            </div>
          </div>
        </div>
        <div className="info-card mt-10 max-w-xl mx-auto">
          <div className="text-white backdrop-blur-md pt-4 pb-6 px-6">
            <h3 className="font-black text-xl pb-4 ">
              ¿Te gusta el contenido?
            </h3>
            <p className="leading-5">
              Puedes apoyar a la comunidad a seguir creando contenido de calidad
              y/o unirte a alguna de nuestras múltiples opciones para encontrar
              la mejor versión de ti y mejorar tus habilidades con nosotros.
            </p>
            <div className="cursor-pointer flex py-2 pt-5">
              <i class="lni lni-telegram-original text-xl pr-2"></i>
              <p className="underline underline-offset-4 font-semibold">
                Telegram
              </p>
            </div>
            <div className="cursor-pointer flex">
              <i class="lni lni-coffee-cup text-xl pr-2"></i>
              <p className="underline underline-offset-4 font-semibold">
                Buymeacoffee
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clase;
