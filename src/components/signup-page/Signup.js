import React from "react";
import SignupForm from "./SignupForm";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignUpPage = styled.div`
    display:flex;
    flex-direction:column;
    justify-contents: center;
    height:100vh;
    background-color: #F7F6F2;

    a{
        text-decoration:none;
    }
`

const Nav = styled.nav`
    display:flex;
    flex-direction:row-reverse;
    padding-top:1rem;
    padding-right:1.5rem;
    
    a{
        display:flex;
        width:8rem;
        height:2.5rem;
        border:2px solid grey;
        justify-content:center;
        background-color:#EFEFEF;
        font-size:1.3rem;
        align-items:center;
        border-radius:10px;
    }
`


export default () => {
    return (
        <SignUpPage>
            <Nav>
                <Link to="/">Home</Link>
            </Nav>
            <SignupForm />
        </SignUpPage>
    )
}