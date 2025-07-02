import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import MiddleNav from "../components/MiddleNav";
import Footer from "../components/Footer";
function DashboardLayout({ children }) {
  return (
    <>
      <div className="min-h-[100vh] w-full">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="w-full">
          <Banner />
        </div>
        <div className="w-full">
          <MiddleNav />
        </div>
        <div className="w-full">{children}</div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
