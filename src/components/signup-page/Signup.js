import React from "react";
import SignupForm from "./SignupForm";
import { Link } from "react-router-dom";

import { DirectPage, Nav } from "../styledcomponents/StyledEle";



export default function Signup() {
    return (
        <DirectPage className="signupBG">
            <Nav>
                <Link className="theTab" to="/">Home</Link>
            </Nav>
            <SignupForm />
        </DirectPage>
    )
}