import React from "react";
import styled from "styled-components";
import firstImage from "../../imgs/image3.jpg"
import secondImage from "../../imgs/image4.jpg";
import thirdImage from "../../imgs/image5.jpg";
import { OutterMostDiv } from "../styledcomponents/StyledEle";

const Content = styled.div`
    display: flex;
    width:80%;
    justify-content: space-around;
    align-items:center;
    img{
        width:22rem;
        height:22rem;
        border-radius:40px;

        @media(max-width:1200px){
            width:20rem;
            height:20rem;
        }
        @media(max-width:900px){
            width:17rem;
            height:17rem;   
        }
        @media(max-width:800px){
            width:20rem;
            height:20rem;
        }
        @media(max-width:500px){
            width:18rem;
            height:18rem;
        }
    }

    @media(max-width:800px){
        flex-flow: column;
        align-items:space-around;
        height:35rem;
    }
`
const Detail = styled.div`
    display:flex;
    width:50%;
    flex-direction:column;
    height:70%;
    justify-content:space-around;

    h2{
        font-size:3.5rem;
        color: #FFC947;
        font-family: 'Anton';
        @media(max-width:1200px){
            font-size:2.75rem;
        }
        @media(max-width:900px){
            font-size:2.5rem;
        }
        @media(max-width:800px){
            font-size:3rem;
        }
        @media(max-width:700px){
            font-size:2.5rem;
        }
        @media(max-width:500px){
            font-size:2rem;
        }
    }
    p{
        font-size:1.25rem;
        color:#2D4059;
        @media(max-width:1200px){
            font-size:1.15rem;
        }
        @media(max-width:900px){
            font-size:1rem;   
        }
        @media(max-width:800px){
            font-size:1.25rem;
        }
        @media(max-width:700px){
            font-size:1.15rem;
        }
        @media(max-width:500px){
            font-size:1rem;
        }
    }
    @media(max-width:800px){
        height:35%;
        width:100%;
    }
`
const About = () => {
    return (
        <OutterMostDiv className="aboutDiv">
            <Content>
                <img src={`${firstImage}`} alt="" />
                <Detail>
                    <h2>
                        Goal
                    </h2>
                    <p>
                        It usually begins with: “Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.” The purpose
                        of lorem ipsum is to create a natural looking block of
                        text (sentence, paragraph, page, etc.) that doesn't
                        distract from the layout.
                    </p>
                </Detail>
            </Content>
            <Content className="reverseContent">
                <img src={`${secondImage}`} alt="" />
                <Detail>
                    <h2>
                        Value
                    </h2>
                    <p>
                        It usually begins with: “Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.” The
                        purpose of lorem ipsum is to create a natural looking
                        block of text (sentence, paragraph, page, etc.)
                        that doesn't distract from the layout.
                    </p>
                </Detail>
            </Content>
            <Content>
                <img src={`${thirdImage}`} alt="" />
                <Detail>
                    <h2>
                        Experiences
                    </h2>
                    <p>
                        It usually begins with: “Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.” The
                        purpose of lorem ipsum is to create a natural
                        looking block of text (sentence, paragraph, page, etc.)
                        that doesn't distract from the layout.
                    </p>
                </Detail>
            </Content>
        </OutterMostDiv>
    )
}

export default About;