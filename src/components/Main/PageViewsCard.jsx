import Card from "../UI/Card";
import PageViewsBarChart from "./PageViewsBarChart";

const PageViewsCard = () => {
  return (
    <div className="w-1/2 sm:w-full md:px-[15px]">
      <Card>
        <div className="flex justify-between p-5">
          <div className="flex-col">
            <h5 className="mb-[5px] text-[#AAB1B9] text-[12px] uppercase flex items-center">
              Pageviews
            </h5>
            <h2 className="mb-0 text-[22px] font-bold">123,598</h2>
            <p className="text-[10px] text-[#AAB1B9]">No additional income</p>
          </div>
          <div>
            <PageViewsBarChart />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PageViewsCard;
