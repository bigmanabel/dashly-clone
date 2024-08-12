const NotificationsButton = ({ onClick }) => {
  return (
    <div className="inline-block">
      <button
        type="button"
        onClick={onClick}
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
            d="M10,21.75a2.087,2.087,0,0,0,4.005,0"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></path>
          <path
            d="M12 3L12 0.75"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></path>
          <path
            d="M12,3a7.5,7.5,0,0,1,7.5,7.5c0,7.046,1.5,8.25,1.5,8.25H3s1.5-1.916,1.5-8.25A7.5,7.5,0,0,1,12,3Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default NotificationsButton;