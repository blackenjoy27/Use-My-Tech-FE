import React from "react";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

import { DirectPage, Nav } from "../styledcomponents/StyledEle";

export default () => {
    return (
        <DirectPage className="loginBG">
            <Nav>
                <Link className="homeButton" to="/">Home</Link>
            </Nav>
            <LoginForm />
        </DirectPage>
    )
}