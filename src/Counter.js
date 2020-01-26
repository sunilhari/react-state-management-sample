import React from "react";
import { useCount } from "./CounterContext";

const Counter = () => {
 const [state, dispatch] = useCount();

 const increment = () => {
  dispatch({ type: "INCREMENT" });
 };
 const decrement = () => {
  dispatch({ type: "DECREMENT" });
 };

 return (
  <div>
   <button onClick={increment}>✚</button>
   <button onClick={decrement}>−</button>
  </div>
 );
};

export default Counter;
