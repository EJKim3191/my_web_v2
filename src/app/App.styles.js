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
    top: 0;
    left: 0;
    background-color: rgb(245, 245, 245);
`