// src/components/display/Display.jsx
import React from "react";
import './Display.css'

function Display(props){
    return(
        <div className="display" data-testid="calculator-display">
            {props.value}
        </div>
    )
}

export default Display;
