import React, { useState, useEffect } from "react";

const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const end = parseInt(target.replace(/\D/g, ""), 10);
    const step = duration / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);

      if (start === end) clearInterval(timer);
    }, step);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}+</span>;
};

export default Counter;
