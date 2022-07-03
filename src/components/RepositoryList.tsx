import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
import { useEffect, useState } from "react";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Kayke-Fujinaka/repos")
      .then((response) => response.json()) // Converte a resposta pra JSON
      .then((data) => setRepositories(data)); // Os dados convertidos definidos no repositories
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem repository={repository} key={repository.name} />
          );
        })}
      </ul>
    </section>
  );
}
