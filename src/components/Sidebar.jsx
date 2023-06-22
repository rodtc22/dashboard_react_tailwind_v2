import { useState } from "react";
import {
  RiHome3Line,
  RiFileCopy2Line,
  RiMoneyDollarCircleLine,
  RiBarChart2Line,
  RiMore2Fill,
  RiCloseLine,
} from "react-icons/ri";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <div className={`bg-primary-900 h-full w-[70%] fixed md:w-[40%] lg:w-full lg:static  transition-all duration-300 ${showMenu? "bottom-0" : "-bottom-full"}`}>
        {/* Profile */}
        <div className="flex flex-col  gap-2 justify-center p-8 items-center h-[30vh]">
          <img
            src="https://img.freepik.com/foto-gratis/joven-barbudo-camisa-rayas_273609-5677.jpg"
            alt="joven_sonriendo"
            className="w-20 h-20  object-cover rounded-full ring-2 ring-gray-300"
          />

          <h1 className="text-white text-xl font-bold text-center">
            Rodrigo Ticona Coronel
          </h1>

          <p className="bg-primary-100 text-white px-3 py-1 rounded-full">
            Pro level
          </p>
        </div>

        {/* Nav */}
        <div className="bg-primary-300 p-8 rounded-tr-[110px] h-[70vh] overflow-y-scroll flex flex-col justify-between ">
          <nav className="flex flex-col gap-4">
            <a
              href=""
              className="flex items-center gap-4 py-2 px-4 rounded-xl hover:bg-primary-900/50 text-white transition-colors "
            >
              <RiHome3Line />
              Home
            </a>

            <a
              href=""
              className="flex items-center gap-4 py-2 px-4 rounded-xl hover:bg-primary-900/50 text-white transition-colors "
            >
              <RiFileCopy2Line />
              Project
            </a>

            <a
              href=""
              className="flex items-center gap-4 py-2 px-4 rounded-xl hover:bg-primary-900/50 text-white transition-colors "
            >
              <RiMoneyDollarCircleLine />
              Money
            </a>

            <a
              href=""
              className="flex items-center gap-4 py-2 px-4 rounded-xl hover:bg-primary-900/50 text-white transition-colors "
            >
              <RiBarChart2Line />
              Reports
            </a>
          </nav>

          <div className="bg-primary-900/50 rounded-xl text-white flex  flex-col items-center p-4">
            <p className="text-gray-400">Having Troubles</p>
            <a href="#" className="font-semibold">
              Contact us
            </a>
          </div>
        </div>

      </div>

      {/* Button mobile */}
      <button
        className="lg:hidden fixed right-4 bottom-4 text-2xl rounded-full p-3 text-white bg-primary-900 hover:bg-primary-300"
        onClick={() => { setShowMenu(!showMenu); }}
      >
        {showMenu? <RiCloseLine /> : <RiMore2Fill />}
      </button>
    </>
  );
};

export default Sidebar;
