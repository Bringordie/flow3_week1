import React, { useState, useEffect } from "react";

export default function App5() {
  //return ReactDOM.render(<Time />, document.getElementById("root"));
  return <Time />;
}

function Time() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <p>The time is : {time}</p>;
}
