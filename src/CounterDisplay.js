import React from "react";

import { useCount } from "./CounterContext";

const CounterDisplay = () => {
 const [state] = useCount();
 return <h2>The count is {state.count}</h2>;
};

export default CounterDisplay;
