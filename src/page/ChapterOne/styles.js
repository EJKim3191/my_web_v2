import styled from "styled-components";
import my_pic from "../../img/mypic/my_pic.JPG"
export const StyledPage = styled.section`
    scroll-behavior: smooth;
`

export const StyledMe = styled.div`
    position: relative;
    width: 100%;
    height: 80vh;

    margin-top: 10vh;
    margin-bottom: 10vh;
    background-color: #e6f8f3;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px inset;
`
export const StyledGit = styled.div`
    position: relative;
    width: 100%;
    height: 80vh;

    margin-top: 10vh;
    margin-bottom: 10vh;
    background-color: #green;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px inset;
`
export const StyledLeft = styled.div`
    position: absolute;
    height: 100%;
    left: 0px;
    width: 50%;
`
export const StyledRight = styled.div`
    position: absolute;
    height: 100%;
    right: 0px;
    width: 50%;
`
export const StyledPic = styled.img.attrs({
    src: `${my_pic}`
    })`
    width: 450px;
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);

    position: absolute;

    transform: translate(-70%, -55%);
`;

export const StyledFlexRow = styled.div`
    display: flex;
    flex-direction: row;
    
    gap: 10px;

    width: 100%;
`
export const StyledFlexCol = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const StyledHeader = styled.h1`
    font-size: 65px;
    letter-spacing: 30px;
    b{
        font-size: 90px;
    }
    font-family: 'Noto Sans KR', sans-serif;
`

export const StyledGithubStats = styled.div`
    background: white;
    width: 500px;
    margin-top: 50px;
    margin-left: 100px
`
export const StyledBadges = styled.div`
    background: white;
    width: 500px;
    margin-top: 30px;
    margin-left: 100px
`
export const StyledPosts = styled.div`
    background: white;
    width: 1000px;
    height: 870px;
    top: 50px;
    right: 50px;
`
export const StyledRepos = styled.div`
    background: white;
    width: 500px;
    height: 200px;
    margin-top: 30px;
    margin-left: 100px
`
export const StyledBuisnessCard = styled.div`
    width: 450px;
    position: absolute;
    left: 80%;
    transform: translate(-110%, 30%);

    overflow: none;
`

export const StyledArrow = styled.div`

`