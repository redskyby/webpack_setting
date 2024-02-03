import React, { useState } from "react";
import classes from "./App.module.scss";
import { Outlet, Link } from "react-router-dom";

export const App = () => {
    const [number, setNumber] = useState<number>(0);

    return (
        <div>
            <div>
                <Link to={"/about"}>about</Link>
                <br />
                <Link to={"/shop"}>shop</Link>
            </div>
            <button className={classes.myButton} onClick={() => setNumber(number + 1)}>
                Click me
            </button>
            <p>{number}</p>
            <Outlet />
        </div>
    );
};

export default App;
