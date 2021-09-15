import React from "react";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

import { DirectPage, Nav } from "../styledcomponents/StyledEle";

export default () => {
    return (
        <DirectPage>
            <Nav>
                <Link to="/">Home</Link>
            </Nav>
            <LoginForm />
        </DirectPage>
    )
}