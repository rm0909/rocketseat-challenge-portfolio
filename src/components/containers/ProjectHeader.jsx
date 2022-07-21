const ProjectHeader = ({showProjects}) => (
  <header id="project-header" className="cards">
    <h1>Meus Projetos</h1>
    <p onClick={showProjects}>veja todos</p>
  </header>
);
export { ProjectHeader }