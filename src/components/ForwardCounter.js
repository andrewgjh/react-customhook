// import { useState, useEffect } from "react";
import useCounter from "../hooks/useCounter";
import Card from "./Card";

const ForwardCounter = () => {
  // const [counter, setCounter] = useState(0);
  const { counter } = useCounter("positive");
  // useEffect(() => {
  //
  //   const interval = setInterval(() => {
  //     setCounter(prevCounter => prevCounter + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
