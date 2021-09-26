import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import styled from "styled-components";

import AxiosWithAuth from "../../helper/AxiosWithAuth";

const Userpage = ({ user_id, name, role_id }) => {
    const [filterInfo, setFilterInfo] = useState({
        category: "",
        keyword: "",
    })

    const updateFilterInfo = e => {
        setFilterInfo({ ...filterInfo, [e.target.name]: e.target.value });
    }
    const { push } = useHistory();

    const filter = e => {
        e.preventDefault();
        console.log(filterInfo);
    }

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
            <form onSubmit={filter}>
                <select name="category" onChange={updateFilterInfo}>
                    <option value="">Categories</option>
                    <option value="cat">Cat</option>
                </select>
                <input
                    name="keyword"
                    value={filterInfo.keyword}
                    onChange={updateFilterInfo}
                />
                <button type="submit">Search</button>
            </form>
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