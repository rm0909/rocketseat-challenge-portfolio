import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import { getUser, getProjects, getPosts } from "./util/axios";
import { Container, Row, Col } from "react-bootstrap";
import { PictureBox } from "./components/boxes/PictureBox";
import { IconBox } from "./components/boxes/IconsBox";
import { TechnologyBox } from "./components/boxes/TechnologyBox";
import { EducationBox } from "./components/boxes/EducationBox";
import { ProjectContainer } from "./components/containers/ProjectContainer";
import { ProjectHeader } from "./components/containers/ProjectHeader";
import { MainProjectsContainer } from "./components/containers/MainProjectsContainer";
import { BlogsHeader } from "./components/containers/BlogsHeader";
import { BlogsContainer } from "./components/containers/BlogsContainer";
function App() {
  const [data, setData] = useState({});
  const [projects, setProjects] = useState([]);
  const [posts, setPosts] = useState([]);
  const [showProjects, setShowProjects] = useState(false);
  const [showPosts, setShowPosts] = useState(true);
  useEffect(() => {
    getUser().then((res) => setData(res));
    getProjects().then((res) => setProjects(res));
    getPosts().then((res) => setPosts(res));
  }, []);
  const handleShowProjects = () => setShowProjects((prev) => (prev ? false : true));
  const handleShowPosts = () => setShowPosts((prev) => (prev ? false : true));
  return (
    <main className="App">
      {data && (
        <Container fluid>
          <Row>
            <Col sm={6} md={5} lg={4} xxl={3}>
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
            <Col md={7} xl={8} xxl={9}>
              <ProjectHeader showProjects={() => handleShowProjects()} />
              {projects.length > 0 && showProjects ? (
                <ProjectContainer projectsArray={projects} />
              ) : (
                projects.length > 0 &&
                !showProjects && (
                  <MainProjectsContainer projectsArray={projects} />
                )
              )}
              <BlogsHeader showPosts={()=> handleShowPosts()}/>
              {posts.length > 0 && showPosts && <BlogsContainer postsArray={posts}  />}
            </Col>
          </Row>
        </Container>
      )}
    </main>
  );
}

export default App;
