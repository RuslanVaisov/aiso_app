import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProjectsContext } from "../Context";
import Footer from "../components/Footer";

export default class SingleProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.match.params.slug,
    };
  }

  static contextType = ProjectsContext;

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { getProject } = this.context;
    const project = getProject(this.state.slug);
    if (!project) {
      return (
        <div className="w-full h-screen flex flex-col bg-gray-900 justify-center items-center text-white">
          <h3 className="text-3xl text-center p-8">
            Информация про данный проект отсутствует...
          </h3>
          <Link
            to="/all-works"
            className="border-transparent rounded-full py-2 px-4 hover:bg-red-600 bg-red-700"
          >
            Все проекты
          </Link>
        </div>
      );
    }

    const { title, description, mainText, images, videos } = project;

    return (
      <React.Fragment>
        <div className="flex flex-col justify-center items-center">
          <div className="max-w-screen-lg my-24 px-10 m-auto">
            <h1 className="sm:text-4xl text-3xl font-bold">{title}</h1>
            <h2 className="sm:text-xl text-lg text-red-600 font-medium py-2">
              {description}
            </h2>
            <p className="sm:text-lg text-md pt-2 pb-8">{mainText}</p>
            {images.map((item, index) => {
              return (
                <img className="py-4" src={item} key={index} alt={title} />
              );
            })}
            {videos.map((item, index) => {
              if (item !== "") {
                return (
                  <iframe
                    className="py-4"
                    width="100%"
                    height="600"
                    src={item}
                    key={index}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                );
              }

              return "";
            })}
          </div>
          <Link
            to="/all-works"
            className="border-transparent rounded-full text-md py-2 mb-20 text-white px-10 uppercase hover:bg-red-600 bg-red-700"
          >
            Все проекты
          </Link>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
