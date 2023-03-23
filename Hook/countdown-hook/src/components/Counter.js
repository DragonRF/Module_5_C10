import { useEffect, useState } from "react";

function Counter() {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    if (timer === 0) {
      alert("Time out");
    } else {
      let time = setInterval(() => {
        setTimer(timer - 1);
        clearInterval(time);
      }, 1000);
    }
  }, [timer]);
  return (
    <div>
      <p>Countdown: {timer}</p>
    </div>
  );
}
export default Counter;
