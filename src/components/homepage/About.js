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
    }
`
const Detail = styled.div`
    display:flex;
    width:50%;
    flex-direction:column;
    height:70%;
    justify-content:space-around;
    color:#F9F3DF;

    h2{
        font-size:3.5rem;
        color: #FFC947;
        font-family: 'Anton';
    }
    p{
        font-size:1.25rem;
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