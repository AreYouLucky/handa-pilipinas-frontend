import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
function Footer() {
  return (
    <footer className="montserrat bg-[#ED1E24] pt-4">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 md:space-y-6">
          <div className="w-full">
            <ul className="text-gray-100">
              <h3 className="text-2xl font-bold text-gray-50 sm:pb-2">
                Visit Us
              </h3>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-lg duration-150 hover:text-gray-50 hover:scale-103"
                >
                  <FaFacebookSquare className="rounded-md bg-white text-2xl text-blue-800" />{" "}
                  <span>HANDA PILIPINAS</span>
                </a>
              </li>
            </ul>
            <ul className="mt-5 mb-5 text-gray-300 md:mt-10">
              <h3 className="text-2xl font-semibold text-gray-50 sm:pb-2">
                Contact Us
              </h3>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 text-lg duration-150 hover:text-gray-50 hover:scale-103"
                >
                  <FaPhone className="rounded-md text-xl text-white" />{" "}
                  <span>0000-0000-000</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 text-lg duration-150 hover:text-gray-50 hover:scale-103"
                >
                  <IoMdMail className="rounded-md text-xl text-white" />{" "}
                  <span>email@email.com</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <ul className="text-gray-300">
              <h3 className="text-2xl font-semibold text-gray-50 sm:pb-2">
                Categories
              </h3>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 text-lg duration-150 hover:text-gray-50 hover:scale-103"
                >
                  #ScienceJournoAko
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 text-lg duration-150 hover:text-gray-50 hover:scale-103"
                >
                  Agriculture
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 text-lg duration-150 hover:text-gray-50 hover:scale-103"
                >
                  CEST
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 text-lg duration-150 hover:text-gray-50 hover:scale-103"
                >
                  Disaster Resilience
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 text-lg duration-150 hover:text-gray-50 hover:scale-103"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 text-lg duration-150 hover:text-gray-50 hover:scale-103"
                >
                  Environment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 text-lg duration-150 hover:text-gray-50 hover:scale-103"
                >
                  Gender and Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 text-lg duration-150 hover:text-gray-50 hover:scale-103"
                >
                  Handa Pilipinas
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <ul className="text-gray-300">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 text-lg duration-150 hover:text-gray-50 hover:scale-103 md:mt-7"
                >
                  Health and Nutrition
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 text-lg duration-150 hover:text-gray-50 hover:scale-103"
                >
                  NSTW
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 text-lg duration-150 hover:text-gray-50 hover:scale-103"
                >
                  NYSTIF
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 text-lg duration-150 hover:text-gray-50 hover:scale-103"
                >
                  RSTW
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 text-lg duration-150 hover:text-gray-50 hover:scale-103"
                >
                  Science Enterpreneurship in Technology
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 text-lg duration-150 hover:text-gray-50 hover:scale-103"
                >
                  Setup & Livelihood
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 text-lg duration-150 hover:text-gray-50 hover:scale-103"
                >
                  Special Feature
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 text-lg duration-150 hover:text-gray-50 hover:scale-103"
                >
                  Technology and Innovation
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between border-t border-gray-50 py-10">
          <img src="/images/logos/DOST.png" alt="" className="mb-2 h-24" />
          <p className="text-center text-sm text-gray-50 md:text-lg">
            Copyright © 2025 Handa Pilipinas - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
