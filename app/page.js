import Cards from "./components/Cards";

export default function Home() {
  return (
    <main>
      {/* LANDING PAGE SECTION */}
      <section className="bg-image-up">
        <div className="text-center pt-14 pb-5 flex flex-col gap-6">
          <div className="under">
            <h1 className="text-[#170055] font-extrabold text-3xl w-fit px-1 pb-2">
              Mejora tus dev skills
            </h1>
          </div>
          <div className="px-9">
            <p>
              Aprende y comparte conocimiento con otros devs de la industria.
            </p>
          </div>
        </div>
        <div className="h-72 flex justify-center w-fit mx-auto">
          <img
            src="/img/terminal.webp"
            alt="terminal"
            className="terminal-animated my-auto"
          />
        </div>
      </section>

      {/* COURSES SECTION */}
      <section className="bg-image-down">
        <div className="text-center">
          <h2 className="text-[#170055] font-extrabold text-2xl mb-4">
            ¿Qué es lo que hacemos?
          </h2>
          <p>
            Compartimos conocimiento (talleres, workshops, cursos, etc.)
            apoyando a los profesionales que inician en el mundo del desarrollo
            web.
          </p>
        </div>
        <div className="pb-24">
          <Cards />
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="bg-white pb-10">
        <div className="text-center px-10 pt-10 pb-5">
          <h2 className="text-[#170055] font-extrabold text-2xl mb-4">
            ¿Cómo me uno?
          </h2>
          <p>En Coding Latam tienes 2 maneras de ser parte de la comunidad:</p>
        </div>
        <div className="w-fit mx-auto">
          <div className="flex items-center px-8 gap-8">
            <figure className="h-48">
              <img
                src="/img/student.svg"
                alt="student image"
                className="h-full"
              />
            </figure>
            <div className="text-center">
              <h4 className="font-black text-lg text-[#170055]">Estudiante</h4>
              <p className="pt-1 pb-4">
                Quieres aprender sobre tecnología y mejorar tus habilidades.
                Únete a Discord!
              </p>
              <button className="bg-[#3E00FF] hover:bg-[#350dac] ease-out duration-300 text-white text-md font-semibold py-2 px-5 rounded-sm">
                Quiero ser estudiante
              </button>
            </div>
          </div>
          <div className="flex items-center px-8 gap-8">
            <figure className="h-56 px-5">
              <img
                src="/img/professor.svg"
                alt="professor image"
                className="h-full"
              />
            </figure>
            <div className="text-center">
              <h4 className="font-black text-lg text-[#170055]">Mentor</h4>
              <p className="pt-1 pb-4">
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
          <i class="lni cursor-pointer lni-facebook-original"></i>
          <i class="lni cursor-pointer lni-instagram-fill"></i>
          <i class="lni cursor-pointer lni-discord"></i>
          <i class="lni cursor-pointer lni-twitter-original"></i>
          <i class="lni cursor-pointer lni-youtube"></i>
          <i class="lni cursor-pointer lni-telegram-original"></i>
        </div>
        <p className="text-center">© Coding Latam 2023 - All rights reserved</p>
      </footer>
    </main>
  );
}
