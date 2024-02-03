import React, { useState } from "react";
import classes from "./App.module.scss";

export const App = () => {
    const [number, setNumber] = useState<number>(0);

    return (
        <div>
            <div>Hello world</div>
            <button className={classes.myButton} onClick={() => setNumber(number + 1)}>
                Click me
            </button>
            <p>{number}</p>
        </div>
    );
};

export default App;
