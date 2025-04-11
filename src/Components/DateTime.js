import React, {useState, useEffect} from "react";

const DateTime = () => {

   const [timePeriod, setTimePeriod] = useState(new Date());

   useEffect(() => {
    const intervalID = setInterval(() => {
        setTimePeriod(new Date());
    }, 1000);
    return () => clearInterval(intervalID);
   }, [])

    return (
        <>
            <h3>Date, Time using React</h3>
            {timePeriod.toLocaleTimeString()} &nbsp;
            {timePeriod.toDateString()}
        </>
    )
}

export default DateTime