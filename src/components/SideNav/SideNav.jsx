import { useState } from "react";

const SideNav = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const navItems = [
    {
      title: "Dashboards",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="nav-link-icon"
          height="18"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.753,13.944v8.25h6v-6a1.5,1.5,0,0,1,1.5-1.5h1.5a1.5,1.5,0,0,1,1.5,1.5v6h6v-8.25"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></path>
          <path
            d="M.753,12.444,10.942,2.255a1.5,1.5,0,0,1,2.122,0L23.253,12.444"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></path>
        </svg>
      ),

      items: ["Dashboard 1", "Dashboard 2", "Dashboard 3"],
    },
    {
      title: "Pages",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="nav-link-icon"
          height="18"
          width="18"
        >
          <defs>
            <style>{`.a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}`}</style>
          </defs>
          <title>common-file-double-1</title>
          <path
            className="a"
            d="M17.25,23.25H3.75a1.5,1.5,0,0,1-1.5-1.5V5.25"
          ></path>
          <rect
            className="a"
            x="5.25"
            y="0.75"
            width="16.5"
            height="19.5"
            rx="1"
            ry="1"
          ></rect>
        </svg>
      ),
      items: ["Page 1", "Page 2", "Page 3"],
    },
    {
      title: "Chat",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="nav-link-icon"
          height="18"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.25,18.75a1.5,1.5,0,0,1-1.5-1.5V9.75a1.5,1.5,0,0,1,1.5-1.5h10.5a1.5,1.5,0,0,1,1.5,1.5v7.5a1.5,1.5,0,0,1-1.5,1.5h-1.5v4.5l-4.5-4.5Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M6.75,12.75l-3,3v-4.5H2.25a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75h10.5a1.5,1.5,0,0,1,1.5,1.5v3"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      title: "Calendar",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="nav-link-icon"
          height="18"
          width="18"
        >
          <rect
            x="0.752"
            y="3.75"
            width="22.5"
            height="19.5"
            rx="1.5"
            ry="1.5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></rect>
          <line
            x1="0.752"
            y1="9.75"
            x2="23.252"
            y2="9.75"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></line>
          <line
            x1="6.752"
            y1="6"
            x2="6.752"
            y2="0.75"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></line>
          <line
            x1="17.252"
            y1="6"
            x2="17.252"
            y2="0.75"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></line>
        </svg>
      ),
      items: ["Event 1", "Event 2", "Event 3"],
    },
    {
      title: "Email",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="nav-link-icon"
          height="18"
          width="18"
        >
          <rect
            x="0.75"
            y="4.5"
            width="22.5"
            height="15"
            rx="1.5"
            ry="1.5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></rect>
          <line
            x1="15.687"
            y1="9.975"
            x2="19.5"
            y2="13.5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></line>
          <line
            x1="8.313"
            y1="9.975"
            x2="4.5"
            y2="13.5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></line>
          <path
            d="M22.88,5.014l-9.513,6.56a2.406,2.406,0,0,1-2.734,0L1.12,5.014"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></path>
        </svg>
      ),
      items: ["Inbox", "Sent", "Drafts"],
    },
    {
      title: "Tasks",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="nav-link-icon"
          height="18"
          width="18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M5.25 10.511H10.5"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M5.25 14.261H8.25"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M5.25 18.011H8.25"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9.75 23.25H2.25C1.85218 23.25 1.47064 23.092 1.18934 22.8107C0.908035 22.5294 0.75 22.1478 0.75 21.75V6C0.75 5.60218 0.908035 5.22064 1.18934 4.93934C1.47064 4.65804 1.85218 4.5 2.25 4.5H6C6 3.50544 6.39509 2.55161 7.09835 1.84835C7.80161 1.14509 8.75544 0.75 9.75 0.75C10.7446 0.75 11.6984 1.14509 12.4017 1.84835C13.1049 2.55161 13.5 3.50544 13.5 4.5H17.25C17.6478 4.5 18.0294 4.65804 18.3107 4.93934C18.592 5.22064 18.75 5.60218 18.75 6V8.25"
          ></path>
          <path
            stroke="currentColor"
            strokeWidth="1.5"
            d="M9.75 4.51099C9.54289 4.51099 9.375 4.34309 9.375 4.13599C9.375 3.92888 9.54289 3.76099 9.75 3.76099"
          ></path>
          <path
            stroke="currentColor"
            strokeWidth="1.5"
            d="M9.75 4.51099C9.95711 4.51099 10.125 4.34309 10.125 4.13599C10.125 3.92888 9.95711 3.76099 9.75 3.76099"
          ></path>
          <g>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M17.25 23.25C20.5637 23.25 23.25 20.5637 23.25 17.25C23.25 13.9363 20.5637 11.25 17.25 11.25C13.9363 11.25 11.25 13.9363 11.25 17.25C11.25 20.5637 13.9363 23.25 17.25 23.25Z"
            ></path>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M19.9239 15.505L17.0189 19.379C16.9543 19.4649 16.8721 19.536 16.7776 19.5873C16.6832 19.6387 16.5789 19.6692 16.4717 19.6768C16.3645 19.6844 16.2569 19.6689 16.1562 19.6313C16.0555 19.5937 15.964 19.535 15.8879 19.459L14.3879 17.959"
            ></path>
          </g>
        </svg>
      ),
      items: ["Task 1", "Task 2", "Task 3"],
    },
    {
      title: "File Manager",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="nav-link-icon"
          height="18"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.25,9.75v-3a1.5,1.5,0,0,0-1.5-1.5H8.25V3.75a1.5,1.5,0,0,0-1.5-1.5H2.25a1.5,1.5,0,0,0-1.5,1.5v16.3a1.7,1.7,0,0,0,3.336.438l2.351-9.657A1.5,1.5,0,0,1,7.879,9.75H21.75A1.5,1.5,0,0,1,23.2,11.636l-2.2,9A1.5,1.5,0,0,1,19.55,21.75H2.447"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></path>
        </svg>
      ),
      items: ["File 1", "File 2", "File 3"],
    },
    {
      title: "Authentication",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="nav-link-icon"
          height="18"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.25,9.75v-3a1.5,1.5,0,0,0-1.5-1.5H8.25V3.75a1.5,1.5,0,0,0-1.5-1.5H2.25a1.5,1.5,0,0,0-1.5,1.5v16.3a1.7,1.7,0,0,0,3.336.438l2.351-9.657A1.5,1.5,0,0,1,7.879,9.75H21.75A1.5,1.5,0,0,1,23.2,11.636l-2.2,9A1.5,1.5,0,0,1,19.55,21.75H2.447"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      title: "Documentation v1.5",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="nav-link-icon"
          height="18"
          width="18"
        >
          <path
            d="M22.627 14.87 15 22.5l-3.75.75.75-3.75 7.631-7.63a2.113 2.113 0 0 1 2.991 0l.009.008a2.116 2.116 0 0 1-.004 2.992zM8.246 20.25h-6a1.5 1.5 0 0 1-1.5-1.5V2.25a1.5 1.5,0 0 1 1.5-1.5h15a1.5 1.5 0 0 1 1.5 1.5V9m-10.5-3.75h6m-9 4.5h9m-9 4.5h7.5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      ),
      items: ["Guide", "API Reference", "FAQ"],
    },
  ];

  return (
    <div className="bg-[#0E2238] h-screen text-white p-[30px]">
      <a>
        <img
          className="py-[6px] mb-[38px]"
          src="https://d33wubrfki0l68.cloudfront.net/55307694d1a6b107d2d87c838a1aaede85cd3d84/66f18/assets/images/logo-dark.svg"
          alt="Dashly Logo"
        />
      </a>
      <div>
        <ul className="space-y-2">
          {navItems.map((navItem, index) => (
            <li key={index}>
              <button
                onClick={() => (navItem.items ? toggleDropdown(index) : null)}
                className="w-full text-left flex items-center pe-[30px] py-2 hover:bg-[#1A3A5A] focus:outline-none"
              >
                <span className="flex items-center flex-grow">
                  <span className="mr-3">{navItem.icon}</span>
                  {navItem.title}
                </span>
                {navItem.items && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-4 h-4 transition-transform ${
                      openDropdown === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m6 9 6 6 6-6"
                    />
                  </svg>
                )}
              </button>
              {navItem.items && openDropdown === index && (
                <ul className="ml-10 space-y-2">
                  {navItem.items.map((item, subIndex) => (
                    <li key={subIndex} className="py-1 hover:text-gray-300">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
