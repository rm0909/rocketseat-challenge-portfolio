import axios from "axios";

async function getUser() {
  const response = await axios("https://api.github.com/users/rm0909");
  const data = response.data;
  return data;
}
async function getProjects() {
  const response = await axios("https://api.github.com/users/rm0909/repos");
  const data = response.data;
  return data;
}
const getPosts = async () => {
  const response = await axios("https://dev.to/api/articles?username=rm0909");
  const { data } = response;
  return data;
};

export { getUser, getProjects, getPosts };
