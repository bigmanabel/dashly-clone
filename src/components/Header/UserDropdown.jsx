import { useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

const UserDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useClickOutside(() => setIsOpen(false));

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={ref} className="relative inline-block text-left mx-[7.5px]">
      <button
        type="button"
        onClick={toggleDropdown}
        className="focus:outline-none w-10 h-10 flex items-center justify-center mx-[3.75]"
      >
        <img
          src="https://d33wubrfki0l68.cloudfront.net/053f2dfd0df2f52c41e903a21d177b0b44abc9b1/1282c/assets/images/profiles/profile-06.jpeg"
          alt="User"
          width="40"
          height="40"
          className="w-full h-full rounded-full border border-gray-300"
        />
      </button>

      {isOpen && (
        <div className="absolute right-1 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Profile
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Settings
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Logout
          </a>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
