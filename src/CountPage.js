import React from "react";
import Counter from "./Counter";
import CounterDisplay from "./CounterDisplay";
import { CounterProvider } from "./CounterContext";

function CountPage() {
 return (
  <CounterProvider>
   <Counter />
   <CounterDisplay />
  </CounterProvider>
 );
}

export default CountPage;
