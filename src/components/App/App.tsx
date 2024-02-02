import React from "react";
import classes from "./App.module.scss";

export const App = () => {
    return (
        <div>
            <div>Hello world</div>
            <button className={classes.myButton}>Click me</button>
        </div>
    );
};

export default App;
