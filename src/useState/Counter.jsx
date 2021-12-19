import React, { useState } from "react";
import { Button } from "react-bootstrap";
export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h4>Counter using useState Hook</h4>
      <h1>Counter: {count}</h1>
      <Button variant="primary" onClick={() => setCount(count - 1)}>
        Decrement
      </Button>
      <Button variant="danger" onClick={handleIncrement}>
        Increment
      </Button>
    </div>
  );
};
