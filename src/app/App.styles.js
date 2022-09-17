import styled from "styled-components";

export const App = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    border: solid 1px gray;
`
export const PrologueContainer = styled.div`
    position: relative;
    top: 100px;
    width: 1500px;
    height: 800px;
`
export const Background = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: black;
`;
export const ChapterOneContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgb(245, 245, 245);
    // box-shadow: 0 0 0 10px rgb(69, 123, 150) inset;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px inset;
`