/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import GithubStats from "../../feature/Github/GithubStats";
import { Badge } from "../../feature/MyProfile/Badge";
import { Post } from "../../feature/Post";
import { Repos } from "../../feature/Repos";
import { StyledPage, StyledGithubStats, StyledBadges, StyledPosts, StyledRepos, StyledBuisnessCard, StyledMe, StyledPic, StyledFlexRow, StyledFlexCol, StyledHeader, StyledLeft, StyledRight, StyledArrow } from "./styles"
import Card from '@mui/material/Card';
import { BuisnessCard } from "../../feature/BuisnessCard";
import stacks from "./stacks.json"

const cardLimit = 1;

const ChapterOne = () => {
    const [card, setCard] = useState(1)

    const handleArrow = (num) =>{
        if(num === -1){
            if(card === 0) return;
            else setCard(card + num);
        }
        else{
            if(card === cardLimit) return;
            else setCard(card + num);
        }
    }
    return (
        <StyledPage>
            <StyledMe>
                <StyledLeft>
                    <StyledFlexCol>
                        <StyledHeader>
                            <b>계</b>속 <br/>
                            <b>발</b>전<b>하는</b> <br/>
                            <b>개발자</b>
                        </StyledHeader>
                    </StyledFlexCol>
                </StyledLeft>
                <StyledRight>
                    <StyledFlexCol>
                        <StyledPic />
                        <StyledBuisnessCard>
                            <Card>
                                <BuisnessCard type={card} />
                            </Card>
                            <StyledArrow>
                                <button onClick={()=>handleArrow(-1)}>
                                    left
                                </button>
                                <button onClick={()=>handleArrow(1)}>
                                    right
                                </button>
                            </StyledArrow>
                        </StyledBuisnessCard>
                    </StyledFlexCol>
                </StyledRight>
            </StyledMe>

            <StyledBadges>
                <Card>
                {stacks.map((stack, i)=>{
                    return <Badge key={i} text={stack.text} color={stack.color} icon={stack.icon}/>
                })}
                </Card>
            </StyledBadges>
            <StyledGithubStats>
                <Card>
                    <GithubStats />
                </Card>
            </StyledGithubStats>

            <StyledPosts>
                <Card sx={{ height: 870 }}>
                    <Post src={`https://dmdwn3979.tistory.com/`}/>
                </Card>
            </StyledPosts>
            <StyledRepos>
                <Card>
                    <Repos />
                </Card>
            </StyledRepos>

        </StyledPage>
    )
}

export default ChapterOne;