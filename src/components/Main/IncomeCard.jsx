import Card from "../UI/Card";

const IncomeCard = () => {
  return (
    <div className="w-1/2 sm:w-full sm:mb-[15px]">
      <Card>
        <div className="flex justify-between p-5">
          <div className="flex-col">
            <h5 className="mb-[5px] text-[#AAB1B9] text-[12px] uppercase">
              <span className="rounded-full bg-[#31CF80] mr-1 w-[5px] h-[5px] inline-block"></span>
              Income
            </h5>
            <h2 className="mb-0 text-[22px] font-bold">$3,240</h2>
            <p className="text-[10px] text-[#AAB1B9]">No additional income</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="32"
              width="32"
              className="text-[#00BAC7]"
            >
              <defs>
                <style>
                  {`
        .a { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px; }
      `}
                </style>
              </defs>
              <title>cash-briefcase</title>
              <path
                className="a"
                d="M9.75,15.937c0,.932,1.007,1.688,2.25,1.688s2.25-.756,2.25-1.688S13.243,14.25,12,14.25s-2.25-.756-2.25-1.688,1.007-1.687,2.25-1.687,2.25.755,2.25,1.687"
              />
              <line className="a" x1="12" y1="9.75" x2="12" y2="10.875" />
              <line className="a" x1="12" y1="17.625" x2="12" y2="18.75" />
              <rect
                className="a"
                x="1.5"
                y="6.75"
                width="21"
                height="15"
                rx="1.5"
                ry="1.5"
              />
              <path
                className="a"
                d="M15.342,3.275A1.5,1.5,0,0,0,13.919,2.25H10.081A1.5,1.5,0,0,0,8.658,3.275L7.5,6.75h9Z"
              />
            </svg>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default IncomeCard;
