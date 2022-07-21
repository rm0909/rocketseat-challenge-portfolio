import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import { getUser, getProjects } from "./util/axios";
import { Container, Row, Col } from "react-bootstrap";
import { PictureBox } from "./components/boxes/PictureBox";
import { IconBox } from "./components/boxes/IconsBox";
import { TechnologyBox } from "./components/boxes/TechnologyBox";
import { EducationBox } from "./components/boxes/EducationBox";
import { ProjectContainer } from "./components/containers/ProjectContainer";
import { ProjectHeader } from "./components/containers/ProjectHeader";

function App() {
  const [data, setData] = useState({});
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getUser().then((res) => setData(res));
    getProjects().then((res) => setProjects(res));
  }, []);

  return (
    <main className="App">
      {data && (
        <Container fluid>
          <Row>
            <Col md={4}>
              {" "}
              <PictureBox
                avatar={data.avatar_url}
                name={data.name}
                bio={data.bio}
              />
              <IconBox
                location={data.location}
                github={data.html_url}
                linkedin={"https://linkedin.com/in/raphael-machado-dev"}
                twitter={"https://twitter.com/RaphaelmDev"}
                personalWebsite={data.blog}
                email={"raphael.mm.91@gmail.com"}
              />
              <TechnologyBox />
              <EducationBox />
            </Col>
            <Col md={8}>
              <ProjectHeader />
              {projects && <ProjectContainer projectsArray={projects} />}
            </Col>
          </Row>
        </Container>
      )}
    </main>
  );
}

export default App;
