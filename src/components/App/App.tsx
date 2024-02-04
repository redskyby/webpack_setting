import React, { useState } from "react";
import classes from "./App.module.scss";
import { Outlet, Link } from "react-router-dom";
import avatarPng from "@/assets/avatar.png";
import avatarJpg from "@/assets/avatar.jpg";
import Image from "@/assets/app-image.svg";

export const App = () => {
    const [number, setNumber] = useState<number>(0);

    return (
        <div>
            <div>
                <img src={avatarPng} alt="AvatarPng" />
                <img src={avatarJpg} alt="avatarJpg" />
            </div>
            <div>
                {/*После установленно svgr/webpack с svg можно работать, как с компонентами и передавать туда пропсы*/}
                <Image className={classes.icon} />
            </div>
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
