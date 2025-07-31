import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Framer from "./components/Framer";
import { Outlet } from "react-router-dom";
function DashboardLayout() {
  return (
    <>
      <div className="min-h-[100vh] w-full max-w-screen relative scroll-smooth">
        {/* <div className="bg-gray-900">
          <div className=" px-4  flex items-start justify-start text-white md:px-10">
              <img
                src="/images/logos/Theme_HANDA PILIPINAS 2025.png"
                className="flex h-8 items-center space-x-3 border border-gray-800 md:h-18 rtl:space-x-reverse"
                alt="Logo"
              />
          </div>
        </div> */}
        <div className="sticky top-0 z-50">
          <Framer animation="fade-in">
            <Navbar />
          </Framer>
        </div>
        <div className="w-full overflow-hidden">
          <Framer animation="fade-in">
            <Banner />
          </Framer>
        </div>
        <div className="w-full overflow-hidden">
          <Outlet />
        </div>
        <div className="w-full overflow-hidden">
          <Framer animation="fade-up">
            <Footer />
          </Framer>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
