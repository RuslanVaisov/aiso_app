import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { gsap } from "gsap";

const Project = ({ project }) => {
  const { slug, images, title, description } = project;

  let projectEffect = useRef(null);
  let headerEffect = useRef(null);
  let paragraphEffect = useRef(null);

  useEffect(() => {
    gsap.from([projectEffect, headerEffect, paragraphEffect], 0.8, {
      delay: 0.5,
      ease: "power3.out",
      y: -64,
      opacity: 0,
      stagger: {
        amount: 0.15,
      },
    });
  }, []);

  return (
    <div className="sm:mx-6 mx-10 py-10 pb-2 border-b sm:border-transparent">
      <Link to={`/all-works/${slug}`}>
        <img ref={(el) => (projectEffect = el)} src={images[0]} alt={slug} />
        <h2
          ref={(el) => (headerEffect = el)}
          className="font-medium mt-2 sm:mt-4 text-xl "
        >
          {title}
        </h2>
        <p
          ref={(el) => (paragraphEffect = el)}
          className="text-sm leading-tight text-gray-700"
        >
          {description}
        </p>
      </Link>
    </div>
  );
};

export default Project;

Project.propTypes = {
  project: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};
