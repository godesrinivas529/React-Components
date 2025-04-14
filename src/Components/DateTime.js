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
        <div className="timeComp">
            <h3 className="timeHeading">Date & Time using ReactJS</h3>
            <p className="timeDisplay">{timePeriod.toLocaleTimeString()}&nbsp;- {timePeriod.toDateString()}</p>
        </div>
    )
}

export default DateTime