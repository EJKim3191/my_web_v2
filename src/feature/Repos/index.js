/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledRepos } from "./styles";
import { setRepoList } from "../MainReducer"

export const Repos = () => {
    const dispatch = useDispatch();
    const githubRepoList = useSelector((state)=>state.main.repoList);

    useEffect(()=>{
        dispatch(setRepoList('EJKim3191'));
        console.log(githubRepoList)
    },[])


    // useEffect(()=>{
    //     console.log(githubRepoList)
    // }, [githubRepoList])
    return (
        <StyledRepos></StyledRepos>
    )

}