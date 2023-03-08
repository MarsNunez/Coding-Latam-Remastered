"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="border-b border-gray-300 relative flex items-center px-4 py-3 justify-between max-w-7xl mx-auto">
      {menu && (
        <div className="z-10 absolute left-0 w-full min-h-screen top-0 backdrop-blur-md backdrop-brightness-50">
          <div
            className="w-auto relative text-white text-4xl cursor-pointer"
            onClick={() => setMenu(false)}
          >
            <i class="lni lni-cross-circle absolute right-4 top-4"></i>
          </div>
          <ul className="text-white flex flex-col justify-center items-center gap-5 text-lg mt-16">
            <li>
              <Link href={"/"} onClick={() => setMenu(false)}>
                Inicio
              </Link>
            </li>
            <li>
              <Link href={"/clases"} onClick={() => setMenu(false)}>
                Clases
              </Link>
            </li>
            <li>
              <Link href={"/grupos"} onClick={() => setMenu(false)}>
                Grupos de estudio
              </Link>
            </li>
            <li className="cursor-pointer">Iniciar sesión</li>
          </ul>
        </div>
      )}
      <Link href={"/"}>
        <img
          src="/img/big-logo-transparent.png"
          alt="navbar logo"
          className="h-12"
        />
      </Link>
      <div className="flex items-center">
        <button
          onClick={() => setMenu(true)}
          className="bg-[#3E00FF] hover:bg-[#350dac] ease-out duration-300 text-white text-lg font-semibold py-2 px-5 rounded-sm lg:hidden"
        >
          Menú
        </button>
        <ul className="hidden lg:flex text-sm gap-12 font-bold">
          <li>
            <Link href={"/"} onClick={() => setMenu(false)}>
              Inicio
            </Link>
          </li>
          <li>
            <Link href={"/clases"} onClick={() => setMenu(false)}>
              Clases
            </Link>
          </li>
          <li>
            <Link href={"/grupos"} onClick={() => setMenu(false)}>
              Grupos de estudio
            </Link>
          </li>
          <li className="cursor-pointer">Iniciar sesión</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
