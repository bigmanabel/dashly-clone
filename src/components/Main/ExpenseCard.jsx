import Card from "../UI/Card";

const ExpenseCard = () => {
  return (
    <div className="w-1/2 sm:w-full">
      <Card>
        <div className="flex justify-between p-5">
          <div className="flex-col">
            <h5 className="mb-[5px] text-[#AAB1B9] text-[12px] uppercase flex items-center">
              <span className="rounded-full bg-[#D82C5B] mr-1 w-[5px] h-[5px] inline-block"></span>
              Expense
            </h5>
            <h2 className="mb-0 text-[22px] font-bold">$1,500</h2>
            <p className="text-[10px] text-[#AAB1B9]">
              + $6.50 bank charges fee
            </p>
          </div>
          <div>
            <svg
              viewBox="0 0 24 24"
              height="32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#00BAC7]"
            >
              <path
                d="M18.75,14.25H16.717a1.342,1.342,0,0,0-.5,2.587l2.064.826a1.342,1.342,0,0,1-.5,2.587H15.75"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
              <path
                d="M17.25 14.25L17.25 13.5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
              <path
                d="M17.25 21L17.25 20.25"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
              <path
                d="M11.250 17.250 A6.000 6.000 0 1 0 23.250 17.250 A6.000 6.000 0 1 0 11.250 17.250 Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
              <path
                d="M3.75 14.25L8.25 14.25"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
              <path
                d="M8.25 14.25L8.25 6.75"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
              <path
                d="M11.25 9.75L11.25 8.25"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
              <path
                d="M5.25 14.25L5.25 9.75"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
              <path
                d="M7.5,20.25H2.25a1.43,1.43,0,0,1-1.5-1.415V2.335A1.575,1.575,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V7.5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
            </svg>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ExpenseCard;
