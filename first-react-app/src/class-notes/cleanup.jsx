import React,{useState} from 'react';
import {useEffect} from 'react';
//cleanup means removing unwanted effects or subscriptions when a component unmounts or before it re-renders to prevent memory leaks and ensure optimal performance.

export default function Cleanup() {

    const[seconds,setSeconds]=useState(0);
    useEffect(() => {
        console.log("Timer started");

        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        // Cleanup function to clear the interval when the component unmounts
        return () => {
            clearInterval(interval);
            console.log("Timer stopped");
        };
    },[]);
  return (
    <div>timer:{seconds}</div>
  )
}
