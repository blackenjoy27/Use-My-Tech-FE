import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const initialUserInfo = {
    name: "abc",
    username: "abc123",
    password1: "abc123",
    password2: "abc123",
    email: "abc123@gmail.com",
    role_id: "",
    term: false,
}

const Form = styled.form`
    display:flex;
    flex-direction:column;
    background-color:#F9F3DF;
    width:40%;
    height:75%;
    border:2px solid grey;
    border-radius:20px;
    margin:auto;
    justify-content:center;
    align-items:center;

    input{
        border-radius:5px;
        margin:1rem;
        width:40%;
        height:1.5rem;
    }
    select{
        width:30%;
    }
    label{
        width:40%;
        margin:0rem auto;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .checkBox{
        margin:1rem 0rem;
        width:20%;
        height:1rem;
    }
    a{
        margin-bottom:0rem;
    }
`

const Button = styled.button`
    width:10rem;
    height:2.5rem;
    margin:1rem;
    border-radius:20px;
    background-color: #D7E9F7;

    &:hover{
        cursor:pointer;
    }
`
export default () => {
    const [newUser, setNewUser] = useState(initialUserInfo);

    const updateNewUser = (e) => {
        if (e.target.name === "role_id") {
            setNewUser({ ...newUser, ["role_id"]: Number(e.target.value) })
        } else {
            const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
            setNewUser({ ...newUser, [e.target.name]: value })
        }

    }

    const registerUser = (e) => {
        e.preventDefault();
        console.log(newUser);
        // axios.post("https://ft-use-my-tech-02.herokuapp.com/api/auth/register", newUser)
        //     .then(data => {
        //         console.log(data);
        //     })
    }

    return (
        <Form onSubmit={registerUser}>
            <input
                name="name"
                value={newUser.name}
                onChange={updateNewUser}
                type="text"
                placeholder="Name"
            />

            <input
                name="username"
                value={newUser.username}
                onChange={updateNewUser}
                type="text"
                placeholder="Username"
            />
            <input
                name="password1"
                value={newUser.password1}
                onChange={updateNewUser}
                type="text"
                placeholder="Password"
            />
            <input
                name="password2"
                value={newUser.password2}
                onChange={updateNewUser}
                type="text"
                placeholder="Re-Enter Password"
            />
            <input
                name="email"
                value={newUser.email}
                onChange={updateNewUser}
                type="text"
                placeholder="Email"
            />
            <select name="role_id" onChange={updateNewUser}>
                <option value="">----Select Your Role----</option>
                <option value={1}>Owner</option>
                <option value={2}>Renter</option>
            </select>
            <label>
                <input name="term" className="checkBox" type="checkbox" onChange={updateNewUser} />
                Term & Conditions
            </label>
            <Button type="submit">Sign Up</Button>
            <Link to="/login">Already have registered? Login</Link>
        </Form>
    )
}