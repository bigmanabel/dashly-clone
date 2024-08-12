import Card from "../UI/Card";
import SalesBarChart from "./SalesBarChart";

const SalesCard = () => {
  return (
    <div className="w-full px-[15px] flex-auto">
      <Card className="p-5">
        <div className="flex justify-between items-center flex-row box-border p-5 -mx-5 -mt-5">
          <h2 className="uppercase text-[14px] font-bold">Sales</h2>
          <span className="flex items-center">
            <h5 className="uppercase text-[12px] text-[#AAB1B9] w-fit font-semibold">
              <span className="rounded-full bg-[#00BAC7] mr-2 w-[9px] h-[9px] inline-block"></span>
              Projections
            </h5>
            <h5 className="uppercase text-[12px] text-[#AAB1B9] w-fit font-semibold ml-[15px]">
              <span className="rounded-full bg-[#F6F7F8] mr-2 w-[9px] h-[9px] inline-block"></span>
              Actual
            </h5>
          </span>
        </div>
          <SalesBarChart />
      </Card>
    </div>
  );
};

export default SalesCard;
