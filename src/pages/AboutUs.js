import React, { useRef, useEffect } from "react";
import Javlon from "../imgs/Javlon.jpg";
import Ruslan from "../imgs/Ruslan.jpg";
import { gsap } from "gsap";

function AboutUs() {
  let aboutHeaderEffect = useRef(null);
  let aboutParagraphEffect = useRef(null);
  let aboutEffect = useRef(null);

  useEffect(() => {
    gsap.from([aboutHeaderEffect, aboutParagraphEffect, aboutEffect], 0.8, {
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
      <div className="bg-gray-900 w-full min-h-screen pt-16 flex flex-col text-white justify-center items-center">
        <div className="flex flex-col max-w-4xl">
          <h1
            ref={(el) => (aboutHeaderEffect = el)}
            className="sm:text-3xl text-2xl tracking-widest text-center mt-16 sm:mx-10 mx-6"
          >
            "Aiso это команда, чья миссия помогать людям и организациям выразить
            себя достойно."
          </h1>
          <p
            ref={(el) => (aboutParagraphEffect = el)}
            className="text-justify sm:text-center text-lg pt-6 sm:mx-10 mx-10 text-gray-500"
          >
            Основные направления — графический дизайн (логотипов, упаковок,
            каталога, открыток, пригласительных, меню и т.д) создание и
            разработка веб-сайтов, создание видео и промо-роликов, СММ
            продвижение (реклама в социальных сетях facebook, instagram), а
            также разработка телеграм бота.
          </p>
        </div>
        <div
          ref={(el) => (aboutEffect = el)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-12 max-w-4xl"
        >
          <div>
            <img src={Ruslan} alt="Ruslan Vaisov" />
            <h1 className="text-center text-3xl py-4">Ruslan Vaisov</h1>
          </div>
          <div>
            <img src={Javlon} alt="Javlon Vaisov" />
            <h1 className="text-center text-3xl py-4">Javlon Vaisov</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AboutUs;
