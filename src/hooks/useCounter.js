import { useState, useEffect } from "react";
const useCounter = direction => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (direction === "positive") {
        setCounter(prevCounter => prevCounter + 1);
      } else {
        setCounter(prevCounter => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [direction]);

  return { counter };
};

export default useCounter;
