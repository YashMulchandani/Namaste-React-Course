import React from "react";
import { useState } from "react";

const User = (props) => {
    const { field, name, location } = props;
    const [counter, setCounter] = React.useState(0);
    const [counter2, setCounter2] = React.useState(0);
    return (
        <div className="user-card">
            <h1>{field} Component</h1>
            <h1>Name : {name}</h1>
            <h2>Location : {location}</h2>
            <h3>Contact : 1234567890</h3>
            <button onClick={() => {setCounter(counter + 1); setCounter2(counter2 + 1)}}>Click Me</button>
            <p>Increment Counters: {counter}, {counter2}</p>
        </div>
    )
}

export default User;