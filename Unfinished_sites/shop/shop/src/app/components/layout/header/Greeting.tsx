"use client";
import { useEffect, useState } from "react";
type GreetingProps = {
    name: string
}

const Greeting = ({name}: GreetingProps) => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours >= 6 && hours < 10) setTime("Morning");
    else if (hours >= 10 && hours < 12) setTime("Noon");
    else if (hours >= 12 && hours < 18) setTime("Evening");
    else if (hours >= 18 && hours < 22) setTime("Night");
    else setTime("Night");
  }, []);
  let content:any
  if (time==="") null
  else content = <h1>Good {time}, {name}</h1>
  return (content);
};

export default Greeting;
