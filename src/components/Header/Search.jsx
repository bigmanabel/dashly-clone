const Search = () => {
  return (
    <div>
      <form className="flex items-center">
        <input
          type="text"
          className="mr-2 rounded h-10 border-0 bg-[#F1F5F7] focus:outline-none p-2 text-xs w-[250px]"
          placeholder="Search..."
        />
        <button className="bg-[#009EA9] text-white rounded-lg p-2">
          <svg
            viewBox="0 0 24 24"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.750 9.812 A9.063 9.063 0 1 0 18.876 9.812 A9.063 9.063 0 1 0 0.750 9.812 Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              transform="translate(-3.056 4.62) rotate(-23.025)"
            ></path>
            <path
              d="M16.221 16.22L23.25 23.25"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Search;
