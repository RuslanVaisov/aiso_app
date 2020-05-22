import React, { Component } from "react";
import { ProjectsContext } from "../Context";
import Loading from "../components/Loading";
import Project from "../components/Project";
import Footer from "../components/Footer";

export class AllWorks extends Component {
  static contextType = ProjectsContext;

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let { loading, projects } = this.context;

    projects = projects.map((project) => {
      return <Project key={project.id} project={project} />;
    });

    return (
      <React.Fragment>
        <section className="projects max-w-screen-xl pt-20 pb-16 m-auto flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {loading ? <Loading /> : projects}
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default AllWorks;
