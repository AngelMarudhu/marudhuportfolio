import React, { useState } from "react";
import projectData from "../Utils/ProjectData";
import "../CSS/Project.css";

const ProjectCards = () => {
  const [project, setProject] = useState(null);

  const handleChallenge = (projectId) => {
    setProject(projectId);
  };

  const handleReset = () => {
    setProject(null);
  };

  return (
    <article>
      <div className="top_of_div">
        <h2>Projects</h2>

        {project ? (
          <div className="selected_project">
            {projectData
              .filter((product) => product.id === project)
              .map((value) => (
                <div key={value.id} className="selected_project_description">
                  <p>{value.description}</p>
                  <button className="selected_project_github">
                    <a
                      href={value.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Here It Is The GitHub Link For Your Review
                    </a>
                  </button>
                </div>
              ))}
            <button className="selected_project_button" onClick={handleReset}>
              <a href="#challenge">
                Shouldn't Want To Go Back? Just Smash The Big Button
              </a>
            </button>
          </div>
        ) : (
          <div className="project">
            {projectData.map((project) => (
              <div key={project.id} className="project_card">
                <h3 className="project_title">{project.title}</h3>
                <img src={project.image} alt={project.title} />

                {/* <div className="project_techstack">
              {project.techStack.map((tech, index) => (
                <span key={index} className="tech_badge">
                  {tech}
                </span>
              ))}
            </div> */}

                <div className="project_details">
                  <button
                    onClick={() => handleChallenge(project.id)}
                    id="challenge"
                  >
                    Challenges
                  </button>
                  <span>
                    Tech Stack: <strong>{project.techStack}</strong>
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCards;
