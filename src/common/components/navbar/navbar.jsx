import { set } from "date-fns";
import logo from "../../../assets/oyola_logo.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const services = [
  { id: 1, name: "Stays", path: "/" },
  { id: 2, name: "Cars", path: "/cars" },
  { id: 3, name: "Experiences", path: "/experiences" },
];

export default function Navbar({ currentService }) {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div class="font-dm_sans responsive-width  ">
        <nav class="py-3 relative lg:py-6 flex items-center justify-between">
          <div class="flex items-center justify-center lg:gap-2">
            <img className="h-10" src={logo} alt="logo" />
            <span class="text-xl lg:text-3xl font-bold ">OYOLA</span>
          </div>
          {/* Mobile and Tablets */}
          <span
            class="material-symbols-rounded cursor-pointer  block lg:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? "close" : "menu"}
          </span>
          {/* Mobile and tablet drop down */}
          <div
            class={` absolute left-0 top-20 p-4 bg-white w-full h-auto z-50 lg:hidden ${
              isOpen ? "flex" : "hidden "
            } flex-col gap-4 items-start justify-start px-10`}
          >
            <NavLink to={"/stays"}>
              <span
                class={`text-lg  hover:text-gray-900 cursor-pointer duration-500 ease-in-out  text-gray-500 ${
                  currentService == "stays" ? "text-black" : "text-gray-500"
                }`}
              >
                stays
              </span>
            </NavLink>
            <NavLink to={"/cars"}>
              <span
                class={`text-lg  hover:text-gray-900 cursor-pointer duration-500 ease-in-out  text-gray-500 ${
                  currentService == "cars" ? "text-black" : "text-gray-500"
                }`}
              >
                Cars
              </span>
            </NavLink>
            <NavLink to={"/experiences"}>
              <span
                class={`text-lg  hover:text-gray-900 cursor-pointer duration-500 ease-in-out  text-gray-500 ${
                  currentService == "experiences"
                    ? "text-black"
                    : "text-gray-500"
                }`}
              >
                Experiences
              </span>
            </NavLink>

            <div class="flex flex-col items-start gap-6 ">
              <button class="bg-gray-100 text-gray-900 px-4 py-2 rounded-3xl hover:bg-gray-600 hover:text-gray-100 duration-500 ease-in-out ">
                List your property
              </button>
              <button class="bg-gray-900 text-white px-4 py-2 rounded-3xl hover:bg-gray-800 hover:shadow-md">
                Sign in
              </button>
            </div>
          </div>
          {/* Bigger screens  */}

          <div class="hidden lg:flex items-center gap-[2.5vw] justify-center self-center">
            <NavLink to={"/stays"}>
              <span class="text-lg  hover:text-gray-900 cursor-pointer duration-500 ease-in-out  text-gray-500">
                stays
              </span>
            </NavLink>
            <NavLink to={"/cars"}>
              <span class="text-lg  hover:text-gray-900 cursor-pointer duration-500 ease-in-out   text-gray-500 ">
                Cars
              </span>
            </NavLink>
            <NavLink to={"/experiences"}>
              <span class=" text-lg  hover:text-gray-900 cursor-pointer duration-500 ease-in-out   text-gray-500">
                Experiences
              </span>
            </NavLink>
            <div class="flex items-center gap-6">
              <button class="bg-gray-100 text-gray-900 px-4 py-2 rounded-3xl hover:bg-gray-600 hover:text-gray-100 duration-500 ease-in-out ">
                List your property
              </button>
              <a
                href="#callbackform"
                class="bg-gray-900 text-white px-4 py-2 rounded-3xl hover:bg-gray-800 hover:shadow-md"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
