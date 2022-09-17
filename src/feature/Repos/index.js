/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledRepos, StyledName, StyledURL, StyledLanguage } from "./styles";


export const Repos = () => {
    const dispatch = useDispatch();
    const githubRepoList = useSelector((state)=>state.main.repoList);
    useEffect(()=>{
        console.log(githubRepoList)
    }, [githubRepoList])
    return (
        <StyledRepos>
            {githubRepoList.map((repo, i)=>{
                return(
                    <div key={i}>
                        <StyledName>{repo.name}</StyledName>
                        <br />
                        {
                            repo.language !== null && 
                            <StyledLanguage>{repo.language}</StyledLanguage>
                        }
                        <StyledURL onClick={()=>window.open(repo.html_url)}>{repo.html_url}</StyledURL>
                        <br />
                        <br />
                    </div>
                )
            })}
        </StyledRepos>
    )

}