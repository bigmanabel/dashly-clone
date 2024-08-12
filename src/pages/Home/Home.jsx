import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import SideNav from "../../components/SideNav/SideNav";

const Home = () => {
  return (
    <div className="flex h-screen sm:flex-col">
      <div className="flex-[1.625] h-full">
        <SideNav />
      </div>

      <div className="flex-[10.325] bg-[#F8FAFB] flex flex-col">
        <main className="flex-1 overflow-y-auto">
          <Header />
          <Main />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Home;
