import { useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

const AppsAndServicesDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useClickOutside(() => setIsOpen(false));

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={ref} className="relative inline-block text-left mx-4">
      <button
        type="button"
        onClick={toggleDropdown}
        className="focus:outline-none rounded-full bg-[#FFFFFF] shadow-md p-[11px]"
      >
        <svg
          viewBox="0 0 24 24"
          height="18"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#7E8790]"
        >
          <path
            d="M8.250 12.000 A3.750 3.750 0 1 0 15.750 12.000 A3.750 3.750 0 1 0 8.250 12.000 Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></path>
          <path
            d="M17.119 20.301L12.529 15.711"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></path>
          <path
            d="M15.711 12.53L20.301 17.119"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></path>
          <path
            d="M3.699 17.119L8.289 12.529"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></path>
          <path
            d="M11.471 15.712L6.881 20.301"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></path>
          <path
            d="M6.881 3.7L11.471 8.289"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></path>
          <path
            d="M8.289 11.471L3.699 6.881"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></path>
          <path
            d="M20.301 6.881L15.711 11.471"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></path>
          <path
            d="M12.529 8.289L17.119 3.7"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></path>
          <path
            d="M2.250 12.000 A9.750 9.750 0 1 0 21.750 12.000 A9.750 9.750 0 1 0 2.250 12.000 Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-1 mt-2 w-64 bg-white border border-gray-300 rounded shadow-lg">
          <div className="p-2">
            <h3 className="text-gray-800 font-medium px-4 py-2 border-b border-gray-200">
              Apps
            </h3>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              App 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              App 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              App 3
            </a>
          </div>
          <div className="p-2 border-t border-gray-200">
            <h3 className="text-gray-800 font-medium px-4 py-2 border-b border-gray-200">
              Services
            </h3>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Service 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Service 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Service 3
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppsAndServicesDropdown;
