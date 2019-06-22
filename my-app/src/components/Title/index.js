import React from "react";
import "./style.css";

function Title(props) {
    return <h1 className="title">{props.children}</h1>
        // <h2 className="counter">{props.counter}</h2>
       
}

export default Title;