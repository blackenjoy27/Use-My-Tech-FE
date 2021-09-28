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

        @media(max-width:1100px){
            width:45%;
        }
        @media(max-width:460px){
            width:55%;
        }
    }
    select{
        text-align:center;
        width:30%;
        margin:0.5rem;
        @media(max-width:1300px){
            width:40%;
        }
        @media(max-width:800px){
            width:50%;
        }
    }
    label{
        width:40%;
        margin:0rem auto;
        display:flex;
        justify-content:center;
        align-items:center;
        @media(max-width:1200px){
            width:56%;
        }
        @media(max-width:430px){
            font-size:1rem;
        }
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

    @media(max-width:900px){
        width:50%;
    }
    @media(max-width:650px){
        width:75%;
    }
`

export const FormLogin = styled.form`
    display:flex;
    flex-direction:column;
    background-color:#303841;
    width:40%;
    height: 50%;
    border:2px solid grey;
    border-radius:20px;
    margin:auto;
    justify-content:center;
    align-items:center;
    color:#EEEEEE;

    input{
        border-radius:5px;
        margin:0.5rem;
        width:55%;
        height:1.5rem;
        @media(max-width:700px){
            width:60%;
        }
        @media(max-width:650px){
            margin:0.5rem;
        }
    }

    label{
        width:50%;
        margin:0rem auto;
        display:flex;
        justify-content:space-around;
        align-items:center;
        @media(max-width:800px){
            width:65%;
        }
        @media(max-width:650px){
            width:80%;
            flex-direction:column;
        }
    }
    a{
        margin:1rem;
        color:#EEEEEE;
    }
    @media(max-width:1100px){
        width:50%;
    }
    @media(max-width:900px){
        height:55%;
        width:60%;
    }
    @media(max-width:700px){
        height:60%;
        width:65%;
    }
`

export const Button = styled.button`
    width:8rem;
    height:2.5rem;
    margin:1rem;
    border-radius:10px;
    font-size:1rem;
    color:#ffffff;
    background-color: #343434;

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
    background-position: center;

`

export const SVG = styled.svg`
    width:3.5rem;
    height:3.5rem;
    path{
        fill: #FFB319;
    }
    &:hover{
        path{
            fill:#FFB344;
        }
    }


    @media(max-width:700px){
        width:3rem;
        height:3rem;
    }
    @media(max-width:500px){
        width:5rem;
        height:5rem;
    }
    // @media(max-width:500px){
    //     width:2.5rem;
    //     height:2.5rem;
    // }
    @media(max-width:380px){
        width:2.4rem;
        height:2.4rem;
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
        color:#F5F5F5;
        @media(max-width:1000px){
            font-size:2.25rem;
        }
        @media(max-width:700px){
            font-size:1.95rem;
        }
        @media(max-width:500px){
            font-size:3rem;
            color:#D3D6DB;
            // font-size:1.75rem;
        }
        // @media(max-width:440px){
        //     font-size:1.5rem;
        // }
        // @media(max-width:380px){
        //     font-size:1.3rem;
        // }
    }

    @media(max-width:1300px){
        width:35%;
    }
    @media(max-width:800px){
        width:40%;
    }
    @media(max-width:600px){
        left:2rem;
        width:50%;
    }
    @media(max-width:500px){
        top:30%;
        bottom:70%;
        height:20rem;
        flex-direction:column;
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
    border-style:none none solid none;
    border-color:#2C394B;
    border-width:1px;
    background-color: #000000;
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
        width:32%;

        @media(max-width:1200px){
            width:40%;
        }
        @media(max-width:950px){
            width:60%;
        }
        @media(max-width:500px){
            width:70%;
        }
        @media(max-width:450px){
            width:80%;
        }
    }

    a{
        display:flex;
        justify-content:center;
        align-items:center;
        text-decoration:none;
        height:3.2rem;
        font-size:1.125rem;
        width:9rem;
        color:#F5F5F5;
        border:solid grey;
        border-width:2px 2px 0px 2px;
        border-radius: 10px 10px 0px 0px;

        &:hover{
            color:#F5FBF1;
        }

        @media(max-width:660px){
            width:7rem;
            font-size:1rem;
        }
    }
    hr{
        border-style: solid none none none;
        border-width: 2px;
        margin-top:0rem;
        width:80%;
        color:#2C394B;
    }
`

export const FeedbackDiv = styled.div`
    display:flex;
    width:100%;
    height:30rem;
    flex-direction:column;
    align-items:center;
    background-color: #000000;
    justify-content:space-around;
    h1{
        font-size:2.5rem;
        color:#CDCDCD;

        @media(max-width:600px){
            font-size:2rem;
        }
        @media(max-width:500px){
            font-size:1.75rem;
        }
    }
`

export const FeedbackForm = styled.form`
    width:70%;
    height:40%;
    display:flex;
    justify-content:space-around;
    align-items:center;

    textarea{
        display:flex;
        width:60%;
        height:80%;
        border-radius:5px;
        background-color:#333644;
        font-size:1.25rem;
        color:#CDCDCD;

        @media(max-width:800px){
            width:60%;
        }
        @media(max-width:500px){
            font-size:2rem;
            height:50%;
            width:80%;
        }
    }

    button{
        border-radius:5px;
        background-color:#333644;
        border:none;
        font-size:1rem;
        width:7rem;
        height:4rem;
        color:#F8F8F8;

        &:hover{
            cursor:pointer;
        }
        @media(max-width:500px){

            height:3rem;
            width:5rem;
        }
    }
    @media(max-width:800px){
        width:80%;
    }
    @media(max-width:500px){
        font-size:2rem;
        flex-direction:column;
        height:60%;
    }
`

export const Footer = styled.footer`
    width:100%;
    background-color: #000000;
`

export const FooterDiv = styled.div`
    display:flex;
    border-style: solid none none none;
    margin:auto;
    width:80%;
    border-top:1px solid #2C394B;
    height:5rem;
    align-items:center;
    justify-content: space-between;
    color:#CDCDCD;
`

export const ContactDiv = styled.div`
    display:flex;
    width:15%;
    justify-content:space-around;
    a{
        color:#CDCDCD;
    }
    svg{
        height:1.65rem;
        width:1.65rem;

        &:hover{
            cursor:pointer;
            path{
                fill:#F4F4F4;
            }
        }
    }
    @media(max-width:800px){
        width:30%;
    }
    @media(max-width:500px){
        width:45%;
    }
`

export const BurgerDiv = styled.div`
    display: none;
    flex-direction:column;
    height:2.5rem;
    width:2.5rem;
    justify-content:space-around;
    align-items:center;
    border:2px solid #098dcd;
    background-color:#000000;
    border-radius:10px;

    &:hover{
        background-color:#303841;
        cursor:pointer;
    }

    div{
        width:25px;
        height: 3px;
        background-color: #F5F5F5;
        border-radius:10px;
    }

    @media(max-width:1300px){
        display:flex;
    }
`

export const UserIcon = styled.img`
    width:3rem;
    height:3rem;
    border-radius:50%;

    &:hover{
        cursor:pointer;
    }
`

export const TheItem = styled.div`
    display:flex;
    height:10rem;
    width:22%;
    flex-direction:column;
`