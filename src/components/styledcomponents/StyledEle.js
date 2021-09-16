import styled from "styled-components";
import imgage0 from "../../imgs/image0.jpg";


export const DirectPage = styled.div`
    display:flex;
    flex-direction:column;
    justify-contents: center;
    height:100vh;
    background-size: cover;  
`

export const Nav = styled.nav`
    display:flex;
    flex-direction:row-reverse;
    padding-top:1rem;
    padding-right:1.5rem;
    align-items:center;
    
    a{
        display:flex;
        width:8rem;
        height:2.5rem;
        border:2px solid grey;
        justify-content:center;
        font-size:1.3rem;
        align-items:center;
        border-radius:10px;
        text-decoration:none;
        color:#ffffff;
        margin:1rem;
    }
`


export const SignupForm = styled.form`
    display:flex;
    flex-direction:column;
    background-color:#F3F1F5;
    height: 75%;
    width:40%;
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

export const FormLogin = styled.form`
    display:flex;
    flex-direction:column;
    background-color:#F3F1F5;
    width:40%;
    height: 50%;
    border:2px solid grey;
    border-radius:20px;
    margin:auto;
    justify-content:center;
    align-items:center;

    input{
        border-radius:5px;
        margin:0.5rem;
        width:55%;
        height:1.5rem;
    }

    label{
        width:50%;
        margin:0rem auto;
        display:flex;
        justify-content:space-around;
        align-items:center;
    }

    button{
        width
    }

    a{
        margin:1rem;
    }
`

export const Button = styled.button`
    width:8rem;
    height:2.5rem;
    margin:1rem;
    border-radius:10px;
    font-size:1rem;
    color:#ffffff;
    background-color: #3DB2FF;

    &:hover{
        cursor:pointer;
    }
`

export const OutterMostDiv = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`


export const TopImageDiv = styled.div`
    height:100vh;
    background-image: url(${imgage0});
    background-size:cover;

    @media(max-height:600px){
        background-color:silver;
    }
`

export const SVG = styled.svg`
    width:3rem;
    height:3rem;
    path{
        fill: #FFB319;
    }
    &:hover{
        path{
            fill:#FFB344;
        }
    }
`

export const LogoDiv = styled.div`
    position:absolute;
    left:3rem;
    display:flex;
    justify-content:space-around;

    align-items:center;
    width:20%;

    font-size:2rem;
    color: #ffffff;

    h1{
        color:#E7E0C9;
    }
    
`

export const ScrollDown = styled.div`
    width: 20%;
    position:absolute;
    bottom:1rem;
    left:50%;
    right:50%;
    margin:auto;

`

export const MiddleDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    height:90rem;
    background-color: #C2B8A3;
`

export const Tabs = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:4rem;
    height:5rem;
    width:80%;

    div{
        display:flex;
        margin-bottom:0rem;
        justify-content:space-between;
        width:30%;
    }

    a{
        display:flex;
        justify-content:center;
        align-items:center;
        text-decoration:none;
        height:3.2rem;
        font-size:1.125rem;
        width:9rem;
        color:#232323;
        border:solid grey;
        border-width:2px 2px 0px 2px;
        border-radius: 10px 10px 0px 0px;
    }
    hr{
        border-style: solid none none none;
        border-width: 2px;
        margin-top:0rem;
        width:80%;
        color:#2C394B;
    }
`