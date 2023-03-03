import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b flex items-center px-4 py-3 justify-between">
      <Link href={"/"}>
        <img
          src="/img/big-logo-transparent.png"
          alt="navbar logo"
          className="h-12"
        />
      </Link>
      <button className="bg-[#3E00FF] hover:bg-[#350dac] ease-out duration-300 text-white text-lg font-semibold py-2 px-5 rounded-sm">
        Menú
      </button>
    </nav>
  );
};

export default Navbar;
