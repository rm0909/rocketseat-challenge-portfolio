const ProjectHeader = ({showProjects}) => (
  <header className="project-header cards">
    <h1>Meus Projetos</h1>
    <p onClick={showProjects}>mostrar todos</p>
  </header>
);
export { ProjectHeader }