import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
import { useEffect, useState } from "react";

const repository = {
  name: "unform",
  description: "Forms in React",
  link: "https://github.com/Kayke-Fujinaka/Github-Explorer",
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Kayke-Fujinaka/repos")
      .then((response) => response.json()) // Converte a resposta pra JSON
      .then((data) => setRepositories(data)); // Os dados convertidos definidos no repositories
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem />
        <RepositoryItem repository={repository} />
        <RepositoryItem />
      </ul>
    </section>
  );
}
