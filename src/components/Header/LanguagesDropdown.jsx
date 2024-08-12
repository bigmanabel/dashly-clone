import { useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

const languageOptions = [
  {
    name: "English (US)",
    flag: "https://d33wubrfki0l68.cloudfront.net/8ab0a140561aa1ea23abaa0101bd41b9b1d0cb12/e951b/assets/images/flags/1x1/us.svg",
  },
  {
    name: "English (UK)",
    flag: "https://d33wubrfki0l68.cloudfront.net/7ee571bc59a0a1ac377631263167fb273a12a7d4/f112e/assets/images/flags/1x1/gb.svg",
  },

  {
    name: "Spanish",
    flag: "https://d33wubrfki0l68.cloudfront.net/719d768eaac30c30937cb72db78ce3391e33a5dc/05fb9/assets/images/flags/1x1/es.svg",
  },
  {
    name: "French",
    flag: "https://d33wubrfki0l68.cloudfront.net/423c01c313d4dd7ca6acd49b868069981490a9b7/c7155/assets/images/flags/1x1/fr.svg",
  },
  {
    name: "Deutsch",
    flag: "https://d33wubrfki0l68.cloudfront.net/ba8ec66c54af0ff852cdbee4794d3858176ac85e/419c1/assets/images/flags/1x1/de.svg",
  },
  {
    name: "中文 (繁體)",
    flag: "https://d33wubrfki0l68.cloudfront.net/c82251ff8fa03cc4eaaa6f972e7a9eb6f3d9380c/f62a5/assets/images/flags/1x1/cn.svg",
  },
];

const LanguagesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
  const ref = useClickOutside(() => setIsOpen(false));

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className="relative inline-block text-left">
      <button
        type="button"
        onClick={toggleDropdown}
        className="focus:outline-none rounded-full bg-[#FFFFFF] shadow-md flex items-center p-[11px]"
      >
        <img
          src={selectedLanguage.flag}
          alt={selectedLanguage.name}
          className="w-[18px] h-[18px] rounded-full"
        />
      </button>

      {isOpen && (
        <div className="absolute right-1 mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg py-[6px]">
          <h6 className="uppercase font-bold text-[11px] py-[6px] px-[15px]">
            Select Language
          </h6>
          {languageOptions.map((language) => (
            <a
              key={language.name}
              href="#"
              onClick={() => handleLanguageSelect(language)}
              className="flex items-center py-[7.5px] px-[15px] text-gray-700 text-[14px] hover:bg-gray-100"
            >
              <img
                src={language.flag}
                alt={language.name}
                className="w-[18px] h-[18px] rounded-full mr-2"
              />
              {language.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguagesDropdown;
