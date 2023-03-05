import Cards from "./components/Cards";

export default function Home() {
  return (
    <main>
      {/* LANDING PAGE SECTION */}
      <section className="bg-image-up">
        <div className="sm:flex items-center justify-between sm:py-12 sm:pb-24 lg:pb-36 px-10 md:px-20 max-w-6xl mx-auto">
          <div className="text-center pt-14 pb-5 flex flex-col gap-6 sm:max-w-sm sm:text-left md:max-w-xl">
            <div className="under mx-auto sm:mx-0">
              <h1 className="text-[#170055] font-extrabold text-3xl w-fit px-1 pb-2 md:text-4xl lg:text-5xl">
                Mejora tus dev skills
              </h1>
            </div>
            <div className="px-9 sm:px-0 sm:max-w-xs md:text-xl">
              <p>
                Aprende y comparte conocimiento con otros devs de la industria.
              </p>
            </div>
          </div>
          <div className="h-72 flex justify-center w-fit mx-auto md:mx-0 ">
            <img
              src="/img/terminal.webp"
              alt="terminal"
              className="terminal-animated my-auto"
            />
          </div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section className="bg-image-down">
        <div className=" md:pt-24 xl:pt-40">
          <div className="text-center lg:mb-16">
            <h2 className="text-[#170055] font-extrabold text-2xl mb-4 md:text-4xl">
              ¿Qué es lo que hacemos?
            </h2>
            <p className="lg:max-w-xl mx-auto lg:text-xl lg:my-7">
              Compartimos conocimiento (talleres, workshops, cursos, etc.)
              apoyando a los profesionales que inician en el mundo del
              desarrollo web.
            </p>
          </div>
          <div className="pb-24">
            <Cards />
          </div>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="bg-white pb-20">
        <div className="text-center px-10 pt-10 pb-8">
          <h2 className="text-[#170055] font-extrabold text-2xl mb-4 md:text-4xl">
            ¿Cómo me uno?
          </h2>
          <p className="lg:text-xl">
            En Coding Latam tienes 2 maneras de ser parte de la comunidad:
          </p>
        </div>
        <div className="w-fit mx-auto">
          <div className="flex items-center px-8 gap-3 md:gap-8 lg:gap-16 mb-6">
            <figure className="image-container max-w-xs w-fit ">
              <img src="/img/student.svg" alt="student image" />
            </figure>
            <div className="text-center md:text-left max-w-xs w-fit">
              <h4 className="font-black text-lg text-[#170055]">Mentor</h4>
              <p className="pt-1 pb-4 lg:text-xl">
                Quieres aprender sobre tecnología y mejorar tus habilidades.
                Únete a Discord!
              </p>
              <button className="bg-[#3E00FF] hover:bg-[#350dac] ease-out duration-300 text-white text-md font-semibold py-2 px-3 rounded-sm">
                Quiero ser estudiante
              </button>
            </div>
          </div>
          <div className="flex items-center px-8 gap-3 md:gap-8 lg:gap-16">
            <figure className="image-container max-w-xs w-fit">
              <img src="/img/professor.svg" alt="professor image" />
            </figure>
            <div className="text-center md:text-left max-w-xs w-fit">
              <h4 className="font-black text-lg text-[#170055]">Mentor</h4>
              <p className="pt-1 pb-4 lg:text-xl">
                Quieres compartir tu experiencia con nuevos entusiastas de la
                tecnología
              </p>
              <button className="bg-[#3E00FF] hover:bg-[#350dac] ease-out duration-300 text-white text-md font-semibold py-2 px-5 rounded-sm">
                Quiero ser mentor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="bg-[#170055] text-white py-16">
        <div className=" flex w-fit mx-auto text-4xl gap-4 mb-7">
          <i className="lni cursor-pointer lni-facebook-original"></i>
          <i className="lni cursor-pointer lni-instagram-fill"></i>
          <i className="lni cursor-pointer lni-discord"></i>
          <i className="lni cursor-pointer lni-twitter-original"></i>
          <i className="lni cursor-pointer lni-youtube"></i>
          <i className="lni cursor-pointer lni-telegram-original"></i>
        </div>
        <p className="text-center">© Coding Latam 2023 - All rights reserved</p>
      </footer>
    </main>
  );
}
