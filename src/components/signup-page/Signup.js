import React from "react";
import SignupForm from "./SignupForm";
import { Link } from "react-router-dom";

import { DirectPage, Nav } from "../styledcomponents/StyledEle";



export default () => {
    return (
        <DirectPage className="signupBG">
            <Nav>
                <Link className="homeButton" to="/">Home</Link>
            </Nav>
            <SignupForm />
        </DirectPage>
    )
}