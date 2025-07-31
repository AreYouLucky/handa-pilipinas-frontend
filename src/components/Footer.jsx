import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";


function Footer() {
  return (
    <footer className="montserrat bg-[#ED1E24] pt-4">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="md:mt-8 mt-6 grid grid-cols-1 md:grid-cols-2 md:space-y-6 gap-8 my-5">
          <div className="text-gray-100 my-auto">
            <div className="flex gap-4 items-center flex-row">
              <div className=" ">
                <img
                  src="/images/logos/DOST_lhg.png"
                  className="w-24"
                  alt=""
                />
              </div>
              <div>
                <p className='montserrat-bold md:text-3xl text-lg text-start'>
                  Department of Science and Technology
                </p>
              </div>
            </div>
            <span className="flex text-sm md:text-base text-start mt-2 ">
              DOST Compound, General Santos Avenue, Central Bicutan, Taguig, Metro Manila, Philippines
            </span>
            <ul className="mt-5 mb-5 text-gray-300 ">
              <h3 className="text-lg montserrat-bold text-gray-50 sm:pb-2">
                Contact Us
              </h3>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 text-lg duration-150 hover:text-gray-50 hover:scale-103"
                >
                  <IoMdMail className="rounded-md text-xl text-white" />{" "}
                  <span><a href="mailto:ousec.drrcc@dost.gov.ph">ousec.drrcc@dost.gov.ph</a></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <div className='w-full  md:pr-10'>
              <div className="rounded-lg overflow-hidden shadow-md border border-gray-300">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.90778794198!2d121.04423850774764!3d14.48998271793831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cf13c1948447%3A0x510c7e818adcc6ee!2sDepartment%20of%20Science%20and%20Technology%20-%20Main%20Compound!5e0!3m2!1sen!2sph!4v1753766191403!5m2!1sen!2sph" width="100%" height="320" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-between border-t border-gray-50 pb-10 pt-4 mt-10 ">

          <div className=" items-center justify-between flex w-full gap-4">
            <p className="text-gray-100 md:text-base text-sm">Copyright © 2025 Handa Pilipinas - All rights reserved.</p>
            <div className="flex items-center gap-x-6 text-gray-400 mt-6">
              <a href="/" target="_Blank">
                <FaFacebook className="text-3xl text-blue-500 bg-gray-100 rounded-full hover:scale-125 duration-200" />
              </a>
              <a href="/" target="_Blank">
                <FaInstagramSquare className="text-3xl text-pink-600 bg-gray-100 rounded-md hover:scale-125 duration-200" />
              </a>
              <a href="/" target="_Blank">
                <AiFillTikTok className="text-3xl text-slate-600 bg-gray-100 rounded-md hover:scale-125 duration-200" />
              </a>
              <a href="/" target="_Blank">
                <IoLogoYoutube className="text-3xl text-red-500 bg-gray-100 rounded-sm px-[3px] hover:scale-125 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
