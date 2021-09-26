import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import styled from "styled-components";

import AxiosWithAuth from "../../helper/AxiosWithAuth";

const Userpage = ({ user_id, name, role_id }) => {
    const { push } = useHistory();

    useEffect(() => {
        AxiosWithAuth().get(`/api/users/${user_id}`)
            .then(data => {
                console.log(data);
            })
    }, [])


    const logout = () => {
        localStorage.removeItem("token");
        push("/")
    }

    return (
        <div>
            <h1>{`User_id: ${user_id}`}</h1>
            <h1>{`Name: ${name}`}</h1>
            <h1>{`Role_id: ${role_id}`}</h1>
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