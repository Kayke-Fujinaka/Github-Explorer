import { useState } from "react";

export function Counter() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
