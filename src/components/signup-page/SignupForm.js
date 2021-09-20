import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import * as yup from "yup";
import schema from "../../validations/signupSchema";
import axios from "axios";

import { SignupForm, Button } from "../styledcomponents/StyledEle";

const initialUserInfo = {
    name: "abc",
    username: "abc123",
    password: "abc123",
    passwordConfirmation: "abc123",
    email: "abc123@gmail.com",
    role_id: "",
    term: false,
}

export default function SignupFormPage() {
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
    const { push } = useHistory();
    useEffect(() => {
        schema.isValid(newUser).then(valid => {
            setIsDisabled(!valid)
        })
    }, [newUser])

    const updateNewUser = (e) => {
        if (e.target.name === "passwordConfirmation") {
            if (e.target.value !== newUser.password) {
                setFormErrors({ ...formErrors, passwordConfirmation: "Password need to match up" })
            } else {
                setFormErrors({ ...formErrors, passwordConfirmation: "" })
            }
        } else {
            yup.reach(schema, e.target.name)
                .validate(e.target.value)
                .then(() => {
                    setFormErrors({ ...formErrors, [e.target.name]: "" })
                })
                .catch(err => {
                    setFormErrors({ ...formErrors, [e.target.name]: err.errors[0] })
                })
        }

        let value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        value = e.target.name === "role_id" ? Number(e.target.value) : value

        setNewUser({ ...newUser, [e.target.name]: value })
    }

    const registerUser = (e) => {
        e.preventDefault();
        delete newUser.term;
        delete newUser.passwordConfirmation;

        axios.post("https://ft-use-my-tech-02.herokuapp.com/api/auth/register", newUser)
            .then(data => {
                setNewUser(initialUserInfo);
                alert("Thank you for signing up!");
                axios.post("https://ft-use-my-tech-02.herokuapp.com/api/auth/login", {
                    username: newUser.username,
                    password: newUser.password
                }).then(({ data }) => {
                    push("/userpage");
                    localStorage.setItem("token", data)
                })
            })
    }

    return (
        <SignupForm onSubmit={registerUser}>

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
                type="password"
                placeholder="Password"
            />
            {formErrors.password && <span>{formErrors.password}</span>}
            <input
                name="passwordConfirmation"

                value={newUser.passwordConfirmation}
                onChange={updateNewUser}
                type="password"
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
        </SignupForm>
    )
}