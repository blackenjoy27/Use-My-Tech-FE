import React from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";

const Userpage = (props) => {
    const { push } = useHistory();
    const logout = () => {
        localStorage.removeItem("token");
        push("/")
    }
    return (
        <div>
            <h1>{`User_id: ${props.user_id}`}</h1>
            <h1>{`Name: ${props.name}`}</h1>
            <h1>{`Role_id: ${props.role_id}`}</h1>
            <button onClick={logout}>Loggout</button>
        </div>
    )
}

export default connect(state => {
    return {
        user_id: state.user_id,
        name: state.name,
        role_id: state.role_id
    }
})(Userpage);