import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class ProjectDetails extends Component {
  render() {
    const { project, auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="signin" />;
    }
    if (project) {
      return (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{project.title}</span>
              <p>{project.content}</p>
            </div>
            <div className="card-action gret lighten-4 grey-text">
              <div>
                {project.authorFirstName} {project.authorLastName}
              </div>
              <div>29nd july, 2am</div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container center">
          <p>Loading project...</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth,
  };
};

export default compose(
  firestoreConnect(() => ["projects"]),
  connect(mapStateToProps)
)(ProjectDetails);
