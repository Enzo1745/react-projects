import { useState, useRef, useEffect } from "react";

function StopWatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalId = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if(isRunning) {
            // Uses the current time to get a starting time reference
            startTimeRef.current = Date.now() - elapsedTime * 1000;
            intervalId.current = setInterval(() => {
                // Floor method to get time by hundredth of seconds
                setElapsedTime(() => Math.floor((Date.now()- startTimeRef.current) / 10) / 100);
            }, 10)
        }

        return () => clearInterval(intervalId.current);
    }, [isRunning]);

    const startTimer = () => {

        setIsRunning(true);
    }

    const stopTimer = () => {

        setIsRunning(false);
    }

    const resetTimer = () => {

        setIsRunning(false);
        setElapsedTime(0);
    }

    const formatTime = () => {

        // Calculates each part of the time separately
        let hundredthOfSeconds = Math.round(elapsedTime * 100) % 100;
        let seconds = Math.floor(elapsedTime) % 60;
        let minutes = Math.floor(elapsedTime / 60);

        // Adds 0s to make time two digits everywhere
        hundredthOfSeconds = String(hundredthOfSeconds).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");

        return `${minutes}:${seconds}.${hundredthOfSeconds}`;
    }

    return(
        <>
            <h2>{formatTime()}</h2>
            <div className="buttons">
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </>
    );
}

export default StopWatch;