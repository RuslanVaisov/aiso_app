import React from "react";
import partner1 from "../imgs/partners/nmedov.png";
import partner2 from "../imgs/partners/atmosphere.png";
import partner3 from "../imgs/partners/butcher.png";
import partner4 from "../imgs/partners/alif.png";
import partner5 from "../imgs/partners/pul-pul.png";
import partner6 from "../imgs/partners/qand.png";

let partners = [partner1, partner2, partner3, partner4, partner5, partner6];

const Partners = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-10 opacity-75">
      <div className="grid sm:grid-cols-6 grid-cols-3 justify-center items-center">
        {partners.map((partner, index) => {
          return (
            <div key={index} className="flex items-center justify-center">
              <img
                width="250px"
                className="px-4 py-4"
                src={partner}
                key={index}
                alt="Aiso partner logo"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
