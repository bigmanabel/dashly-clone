import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import SideNav from "../../components/SideNav/SideNav";

const Home = () => {
  return (
    <div className="flex h-screen sm:flex-col lg:flex-row">
      <div className="lg:w-[275px] h-full">
        <SideNav />
      </div>

      <div className="flex-[10.325] bg-[#F8FAFB] flex flex-col">
        <main className="lg:w-[749px] xl:w-[1005px] overflow-y-auto">
          <Header />
          <Main />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Home;
