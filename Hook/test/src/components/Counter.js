import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);
  const handleClick = () => {
    const newValue = count + 1;
    setCount(newValue);
  };
  const deHandleClick = () => {
    const newValue = count - 1;
    setCount(newValue);
  };
  return (
    <div>
      Value: {count}
      <div>
        <button onClick={handleClick}>Increase</button>
        <button onClick={deHandleClick}>Decrease</button>
      </div>
    </div>
  );
}

export default Counter;
