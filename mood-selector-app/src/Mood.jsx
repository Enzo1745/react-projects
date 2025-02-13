import { useState } from "react";
import Emoji from "./Emoji.jsx";

function Mood() {

    const [mood, setMood] = useState("none");
    const [currentMoodMessage, setCurrentMoodMessage] = useState("How do you feel today?");
    const [currentMoodDisplay, setcurrentMoodDisplay] = useState("");

    const displayMood = (mood) => {

        setMood(mood);

        // Displays a message depending on users mood
        if(mood === "Happy") {
            setCurrentMoodMessage("Yay! You feel happy today!");
            setcurrentMoodDisplay("positive-emotion");
        }
        else if(mood === "Sad") {
            setCurrentMoodMessage("Don't feel sad, go out with your friends!");
            setcurrentMoodDisplay("negative-emotion");
        }
        else if(mood === "Angry") {
            setCurrentMoodMessage("Don't be angry, have a warm cup of tea!");
            setcurrentMoodDisplay("negative-emotion");
        }
    }

    return(
        <div className="container" id={currentMoodDisplay}>
            <h3>{currentMoodMessage}</h3>
            <label className="mood-message">Select your mood: </label>
            <select className="select-button"
            value={mood}
            onChange={(element) => displayMood(element.target.value)}>
                {mood === "none" && <option value=""></option>}
                <option value="Happy">Happy</option>
                <option value="Sad">Sad</option>
                <option value="Angry" >Angry</option>
            </select>
            <Emoji mood={mood}/>
        </div>
    );
}

export default Mood