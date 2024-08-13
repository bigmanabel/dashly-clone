import ExpenseCard from "./ExpenseCard";
import IncomeCard from "./IncomeCard";
import PageViewsCard from "./PageViewsCard";
import TotalCard from "./TotalCard";
import UsersCard from "./UsersCard";
import ProjectsCard from "./ProjectsCard";
import SalesCard from "./SalesCard";

const Main = () => {
  return (
    <div className="w-full px-[45px] flex-1 overflow-y-auto mb-5 xs:px-[15px] xs:overflow-x-hidden xl:px-[45px]">
      <h1 className="text-[21.233px] mb-[23.55px] font-bold">Dashboard</h1>
      <div className="flex xs:mb-[15px] xs:flex-col xxl:flex-row">
        <div className="w-5/12 mb-5 xs:w-full xxl:w-5/12">
          <div className="flex xs:flex-col md:flex-row md:-mx-[15px] md:mb-[15px] xxl:px-[15px]">
            <IncomeCard />
            <ExpenseCard />
          </div>
        </div>
        <div className="w-7/12 xs:w-full xxl:w-7/12">
          <div className="flex xs:flex-col md:flex-row md:-mx-[15px] xxl:px-[15px]">
            <TotalCard />
            <PageViewsCard />
          </div>
        </div>
      </div>
      <div className="flex mb-5 xs:flex-col xxl:flex-row xxl:px-[15px]">
        <div className="w-5/12 flex xs:mb-[15px] xs:w-full">
          <ProjectsCard />
        </div>
        <div className="w-7/12 flex xs:w-full xxl:">
          <SalesCard />
        </div>
      </div>
      <div className="xs:w-full">
        <UsersCard />
      </div>
    </div>
  );
};

export default Main;
