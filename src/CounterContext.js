import React, { useContext, useState, useMemo, useReducer } from "react";

const defaultState = {
 count: 0,
 setCount: () => {}
};

const CounterReducer = (state = {}, action) => {
 switch (action.type) {
  case "INCREMENT":
   return { count: state.count + 1 };
  case "DECREMENT":
   return { count: state.count - 1 };
  default:
   return state;
 }
};
const CounterContext = React.createContext(defaultState);

function useCount() {
 const context = useContext(CounterContext);
 if (!context) {
  console.log("useCount should be used with in CountContext");
 }
 return context;
}

function CounterProvider(props) {
 const [count, setCount] = useState(0);
 const [state, dispatch] = useReducer(CounterReducer, defaultState);
 const value = useMemo(() => [state, dispatch], [state]);
 return (
  <CounterContext.Provider value={value} {...props}></CounterContext.Provider>
 );
}

export { CounterProvider, useCount };
