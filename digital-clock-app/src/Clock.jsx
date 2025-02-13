import { useState, useEffect } from "react";

// Always displays current time with two digits
const displayTime = (timeUnit) => {

    return timeUnit < 10 ? "0" + timeUnit : timeUnit;
}

const displayHours = (hours) => {

    let formattedHours;

    // 12 AM case
    if(hours === 0) {
        formattedHours = 12;
    }
    else if(hours > 12) {
        formattedHours = hours - 12;
    }
    else {
        formattedHours = hours;
    }

    return displayTime(formattedHours);
}

function Clock() {

    const now = new Date();
    
    const [time, setTime] = useState({
                                        hours: displayHours(now.getHours()),
                                        minutes: displayTime(now.getMinutes()),
                                        seconds: displayTime(now.getSeconds()),
                                     });
    const [date, setDate] = useState({
                                        dayOfWeek: "",          // Is initialized by useEffect with function stringifyDayAndMonth
                                        date: now.getDate(),
                                        month: "",              // Same here
                                        year: now.getFullYear(),
                                     });
    const [timePeriod, setTimePeriod] = useState(now.getHours() > 12 ? "PM" : "AM");

    // Sets the day and month to be an understable value for user (values in getDay and getMonth methods are numbers)
    const updateDayAndMonth = () => {

        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        setDate((prevDate) => 
            ({
                ...prevDate,
                dayOfWeek: `${daysOfWeek[new Date().getDay()]}`,
                month: `${monthsOfYear[new Date().getMonth()]}`
            })
        );
    }

    // Will update the clock every second
    useEffect(() => {

        // Initialization of day and month
        updateDayAndMonth();
        
        const interval = setInterval(() => {

            const newNow = new Date();

            setTime(() =>
                ({
                    hours: displayHours(newNow.getHours()),
                    minutes: displayTime(newNow.getMinutes()),
                    seconds: displayTime(newNow.getSeconds())
                })
            );

            // Sets the meridiem depending on the current hour
            newNow.getHours() > 12 ? setTimePeriod("PM") : setTimePeriod("AM");

            // Day and month are separate since they are strings and not directly numbers
            setDate((prevDate) =>
                ({
                    ...prevDate,
                    date: newNow.getDate(),
                    year: newNow.getFullYear()
                })
            );

            updateDayAndMonth();

        }, 1000);

        return () => clearInterval(interval);
        
    }, []);

    return(
        <div className="container">
            <h1 className="title">Your Digital Clock
                <div className="underline"/>
            </h1>
            <h2 className="time-display">{time.hours} : {time.minutes} : {time.seconds} {timePeriod}</h2>
            <h3 className="time-display">{date.dayOfWeek}, {date.month} {date.date}, {date.year}</h3>
        </div>
    );
}

export default Clock;