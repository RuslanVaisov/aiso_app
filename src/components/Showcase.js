import React, { useEffect, useRef } from "react";
import "../fonts/Ubuntu-Regular.ttf";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Showcase = () => {
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);

  useEffect(() => {
    gsap.from([line1, line2, line3], 0.8, {
      delay: 0.3,
      ease: "power3.out",
      y: -64,
      opacity: 0,
      stagger: {
        amount: 0.15,
      },
    });
  }, []);

  return (
    <section className="font-ubuntu relative w-full h-full">
      <div className="showcase w-full h-half bg-gray-900 relative">
        <div className="hero-section flex flex-col h-full justify-center items-center px-6">
          <h1
            ref={(el) => (line1 = el)}
            className="text-white text-center  md:text-4xl sm:text-3xl text-2xl mb-1"
          >
            Мы поможем вам выразить себя достойно!
          </h1>
          <p
            ref={(el) => (line2 = el)}
            className="tracking-widest text-gray-500 text-center sm:text-sm text-xs"
          >
            Графический дизайн, разработка веб-сайтов, СММ, промо-ролики и много
            другое...
          </p>
          <button
            ref={(el) => (line3 = el)}
            className="border-transparent rounded-full sm:text-lg text-sm bg-red-700 text-white py-1 px-4 mt-4 mb-2 focus:outline-none hover:bg-red-600 tracking-wider"
          >
            <Link to="/order-design">Подробнее</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
