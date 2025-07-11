import  { useState } from "react";
import clsx from "clsx";
import CloseIcon from "../components/icons/navbar/CloseIcon";
import HamburgerIcon from "../components/icons/navbar/HamburgerIcon";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <nav className="-top-1 left-0 w-full z-50 shadow-sm fixed backdrop-blur bg-black/60 py-2 xl:px-32 2xl:px-0">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Botón menú móvil */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-black hover:text-white focus:ring-2 focus:ring-white focus:outline-none"
              style={{ top: "-2px" }}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <CloseIcon className="size-6" />
              ) : (
                <HamburgerIcon className="size-6" />
              )}
            </button>
          </div>

          {/* Sección izquierda */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex items-center border border-white">
              <div className="text-white px-4 py-2 text-lg font-bold">E V O L D I M A G</div>
              <div className="bg-white text-black px-4 py-2 text-lg font-bold">MX</div>
            </div>

            {/* Enlaces de navegación */}
            <div className="hidden sm:ml-6 sm:block pt-2">
              <div className="flex space-x-4">
                {["Inicio", "Nosotros", "Viajes", "Opiniones", "Podcast"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white hover:text-black"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div className={clsx("sm:hidden bg-black text-white shadow-sm", { hidden: !isOpen })}>
        <div className="space-y-1 px-2 pt-2 pb-3">
          {["Inicio", "Nosotros", "Viajes", "Opiniones", "Podcast"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block rounded-md px-3 py-2 text-base font-medium hover:text-black hover:bg-white"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
