export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? "default"}</strong>
      <p>{props.repository?.description ?? "Form in JavaScript"}</p>
      <a target="_blank" href={props.repository?.link ?? "#"}>
        Acessar repositório
      </a>
    </li>
  );
}
