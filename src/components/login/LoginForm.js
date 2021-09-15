import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form } from "../styledcomponents/StyledEle"
import { login } from "../../Actions";
import { connect } from "react-redux";

const LoginForm = (props) => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    const { push } = useHistory();
    const updateLoginInfo = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const loginUser = e => {
        e.preventDefault();
        axios.post("https://ft-use-my-tech-02.herokuapp.com/api/auth/login", user)
            .then(({ data }) => {
                localStorage.setItem("token", data);
                console.log(data);
                props.dispatch(login(data));
                push("/userpage");
            })
            .catch((err) => {
                alert("Username or password is incorrect");
            })
    }
    return (
        <Form onSubmit={loginUser}>
            <label>
                Username
                <input
                    name="username"
                    type="text"
                    value={user.username}
                    onChange={updateLoginInfo}
                />
            </label>
            <label>
                Password
                <input
                    name="password"
                    type="password"
                    value={user.password}
                    onChange={updateLoginInfo}
                />
            </label>
            <button type="submit">Login</button>
            <Link to="/register">Don't have an account yet? Sign up</Link>
        </Form>
    )
}

export default connect()(LoginForm);