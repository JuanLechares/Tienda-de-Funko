import { useState } from "react";

export const useCounter=()=>{
  const [counter, setCounter] = useState(0);
  
  const increment = ()=>{
    setCounter(counter + 1);
  }

  const decrement = (val=1, negative = true)=>{
    if(!negative && counter - val < 0){
      setCounter(0);
      return
    }
    setCounter(counter - val)
  }
  return(
    counter,
    increment,
    decrement
  );
}