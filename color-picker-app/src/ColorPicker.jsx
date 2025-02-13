import React, { useState } from "react";

function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF");

    const handleColorChange = (event) => {
        setColor(event.target.value);
    }

    return(
        <div className="container">
            <h1>Color Piker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Color: {color}</p>
            </div>
            <label>Select a color: </label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    );
}

export default ColorPicker