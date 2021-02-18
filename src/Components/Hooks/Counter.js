import React, { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={setCount(...count++)}>Increase</button>
      <p>{count}</p>
      <button onClick={setCount(...count--)}>Decrease</button>
    </div>
  );
};

export default Counter;
