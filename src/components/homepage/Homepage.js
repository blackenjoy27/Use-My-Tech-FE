import React from "react";
import { useHistory } from "react-router-dom";

export default () => {
    const history = useHistory();

    return (
        <div>
            <button onClick={() => history.push("/login")}>Login</button>
            <button onClick={() => history.push("/register")}>Sign Up</button>
        </div>
    )
}