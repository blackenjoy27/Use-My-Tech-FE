import React from "react";
import SignupForm from "./SignupForm";
import { Link } from "react-router-dom";

import { DirectPage, Nav } from "../styledcomponents/StyledEle";



export default () => {
    return (
        <DirectPage>
            <Nav>
                <Link to="/">Home</Link>
            </Nav>
            <SignupForm />
        </DirectPage>
    )
}