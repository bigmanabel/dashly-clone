import ExpenseCard from "./ExpenseCard";
import IncomeCard from "./IncomeCard";
import PageViewsCard from "./PageViewsCard";
import TotalCard from "./TotalCard";
import UsersCard from "./UsersCard";
import ProjectsCard from "./ProjectsCard";
import SalesCard from "./SalesCard";

const Main = () => {
  return (
    <div className="w-full px-[45px] flex-1 overflow-y-auto mb-5 sm:px-[15px]">
      <h1 className="text-[21.233px] mb-[23.55px] font-bold">Dashboard</h1>
      <div className="flex sm:mb-[15px] sm:flex-col">
        <div className="w-5/12 mb-5 sm:w-full">
          <div className="flex sm:flex-col md:flex-row md:-mx-[15px]">
            <IncomeCard />
            <ExpenseCard />
          </div>
        </div>
        <div className="w-7/12 sm:w-full">
          <div className="flex sm:flex-col md:flex-row md:-mx-[15px]">
            <TotalCard />
            <PageViewsCard />
          </div>
        </div>
      </div>
      <div className="flex mb-5 sm:flex-col">
        <div className="w-5/12 flex sm:mb-[15px] sm:w-full">
          <ProjectsCard />
        </div>
        <div className="w-7/12 flex sm:w-full">
          <SalesCard />
        </div>
      </div>
      <div className="sm:w-full">
        <UsersCard />
      </div>
    </div>
  );
};

export default Main;
