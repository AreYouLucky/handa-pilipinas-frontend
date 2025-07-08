import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import MiddleNav from "../components/MiddleNav";
import Footer from "../components/Footer";
import Framer from "../components/Framer";
function DashboardLayout({ children }) {
  return (
    <>
      <div className="min-h-[100vh] w-full">
        <div className="w-full">
          <Framer animation="fade-in">
            <Navbar />
          </Framer>
        </div>
        <div className="w-full">
          <Framer animation="fade-in">
            <Banner />
          </Framer>
        </div>
        <div className="w-full">
            <MiddleNav />
        </div>
        <div className="w-full">{children}</div>
        <div className="w-full">
          <Framer animation="fade-up">
            <Footer />
          </Framer>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
