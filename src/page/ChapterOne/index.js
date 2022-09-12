/* eslint-disable no-unused-vars */
import React from "react";
import GithubStats from "../../feature/Github/GithubStats";
import { Badge } from "../../feature/MyProfile/Badge";
import { Post } from "../../feature/Post";
import { Repos } from "../../feature/Repos";
import { StyledGithubStats, StyledBadges, StyledPosts, StyledRepos } from "./styles"

const stacks = [
    {
        text: "HTML",
        color: "orange",
        icon: "HTML5"
    },
    {
        text: "CSS",
        color: "blue",
        icon: "CSS3"
    },
    {
        text: "Javascript",
        color: "yellow",
        icon: "Javascript"
    },
    {
        text: "React.js",
        color: "blue",
        icon: "React"
    },
    {
        text: "Next.js",
        color: "black",
        icon: "Next.js"
    },
    {
        text: "Node.js",
        color: "green",
        icon: "Node.js"
    },
    {
        text: "TypeScript",
        color: "blue",
        icon: "TypeScript"
    },
    {
        text: "Sass",
        color: "pink",
        icon: "Sass"
    },
    {
        text: "styled components",
        color: "blue",
        icon: "styled-components"
    },

]

const ChapterOne = () => {

    return (
        <>
            <StyledBadges>
                {stacks.map((stack, i)=>{
                    return <Badge key={i} text={stack.text} color={stack.color} icon={stack.icon}/>
                })}
                
            </StyledBadges>
            <StyledGithubStats>
                <GithubStats />
            </StyledGithubStats>

            <StyledPosts>
                <Post src={`https://dmdwn3979.tistory.com/`}/>
            </StyledPosts>
            <StyledRepos>
                <Repos />
            </StyledRepos>
        </>
    )
}

export default ChapterOne;