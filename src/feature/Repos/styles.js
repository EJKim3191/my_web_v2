import styled from "styled-components";

export const StyledRepos = styled.div`
    width: 100%;
    height: 200px;
    overflow: scroll;
    margin: 25px;
` 
export const StyledName = styled.span`
    color: black;
    font-size: 18px;
    font-weight: bold;
`
export const StyledURL = styled.span`
    color: gray;

    &:hover{
        cursor: pointer;
    }
`
export const StyledLanguage = styled.span`
    color: orange;
    margin-right: 20px;
`