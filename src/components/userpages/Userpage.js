import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import styled from "styled-components";
import { OutterMostDiv, UserIcon } from "../styledcomponents/StyledEle";

import AxiosWithAuth from "../../helper/AxiosWithAuth";
import ItemList from "./ItemList";



const Header = styled.header`
    display:flex;
    width:80%;
    height:4rem;
    margin:1rem auto;
    align-items:center;
    justify-content:space-between;

    h1{
        font-size:2rem;
    }
`

const Nav = styled.nav`
    display:flex;
    align-items:center;
    width:20%;
    justify-content:space-around;
`

const BurgerDiv = styled.div`
    width:2rem;
    height:2rem;
    background-color:grey;
    border:1px solid black;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    border-radius:3px;

    div{
        width:22px;
        height:3px;
        background-color:#ffffff;
    }
`
const SearchForm = styled.form`
    display:flex;
    width:70%;
    height:2.5rem;

    margin:1rem auto;
    justify-content:space-around;
    align-items:center;
    
    select{
        text-align-last:center;
    }
    input{
        width:60%;
        height:80%;
        border:1px solid grey;
        border-radius:5px;
    }

    button{
        width:15%;
        border-radius:5px;
        height:90%;
    }
`


const Userpage = ({ user_id, name, role_id }) => {
    const [filterInfo, setFilterInfo] = useState({
        category: "",
        keyword: "",
    })
    const [items, setItems] = useState(null)

    const updateFilterInfo = e => {
        setFilterInfo({ ...filterInfo, [e.target.name]: e.target.value });
    }
    const { push } = useHistory();

    const filter = e => {
        e.preventDefault();
        console.log(filterInfo);
    }

    useEffect(() => {
        AxiosWithAuth().get(`/api/items`)
            .then(({ data }) => {
                setItems(data);
                console.log(data);
            })
    }, [])




    const logout = () => {
        localStorage.removeItem("token");
        push("/")
    }

    return (
        <OutterMostDiv>
            <Header>
                <h1>
                    Items
                </h1>
                <Nav>
                    <UserIcon src="https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg" />
                    <h2>Kyle, Li</h2>
                    <BurgerDiv>
                        <div /><div /><div />
                    </BurgerDiv>
                </Nav>



            </Header>

            <SearchForm onSubmit={filter}>
                <select name="category" className="categories" onChange={updateFilterInfo}>
                    <option value="">Categories</option>
                    <option value="cat">Cat</option>
                </select>
                <input
                    name="keyword"
                    value={filterInfo.keyword}
                    onChange={updateFilterInfo}
                />
                <button type="submit">Search</button>
            </SearchForm>
            <ItemList items={items} />
            <button onClick={logout}>Loggout</button>
        </OutterMostDiv>
    )
}

export default connect(state => {
    return {
        user_id: state.user_id,
        name: state.name,
        role_id: state.role_id
    }
})(Userpage);