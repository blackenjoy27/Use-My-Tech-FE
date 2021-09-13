import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as yup from "yup";
import schema from "../../validations/signupSchema";
import axios from "axios";

const initialUserInfo = {
    name: "abc",
    username: "abc123",
    password: "abc123",
    passwordConfirmation: "abc123",
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
        margin:0.5rem;
        width:40%;
        height:1.5rem;
    }
    select{
        width:30%;
        margin:0.5rem;
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
    span{
        color:#ff616d;
        display:flex;
        width: 40%;
        margin:0 auto;
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
export default function () {
    const [newUser, setNewUser] = useState({
        name: "",
        username: "",
        password: "",
        passwordConfirmation: "",
        email: "",
        role_id: "",
        term: false,
    });

    const [isDisabled, setIsDisabled] = useState(true);
    const [formErrors, setFormErrors] = useState({
        name: "",
        username: "",
        password: "",
        passwordConfirmation: "",
        email: "",
        role_id: "",
        term: false,
    });

    useEffect(() => {
        schema.isValid(newUser).then(valid => {
            setIsDisabled(!valid)
        })
    }, [newUser])

    const updateNewUser = (e) => {
        yup.reach(schema, e.target.name)
            .validate(e.target.value)
            .then(() => {
                setFormErrors({ ...formErrors, [e.target.name]: "" })
            })
            .catch(err => {
                setFormErrors({ ...formErrors, [e.target.name]: err.errors })
            })
        let value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        value = e.target.name === "role_id" ? Number(e.target.value) : value

        setNewUser({ ...newUser, [e.target.name]: value })
    }

    const registerUser = (e) => {
        e.preventDefault();
        console.log(newUser);
        console.log(yup.ref("password"))
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
            {formErrors.name && <span>{formErrors.name}</span>}


            <input
                name="username"
                value={newUser.username}
                onChange={updateNewUser}
                type="text"
                placeholder="Username"
            />
            {formErrors.username && <span>{formErrors.username}</span>}

            <input
                name="password"
                value={newUser.password}
                onChange={updateNewUser}
                type="text"
                placeholder="Password"
            />
            {formErrors.password && <span>{formErrors.password}</span>}
            <input
                name="passwordConfirmation"
                value={newUser.passwordConfirmation}
                onChange={updateNewUser}
                type="text"
                placeholder="Re-Enter Password"
            />
            {formErrors.passwordConfirmation && <span>{formErrors.passwordConfirmation}</span>}

            <input
                name="email"
                value={newUser.email}
                onChange={updateNewUser}
                type="text"
                placeholder="Email"
            />
            {formErrors.email && <span>{formErrors.email}</span>}

            <select name="role_id" onChange={updateNewUser}>
                <option value="">----Select Your Role----</option>
                <option value={1}>Owner</option>
                <option value={2}>Renter</option>
            </select>
            {formErrors.role_id && <span>{formErrors.role_id}</span>}
            <label>
                <input name="term" className="checkBox" type="checkbox" onChange={updateNewUser} />
                Term & Conditions
            </label>
            <Button type="submit" disabled={isDisabled}>Sign Up</Button>
            <Link to="/login">Already have registered? Login</Link>
        </Form>
    )
}