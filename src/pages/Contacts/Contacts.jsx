import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import Framer from "../../components/Framer";

function Contacts() {
    return (
        <>
            <div className="m-auto w-full max-w-screen-2xl py-5 md:px-5 px-2 montserrat-regular">
                <Framer animation="fade-up">
                    <div className="text-center montserrat-bold text-2xl p-6 border rounded-lg hidden md:block">
                        Connect with us!
                        <p className="text-sm montserrat-regular text-gray-500">
                            We’re here to help and answer any question you might have, We look forward to hearing from you .
                        </p>
                    </div>
                </Framer>
                <div className=' grid grid-cols-1 md:grid-cols-2 px-4 gap-8 my-10 '>
                    <Framer animation="fade-left">
                        <div>
                            <p className='montserrat-bold md:text-2xl text-lg text-center md:text-start'>
                                Department of Science and Technology
                            </p>
                            <span className="flex text-sm md:text-base text-center md:text-start text-gray-500 mb-8">
                                DOST Compound, General Santos Avenue, Central Bicutan, Taguig, Metro Manila, Philippines
                            </span>
                            <div className="grid grid-cols-1 md:grid-cols-2 mt-3 md:gap-7 gap-3">
                                <div className=" p-4  flex gap-x-4 border border-gray-200 rounded-lg shadow-sm">
                                    <div className="flex-none md:w-10 md:h-10 w-6 h-6 bg-red-600 text-white rounded-lg flex items-center justify-center">
                                        <FaPhoneAlt className="text-white text-lg md:text-2xl" />
                                    </div>
                                    <div className="space-y-3 md:text-sm  text-xs">
                                        <h4 className="text-lg text-gray-800 montserrat-bold">
                                            Contact No
                                        </h4>
                                        <p>
                                            Smart/TNT - 000-0000-0000
                                        </p>
                                        <p>
                                            TM/Globe - 000-0000-0000
                                        </p>
                                        <p>
                                            Landline - 000-0000
                                        </p>
                                    </div>
                                </div>
                                <div className="  p-4  flex gap-x-4 border border-gray-200 rounded-lg shadow-sm">
                                    <div className="flex-none md:w-10 md:h-10 w-6 h-6 bg-red-600 text-white rounded-lg flex items-center justify-center">
                                        <MdEmail className="text-white text-lg md:text-2xl" />
                                    </div>
                                    <div className="space-y-3  md:text-sm  text-xs">
                                        <h4 className="text-lg text-gray-800 montserrat-bold">
                                            Email
                                        </h4>
                                        <p>
                                            someemail@gmail.com
                                        </p>
                                        <p>
                                            someemail@outlook.com
                                        </p>
                                        <p>
                                            someemail@yahoo.com
                                        </p>
                                    </div>
                                </div>
                                <div className="  p-4  flex gap-x-4 border border-gray-200 rounded-lg shadow-sm">
                                    <div className="flex-none md:w-10 md:h-10 w-6 h-6 bg-red-600 text-white rounded-lg flex items-center justify-center">
                                        <IoChatbubbleEllipses className="text-white text-lg md:text-2xl" />
                                    </div>
                                    <div className="space-y-3  md:text-sm  text-xs">
                                        <h4 className="text-lg text-gray-800 montserrat-bold">
                                            Chat with us
                                        </h4>
                                        <p>
                                            someone.messenger.com
                                        </p>
                                        <p>
                                            someone.whatsapp.com
                                        </p>
                                        <p>
                                            someone.viber.com
                                        </p>
                                    </div>
                                </div>
                                <div className="  p-4  flex gap-x-4 border border-gray-200 rounded-lg shadow-sm">
                                    <div className="flex-none md:w-10 md:h-10 w-6 h-6 bg-red-600 text-white rounded-lg flex items-center justify-center">
                                        <FaGlobe className="text-white text-lg md:text-2xl" />
                                    </div>
                                    <div className="space-y-3  md:text-sm  text-xs">
                                        <h4 className="text-lg text-gray-800 montserrat-bold">
                                            Websites
                                        </h4>
                                        <p>
                                            someweb.com
                                        </p>
                                        <p>
                                            someweb.com
                                        </p>
                                        <p>
                                            someweb.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Framer>
                    <Framer animation="fade-down">
                        <div className='w-full rounded-lg overflow-hidden shadow-md border border-gray-300'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.90778794198!2d121.04423850774764!3d14.48998271793831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cf13c1948447%3A0x510c7e818adcc6ee!2sDepartment%20of%20Science%20and%20Technology%20-%20Main%20Compound!5e0!3m2!1sen!2sph!4v1753766191403!5m2!1sen!2sph" width="100%" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </Framer>
                </div>
            </div>
        </>
    )
}

export default Contacts