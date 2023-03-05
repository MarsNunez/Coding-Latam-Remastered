import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-300 flex items-center px-4 py-3 justify-between max-w-7xl mx-auto">
      <Link href={"/"}>
        <img
          src="/img/big-logo-transparent.png"
          alt="navbar logo"
          className="h-12"
        />
      </Link>
      <div className="flex items-center">
        <button className="bg-[#3E00FF] hover:bg-[#350dac] ease-out duration-300 text-white text-lg font-semibold py-2 px-5 rounded-sm lg:hidden">
          Menú
        </button>
        <ul className="hidden lg:flex text-sm gap-12">
          <li>Clases</li>
          <li>Grupos de estudio</li>
          <li>Iniciar sesión</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
