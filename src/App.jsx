import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Framer from "./components/Framer";
import { Outlet } from "react-router-dom";
import { BsMegaphoneFill } from "react-icons/bs";
function DashboardLayout() {
  return (
    <>
      <div className="min-h-[100vh] w-full max-w-screen relative scroll-smooth">
        <div className="bg-gray-700">
          <div className=" mx-auto px-4 py-2 flex items-start justify-center text-white md:px-8">
            <div className="flex gap-x-4 items-center">
              <div className="w-8 h-8 flex-none rounded-lg bg-red-600 flex items-center justify-center">
                <BsMegaphoneFill className="text-gray-50"/>
              </div>
              <p className="py-1 font-medium text-xs md:text-base montserrat-regular">
                Be Informed. Be Prepared. Handa Pilipinas!update
              </p>
            </div>
          </div>
        </div>
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
