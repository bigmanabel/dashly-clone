import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import SideNav from "../../components/SideNav/SideNav";

const Home = () => {
  return (
    <div className="flex h-screen xs:flex-col lg:flex-row">
      <SideNav />

      <main className="flex-1 bg-[#F8FAFB] overflow-y-auto">
        <Header />
        <Main />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
