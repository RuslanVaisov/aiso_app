import React, { useRef, useEffect } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { gsap } from "gsap";

const Contact = () => {
  let phoneEffect = useRef(null);
  let emailEffect = useRef(null);
  let socialEffect = useRef(null);

  useEffect(() => {
    gsap.from([phoneEffect, emailEffect, socialEffect], 0.8, {
      delay: 0.5,
      ease: "power3.out",
      y: -64,
      opacity: 0,
      stagger: {
        amount: 0.15,
      },
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <React.Fragment>
      <div
        style={{ marginTop: "-72px" }}
        className="bg-gray-900 w-full h-screen flex flex-col text-white justify-center items-center p-8"
      >
        <div ref={(el) => (phoneEffect = el)} className="my-8">
          {/* <h1 className="tracking-widest pb-1 text-lg text-red-500 font-medium text-center">
            Телефон:
          </h1> */}
          <p className="px-2 text-white sm:text-2xl text-base tracking-wider text-center">
            (90) 9246608 | (90) 3721723
          </p>
        </div>
        <div ref={(el) => (emailEffect = el)} className="my-8">
          {/* <h1 className="tracking-widest pb-1 text-lg text-red-500 font-medium text-center">
            Почта:
          </h1> */}
          <p className="px-2 text-white tracking-wider sm:text-2xl text-base">
            info@aiso.uz
          </p>
        </div>
        <div
          ref={(el) => (socialEffect = el)}
          className="flex flex-col justify-center items-center my-8"
        >
          {/* <h1 className="tracking-widest pb-3 text-lg text-red-500 font-medium">
            Мы в социальных сетях
          </h1> */}
          <div className="flex">
            <a
              className="px-3 hover:text-gray-500 text-white tracking-wider"
              href="https://www.facebook.com/Aiso-102627234635436/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-2xl sm:text-3xl">
                <FaFacebookSquare />
              </p>
            </a>
            <a
              className="px-3 hover:text-gray-500 text-white tracking-wider"
              href="https://www.instagram.com/aiso_jr/?igshid=xe43likd9rhz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-2xl sm:text-3xl">
                <FaInstagram />
              </p>
            </a>
            <a
              className="px-3 hover:text-gray-500 text-white tracking-wider"
              href="https://t.me/aiso_jr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-2xl sm:text-3xl">
                <FaTelegramPlane />
              </p>
            </a>
            <a
              className="px-3 hover:text-gray-500 text-white tracking-wider"
              href="https://www.youtube.com/channel/UCCYeA97AWJq0k_fp4-BYJzQ/featured"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-2xl sm:text-3xl">
                <FaYoutube />
              </p>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
