import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import email from "../imgs/services/email.png";
import phone from "../imgs/services/phone.png";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="bg-gray-900">
        <div className="w-full max-w-screen-xl m-auto grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12 px-2 text-white">
          <div className="lg:flex justify-center items-center w-4/5 hidden m-auto">
            <h1 className=" tracking-wide p-auto">
              "Aiso это команда, чья миссия помогать людям и организациям
              выразить себя достойно"
            </h1>
          </div>
          <div className="flex flex-col justify-center m-auto pt-5 lg:pt-0">
            <div className="flex py-1 items-center">
              <div className="px-2">
                <img src={email} width="22px" alt="почта" />
              </div>
              <p className="px-1 py-1 text-white tracking-wider">
                info@aiso.uz
              </p>
            </div>
            <div className="flex py-1 items-center">
              <div className="px-2">
                <img src={phone} width="22px" alt="телефон" />
              </div>
              <p className="px-1 py-1 text-white tracking-wider">
                (90) 9246608 | (90) 3721723
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="tracking-widest hidden lg:block pb-3 text-lg text-gray-500 font-medium">
              мы в социальных сетях
            </h1>
            <div className="flex pt-5 lg:pt-0">
              <a
                className="pr-5 hover:text-gray-500 text-white tracking-wider"
                href="https://www.facebook.com/Aiso-102627234635436/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-3xl">
                  <FaFacebookSquare />
                </p>
              </a>
              <a
                className="px-5 hover:text-gray-500 text-white tracking-wider"
                href="https://www.instagram.com/aiso_jr/?igshid=xe43likd9rhz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-3xl">
                  <FaInstagram />
                </p>
              </a>
              <a
                className="px-5 hover:text-gray-500 text-white tracking-wider"
                href="https://t.me/aiso_jr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-3xl">
                  <FaTelegramPlane />
                </p>
              </a>
              <a
                className="pl-5 hover:text-gray-500 text-white tracking-wider"
                href="https://www.youtube.com/channel/UCCYeA97AWJq0k_fp4-BYJzQ/featured"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-3xl">
                  <FaYoutube />
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="border-b-2 border-gray-800 max-w-screen-xl m-auto"></div>
      </div>
      <div className="bg-gray-900">
        <div className="w-full max-w-screen-lg m-auto flex justify-center items-center text-center p-8 text-gray-500">
          <p>© 2020, ООО "Aiso JR"</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
