import styled, { keyframes } from "styled-components";

/* The typing effect */

const typing = keyframes`
    from { 
        width: 0;
    }
    to { 
        width: 100%;
    }
`
  
  /* The typewriter cursor effect */
const blink_caret = keyframes`
    from { 
        border-color: transparent; 
    }
    to { 
        border-color: transparent; 
    }
    50% { 
        border-color: orange; 
    }
`

export const Background = styled.div`
    display: inline-block;
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1000000;
    text-align: center;
    background-color: black;
`;
export const MessageContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;

`

export const Header = styled.div`
    width: 430px;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid black; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */
    display: block;
    font-weight: 900;
    font-size: 80px;
    animation: ${typing} 3s steps(40, end), ${blink_caret} .75s step-end 4;
`

export const Text = styled.h1`
    width: 0px;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid black; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */
    display: block;
    font-weight: 100;
    font-size: 50px;
    animation: ${typing} 3s steps(40, end) forwards, ${blink_caret} .75s step-end infinite ;
    animation-delay: 3s;
`

