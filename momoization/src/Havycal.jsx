import { useMemo, useState } from "react";

const Havycal = () => {
  const [count, setCount] = useState(0);

  function expensiveCalculation(num) {
    return num * 2;
  }

  const result = expensiveCalculation(count);
  return (
    <div>
      <h1>{result}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
    </div>
  );
};

const ExampleOfUseMemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function multiply(num) {
    return num * 2;
  }

  const result = useMemo(() => multiply(count), [count]);

  return (
    <div>
      <h1>{result}</h1>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

export { Havycal, ExampleOfUseMemo };
