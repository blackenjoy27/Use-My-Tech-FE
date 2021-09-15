import styled from "styled-components";

export const DirectPage = styled.div`
    display:flex;
    flex-direction:column;
    justify-contents: center;
    height:100vh;
    background-color: #F7F6F2;  
    // sign up and login page should have different background color

    a{
        text-decoration:none;
    }
`

export const Nav = styled.nav`
    display:flex;
    flex-direction:row-reverse;
    padding-top:1rem;
    padding-right:1.5rem;
    
    a{
        display:flex;
        width:8rem;
        height:2.5rem;
        border:2px solid grey;
        justify-content:center;
        background-color:#EFEFEF;
        font-size:1.3rem;
        align-items:center;
        border-radius:10px;
    }
`


export const Form = styled.form`
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

export const Button = styled.button`
    width:10rem;
    height:2.5rem;
    margin:1rem;
    border-radius:20px;
    background-color: #D7E9F7;

    &:hover{
        cursor:pointer;
    }
`