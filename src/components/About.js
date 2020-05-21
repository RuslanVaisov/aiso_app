import React from "react";
import design from "../imgs/services/design.png";
import web from "../imgs/services/web.png";
import smm from "../imgs/services/smm.png";
import video from "../imgs/services/video.png";

const About = () => {
  return (
    <div className="bg-gray-900">
      <div className="w-full max-w-screen-xl m-auto flex flex-col justify-center items-center text-center p-4 text-white">
        <h1 className="text-white sm:text-4xl px-4 text-3xl mt-8 mb-8 font-medium">
          Чем мы занимаемся
        </h1>

        <div className="w-full m-auto grid lg:grid-cols-2 grid-cols-1 gap-10 py-10 px-4 content-center text-left">
          <div className="flex m-auto">
            <div className="p-1">
              <img src={design} width="40px" alt="дизайн" />
            </div>
            <div className="flex flex-col justify-center max-w-xs p-2">
              <div className="flex items-center">
                <h2 className="sm:text-xl text-lg tracking-wide">
                  ГРАФИЧЕСКИЙ ДИЗАЙН
                </h2>
              </div>
              <p className="text-gray-500 text-sm sm:text-base">
                логотипы, упаковки, фирменный стиль, каталоги, открытки, меню,
                билборды, этикетки, флаеры.
              </p>
            </div>
          </div>
          <div className="flex m-auto">
            <div className="p-1">
              <img src={video} width="40px" alt="дизайн" />
            </div>
            <div className="flex flex-col justify-center max-w-xs p-2">
              <div className="flex items-center">
                <h2 className="sm:text-xl text-lg tracking-wide">
                  ВИДЕО ПРОДАКШН
                </h2>
              </div>
              <p className="text-gray-500 text-sm sm:text-base">
                промо-ролики, рекламные ролики, ролики для социальных сетей,
                ролики для влогов
              </p>
            </div>
          </div>
          <div className="flex m-auto">
            <div className="p-1">
              <img src={web} width="40px" alt="дизайн" />
            </div>
            <div className="flex flex-col justify-center max-w-xs p-2">
              <div className="flex items-center">
                <h2 className="sm:text-xl text-lg tracking-wide">
                  РАЗРАБОТКА ВЕБ-САЙТОВ
                </h2>
              </div>
              <p className="text-gray-500 text-sm sm:text-base">
                лэндинг, интернет магазины, блоги, фотогалереи, портфолио,
                каталоги и брошюры, разработка телеграм ботов.
              </p>
            </div>
          </div>
          <div className="flex m-auto">
            <div className="p-1">
              <img src={smm} width="40px" alt="дизайн" />
            </div>
            <div className="flex flex-col justify-center max-w-xs p-2">
              <div className="flex items-center">
                <h2 className="sm:text-xl text-lg tracking-wide">
                  СММ ПРОДВИЖЕНИЕ
                </h2>
              </div>
              <p className="text-gray-500 text-sm sm:text-base">
                реклама в социальных сетях, настройка платных реклам через
                Facebook и Google Ads.
              </p>
            </div>
          </div>
        </div>

        {/* <p className="tracking-wide text-gray-500 text-center mb-4">
          Основные направления — графический дизайн (логотипов, упаковок,
          каталога, открыток, пригласительных, меню и т.д) создание и разработка
          веб-сайтов, создание видео и промо-роликов, СММ продвижение (реклама в
          социальных сетях facebook, instagram), а также разработка телеграм
          бота.
        </p> */}
        {/* <button className="border-transparent rounded-full sm:text-lg text-sm bg-red-700 text-white py-1 px-4 mt-4 mb-2 focus:outline-none hover:bg-red-600 tracking-wider">
          <Link to="/about">Подробнее</Link>
        </button> */}
      </div>
    </div>
  );
};

export default About;
