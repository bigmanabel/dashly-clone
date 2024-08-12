import ExpenseCard from "./ExpenseCard";
import IncomeCard from "./IncomeCard";
import PageViewsCard from "./PageViewsCard";
import TotalCard from "./TotalCard";
import UsersCard from "./UsersCard";
import ProjectsCard from "./ProjectsCard";
import SalesCard from "./SalesCard";

const Main = () => {
  return (
    <div className="w-full px-[45px] flex-1 overflow-y-auto mb-5">
      <h1 className="text-[22px] mb-6 px-[15px]">Dashboard</h1>
      <div className="flex mb-5">
        <div className="w-5/12 mb-5">
          <div className="flex">
            <IncomeCard />
            <ExpenseCard />
          </div>
        </div>
        <div className="w-7/12">
          <div className="flex">
            <TotalCard />
            <PageViewsCard />
          </div>
        </div>
      </div>
      <div className="flex mb-5">
        <div className="w-5/12 flex mb-5">
          <ProjectsCard />
        </div>
        <div className="w-7/12 flex mb-5">
          <SalesCard />
        </div>
      </div>
      <div className="mb-5">
        <UsersCard />
      </div>
    </div>
  );
};

export default Main;
