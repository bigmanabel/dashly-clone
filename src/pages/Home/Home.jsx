import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import SideNav from "../../components/SideNav/SideNav";

const Home = () => {
  return (
    <div className="flex h-screen sm:flex-col lg:flex-row">
      <div className="lg:w-1/5 min-[1400px]:col-span-2 h-full">
        <SideNav />
      </div>

      <div className="lg:w-4/5 min-[1400px]:col-span-10 bg-[#F8FAFB] flex flex-col">
        <main className="overflow-y-auto">
          <Header />
          <Main />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Home;
