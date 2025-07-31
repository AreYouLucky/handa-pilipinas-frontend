import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePermMedia } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { IoNewspaperOutline } from "react-icons/io5";
import { FiInfo } from "react-icons/fi";
import { RiContactsBook3Line } from "react-icons/ri";


function MdNavigations() {
    const [isMainOpen, setIsMainOpen] = useState(false);
    const [isSubOpen, setIsSubOpen] = useState(false);
    const [isSub2Open, setIsSub2Open] = useState(false);

    const location = useLocation();
    const url = location.pathname;

    const toggleMainDropdown = () => {
        setIsMainOpen((prev) => !prev);
        if (isSubOpen) setIsSubOpen(false);
    };


    const toggleSubDropdown = () => {
        setIsSubOpen((prev) => !prev);
    };

    const toggleSub2Dropdown = () => {
        setIsSub2Open((prev) => !prev);
    };

    const navigation_text = "flex items-center py-4 px-3 md:p-0 hover:text-red-500 hover:scale-103 duration-300 montserrat-regular text-base text-gray-500";
    const li_text = " py-4 px-6 border-gray-200"
    const hightlight = "bg-gray-200 text-red-500"

    return (
        <div className="relative inline-block text-left">
            {/* Menu Button */}
            <button
                onClick={toggleMainDropdown}
                className="montserrat-bold focus:text-red-500 text-center inline-flex items-center"
                type="button"
            >
                <span className="text-4xl flex items-center text-gray-700">
                    {isMainOpen ? <IoMdClose className="mr-2 " /> : <IoMdMenu className="mr-2" />}
                </span>
            </button>

            {/* Main Dropdown */}
            <div
                className={`absolute right-0 mt-3 overflow-hidden w-80 bg-white rounded-lg shadow-lg z-20 transform transition-all duration-200 origin-top ${isMainOpen
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                    }`}
            >
                <ul className=" ">
                    <li className={`${li_text} ${url == '/' ? hightlight : ' '}`}>
                        <Link to="/" href="#" className={navigation_text}> <IoHomeOutline className="mr-3 text-2xl" /> HOME</Link>
                    </li>

                    {/* Accordion-style dropdown */}
                    <li className={`${li_text} ${isSubOpen ? 'pb-0' : ''}`} >
                        <button
                            onClick={toggleSubDropdown}
                            className={`flex items-center justify-between w-full cursor-pointer `}
                            type="button"
                        >
                            <span className={` ${navigation_text}`}>
                                <IoNewspaperOutline className="mr-3 text-2xl" />  MEDIA
                            </span>
                            <svg
                                className={`w-2.5 h-2.5 ms-3 transition-transform duration-200 ${isSubOpen ? "rotate-90" : ""
                                    }`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 9 4-4-4-4"
                                />
                            </svg>
                        </button>

                        {/* Accordion Content */}
                        <div
                            className={`transition-all duration-300 overflow-hidden ${isSubOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <ul className="pt-2 text-sm text-gray-700 ">
                                <li className={`${li_text} ${url == '/press-release' ? hightlight : ' '}`}>
                                    <Link to="/press-release" className={` ${navigation_text} ml-3`}>Press Release</Link>
                                </li>
                                <li className={`${li_text} ${url == '/speeches' ? hightlight : ' '}`}>
                                    <Link to="/speeches" className={` ${navigation_text} ml-3`}>Speeches</Link>
                                </li>
                                <li className={`${li_text} ${url == '/archives' ? hightlight : ' '}`}>
                                    <Link to="/archives" className={` ${navigation_text} ml-3`}>Archives</Link>
                                </li>
                                <li className={`${li_text} ${url == '/photos' ? hightlight : ' '}`}>
                                    <Link to="/photos" className={` ${navigation_text} ml-3`}>Photos</Link>
                                </li>
                                <li className={`${li_text} ${url == '/videos' ? hightlight : ' '}`}>
                                    <Link to="/videos" className={` ${navigation_text} ml-3`}>Videos</Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className={`${li_text} ${url == '/technologies' ? hightlight : ' '}`}>
                        <Link to="/technologies" className={navigation_text}> <GrTechnology className="mr-3 text-2xl" /> FEATURED TECHNOLOGIES</Link>
                    </li>
                    <li className={`${li_text} ${isSub2Open ? 'pb-0' : ''}`} >
                        <button
                            onClick={toggleSub2Dropdown}
                            className={`flex items-center justify-between w-full cursor-pointer `}
                            type="button"
                        >
                            <span className={` ${navigation_text}`}>
                                <MdOutlinePermMedia className="mr-3 text-2xl" />  RESOURCES
                            </span>
                            <svg
                                className={`w-2.5 h-2.5 ms-3 transition-transform duration-200 ${isSub2Open ? "rotate-90" : ""
                                    }`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 9 4-4-4-4"
                                />
                            </svg>
                        </button>
                        <div
                            className={`transition-all duration-300  overflow-hidden ${isSub2Open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <ul className="pt-2 text-sm text-gray-700 ">
                                <li className={`${li_text} ${url == '/policies-and-laws' ? hightlight : ' '}`}>
                                    <Link to="/policies-and-laws" className={navigation_text}>DRR Policies and Laws</Link>
                                </li>
                                <li className={`${li_text} ${url == '/learning-materials' ? hightlight : ' '}`}>
                                    <Link to="/learning-materials" className={navigation_text}>Learning Materials</Link>
                                </li>
                                <li className={`${li_text} ${url == '/drr-stats' ? hightlight : ' '}`}>
                                    <Link to="/drr-stats" className={navigation_text}>DRR Stats</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={`${li_text} ${url == '/about' ? hightlight : ' '}`}>
                        <Link to="/about" className={navigation_text}> <FiInfo className="mr-3 text-2xl" /> ABOUT HANDA PILIPINAS</Link>
                    </li>
                    <li className={`${li_text} ${url == '/contacts' ? hightlight : ' '}`}>
                        <Link to="/contacts" className={navigation_text}> <RiContactsBook3Line className="mr-3 text-2xl" />CONTACTS</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MdNavigations;
