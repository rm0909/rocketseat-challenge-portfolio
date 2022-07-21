import folderIcon from "../assets/folder.svg";
import starIcon from "../assets/star.svg";
import forkIcon from "../assets/git-branch.svg";
import { ReactSVG } from "react-svg";

function ProjectContainer({ projectsArray }) {
  console.log(projectsArray);
  return (
    <section className="project-container">
      {projectsArray.map((project) => {
        return (
          <div className="project-box  cards">
            <div className="project-title">
              <ReactSVG src={folderIcon} className="inline-block" />
              <p className="inline-block">{project.name}</p>
            </div>
            <div className="project-description">
              <p>{project.description}</p>
            </div>
            <div className="project-repo-details">
              <div className="project-repo-count">
                <div>
                  <ReactSVG src={starIcon} className="inline-block" />{" "}
                  <p className="inline-block">{project.stargazers_count}</p>
                </div>
                <div>
                  <ReactSVG src={forkIcon} className="inline-block" />
                  <p className="inline-block">{project.forks}</p>
                </div>
              </div>

              <div></div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
export { ProjectContainer };
