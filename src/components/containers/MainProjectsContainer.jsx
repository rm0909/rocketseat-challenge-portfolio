import { ReactSVG } from "react-svg";
import folderIcon from "../assets/folder.svg";
import starIcon from "../assets/star.svg";
import forkIcon from "../assets/git-branch.svg";

function MainProjectsContainer({ projectsArray }) {
  console.log(projectsArray);

  const styles = {
    HTML: {
      backgroundColor: "brown",
    },
    CSS: {
      backgroundColor: "blue",
    },
    JavaScript: {
      backgroundColor: "yellow",
    },
  };

  return (
    <div className="project-container">
      <div className="project-box cards">
        <a
          href={projectsArray[7].html_url}
          target="_blank"
          className="inline-block"
        >
          <div className="project-title">
            <ReactSVG src={folderIcon} className="inline-block" />
            <p className="inline-block">{projectsArray[7].name}</p>
          </div>
        </a>
        <div className="project-description">
          <p>{projectsArray[7].description}</p>
        </div>

        <div className="project-repo-details">
          <div className="project-repo-count">
            <div>
              <ReactSVG src={starIcon} className="inline-block" />{" "}
              <p className="inline-block">
                {projectsArray[7].stargazers_count}
              </p>
            </div>
            <div>
              <ReactSVG src={forkIcon} className="inline-block" />
              <p className="inline-block">{projectsArray[7].forks}</p>
            </div>
          </div>
          <div className="project-language">
            <div
              className="circle inline-block"
              style={styles[projectsArray[7].language]}
            ></div>
            <div className="language-name inline-block">
              {projectsArray[7].language}
            </div>
          </div>
        </div>
      </div>
      {/* // ================================================================================= */}
      <div className="project-box cards">
        <a
          href={projectsArray[8].html_url}
          target="_blank"
          className="inline-block"
        >
          <div className="project-title">
            <ReactSVG src={folderIcon} className="inline-block" />
            <p className="inline-block">{projectsArray[8].name}</p>
          </div>
        </a>
        <div className="project-description">
          <p>{projectsArray[8].description}</p>
        </div>

        <div className="project-repo-details">
          <div className="project-repo-count">
            <div>
              <ReactSVG src={starIcon} className="inline-block" />{" "}
              <p className="inline-block">
                {projectsArray[8].stargazers_count}
              </p>
            </div>
            <div>
              <ReactSVG src={forkIcon} className="inline-block" />
              <p className="inline-block">{projectsArray[8].forks}</p>
            </div>
          </div>
          <div className="project-language">
            <div
              className="circle inline-block"
              style={styles[projectsArray[8].language]}
            ></div>
            <div className="language-name inline-block">
              {projectsArray[8].language}
            </div>
          </div>
        </div>
      </div>
      {/* // ================================================================================= */}
      <div className="project-box cards">
        <a
          href={projectsArray[5].html_url}
          target="_blank"
          className="inline-block"
        >
          <div className="project-title">
            <ReactSVG src={folderIcon} className="inline-block" />
            <p className="inline-block">{projectsArray[5].name}</p>
          </div>
        </a>
        <div className="project-description">
          <p>{projectsArray[5].description}</p>
        </div>

        <div className="project-repo-details">
          <div className="project-repo-count">
            <div>
              <ReactSVG src={starIcon} className="inline-block" />{" "}
              <p className="inline-block">
                {projectsArray[5].stargazers_count}
              </p>
            </div>
            <div>
              <ReactSVG src={forkIcon} className="inline-block" />
              <p className="inline-block">{projectsArray[5].forks}</p>
            </div>
          </div>
          <div className="project-language">
            <div
              className="circle inline-block"
              style={styles[projectsArray[5].language]}
            ></div>
            <div className="language-name inline-block">
              {projectsArray[5].language}
            </div>
          </div>
        </div>
      </div>
      {/* // ================================================================================= */}
      <div className="project-box cards">
        <a
          href={projectsArray[4].html_url}
          target="_blank"
          className="inline-block"
        >
          <div className="project-title">
            <ReactSVG src={folderIcon} className="inline-block" />
            <p className="inline-block">{projectsArray[4].name}</p>
          </div>
        </a>
        <div className="project-description">
          <p>{projectsArray[4].description}</p>
        </div>

        <div className="project-repo-details">
          <div className="project-repo-count">
            <div>
              <ReactSVG src={starIcon} className="inline-block" />{" "}
              <p className="inline-block">
                {projectsArray[4].stargazers_count}
              </p>
            </div>
            <div>
              <ReactSVG src={forkIcon} className="inline-block" />
              <p className="inline-block">{projectsArray[4].forks}</p>
            </div>
          </div>
          <div className="project-language">
            <div
              className="circle inline-block"
              style={styles[projectsArray[4].language]}
            ></div>
            <div className="language-name inline-block">
              {projectsArray[4].language}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { MainProjectsContainer };
