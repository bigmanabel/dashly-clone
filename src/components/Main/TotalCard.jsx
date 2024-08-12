import Card from "../UI/Card";
import TotalsLineChart from "./TotalsLineChart";

const TotalCard = () => {
  return (
    <div className="w-1/2 px-[15px]">
      <Card>
        <div className="flex justify-between p-5">
          <div className="flex-col">
            <h5 className="mb-[5px] text-[#AAB1B9] text-[12px] uppercase">
              Total
            </h5>
            <h2 className="mb-0 text-[22px] font-bold">$74,925</h2>
            <p className="text-[10px] text-[#AAB1B9] flex items-center">
              <span className="flex items-center font-bold text-[#31CF80] bg-[#31CF80] bg-opacity-10 w-fit px-2 rounded">
                <svg
                  viewBox="0 0 24 24"
                  height="10"
                  width="10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.25 12.75L23.25 6 16.5 6"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    d="M23.25,6l-7.939,7.939a1.5,1.5,0,0,1-2.122,0l-3.128-3.128a1.5,1.5,0,0,0-2.122,0L.75,18"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                </svg>
                <span className="ml-1">12%</span>
              </span>
              <span> from $65,934</span>
            </p>
          </div>
          <div>
            <TotalsLineChart />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TotalCard;
