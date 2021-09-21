import React from "react";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

import { DirectPage, Nav } from "../styledcomponents/StyledEle";
import { motion } from "framer-motion";


export default function Login() {
    return (
        <DirectPage className="loginBG">
            <Nav>
                <Link className="theTab" to="/">Home</Link>
            </Nav>
            <LoginForm />
        </DirectPage>
    )
}