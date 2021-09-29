import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router";
import { connect } from "react-redux";
import styled from "styled-components";
import { OutterMostDiv, UserIcon, Footer, FooterDiv, ContactDiv } from "../styledcomponents/StyledEle";

import Checkout from "./Checkout";
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

const BurgerDiv = styled.button`
    width:2rem;
    height:2rem;
    background-color:#F1F6F9;
    border:1px solid black;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    border-radius:3px;

    &:hover{
        cursor:pointer;
    }
    div{
        width:22px;
        height:3px;
        background-color:#000000;
    }
`
const SearchForm = styled.form`
    display:flex;
    width:60%;
    height:4rem;
    background-color:#F1F6F9;
    border-radius:20px;

    margin:1rem auto;
    justify-content:space-around;
    align-items:center;
    
    input{
        width:60%;
        height:60%;
        border:1px solid grey;
        border-radius:5px;
        font-size:1.25rem;
    }

    button{
        width:10%;
        border-radius:5px;
        height:60%;
        background-color:#F1F6F9;

        &:hover{
            cursor:pointer;
        }
    }
`
const HiddenDiv = styled.div`
    display:none;

    button{
        width:100%;
        height:2rem;
        border-style: solid none;
        border-width:1px;
        background-color:#F1F6F9;
        font-size:1rem;

        &:hover{
            background-color:#222831;
            color:#F1F6F9;
            cursor:pointer;
        }
    }
`


const Userpage = ({ user_id, name, role_id }) => {
    const [filterInfo, setFilterInfo] = useState({
        category: "",
        keyword: "",
    })
    const [items, setItems] = useState(null)

    const popMessage = (message) => {
        document.querySelector(".message").classList.add("showMessage")
        document.querySelector(".message").textContent = message;
        setTimeout(() => {
            document.querySelector(".message").classList.remove("showMessage")
        }, 2000);
    }

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
        <OutterMostDiv className="itemsPage">
            <Header>
                <h1 className="pageName">Items</h1>
                <Nav>
                    <UserIcon src="https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg" />
                    <h2>Kyle, Li</h2>
                    <BurgerDiv onClick={() => { document.querySelector(".burgerContainer").classList.toggle("open"); }}>
                        <div /><div /><div />
                    </BurgerDiv>
                </Nav>
            </Header>
            <div className="message"></div>
            <HiddenDiv className="burgerContainer">
                <button onClick={() => { push("/userpage/checkout"); document.querySelector(".pageName").textContent = "Checkout Items"; }}>Check Out</button>
                <button>Post Item</button>
                <button onClick={logout}>Log out</button>
            </HiddenDiv>
            <Switch>
                <Route exact path="/userpage" render={() => {
                    return <>
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
                        {items && <ItemList items={items} popUp={popMessage} />}
                    </>
                }} />
                <Route exact path="/userpage/checkout" component={Checkout} />
                <Route path="/userpage" render={() => <Redirect to="/userpage" />} />
            </Switch>

            <Footer>
                <FooterDiv>
                    <span>
                        © Use My Tech Inc
                    </span>
                    <ContactDiv>
                        <a href="mailto:blackenjoy237@gmail.com" alt="An svg image used for connecting with the developer through mail"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" className="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg></a>
                        <a href="https://github.com/blackenjoy27" alt="An svg image used for connecting with the developer through github"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a>
                        <a href="https://www.linkedin.com/in/xunxin-li-525a3220a/" alt="An svg image used for connecting with the developer through linkedin"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" className="svg-inline--fa fa-linkedin fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a>
                    </ContactDiv>
                </FooterDiv>
            </Footer>
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