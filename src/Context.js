import React, { Component } from "react";
import items from "./data";

const ProjectsContext = React.createContext();

//

class ProjectsProvider extends Component {
  state = {
    projects: [],
    mainProjects: [],
    loading: true,
  };

  // getData

  componentDidMount() {
    let projects = this.formatData(items);
    let mainProjects = projects.filter(
      (project) => project.mainProject === true
    );
    this.setState({
      projects,
      mainProjects,
      loading: false,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let videos = item.fields.videos.map((video) => video.fields.file.url);
      let project = { ...item.fields, images, videos, id };
      return project;
    });
    return tempItems;
  }

  getProject = (slug) => {
    let tempProjects = [...this.state.projects];
    const project = tempProjects.find((project) => project.slug === slug);
    return project;
  };

  render() {
    return (
      <ProjectsContext.Provider
        value={{ ...this.state, getProject: this.getProject }}
      >
        {this.props.children}
      </ProjectsContext.Provider>
    );
  }
}

const ProjectsConsumer = ProjectsContext.Consumer;

export { ProjectsProvider, ProjectsConsumer, ProjectsContext };
