import React, { Component } from "react";
import { ProjectsContext } from "../Context";
import Loading from "./Loading";
import Project from "./Project";
import { Link } from "react-router-dom";

export class MainProjects extends Component {
  static contextType = ProjectsContext;
  render() {
    let { loading, mainProjects: projects } = this.context;

    projects = projects.map((project) => {
      return <Project key={project.id} project={project} />;
    });

    return (
      <section className="projects max-w-screen-xl m-auto flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {loading ? <Loading /> : projects}
        </div>
        <Link
          to="/all-works"
          className="border-transparent rounded-full text-md py-2 my-16 text-white px-10 uppercase hover:bg-red-600 bg-red-700"
        >
          Все проекты
        </Link>
      </section>
    );
  }
}

export default MainProjects;
