/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import GithubStats from "../../feature/Github/GithubStats";
import { Badge } from "../../feature/MyProfile/Badge";
import { Post } from "../../feature/Post";
import { Repos } from "../../feature/Repos";
import * as S from "./styles";
import Card from '@mui/material/Card';
import { BuisnessCard } from "../../feature/BuisnessCard";
import stacks from "./stacks.json"
import { debounce } from "lodash";

const cardLimit = 1;
let lastScrollTop = 0;

const ChapterOne = () => {
    const scrollRef_1 = useRef(null);
    const scrollRef_2 = useRef(null);
    const [card, setCard] = useState(1);

    const debounceOnChange = debounce((ref_num) => {
        console.log("##debounce")
        switch(ref_num){
            case 1: 
                scrollRef_1.current.scrollIntoView({behavior: 'smooth'});
                break;
            case 2: 
                scrollRef_2.current.scrollIntoView({behavior: 'smooth'});
                break;
        }
        enableScroll();
      }, 300);

    const disableScroll = () => {
        document.body.style.overflow = "hidden";
    }

    const enableScroll = () => {
        document.body.style.overflow = "scroll"
    }

    const handleScroll = (e) => {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        disableScroll();
        if (st > lastScrollTop) {
            //down scroll
            // scrollRef_2.current.scrollIntoView();
            
            debounceOnChange(2);
        } else if (st < lastScrollTop) {
            // up scroll
            // scrollRef_1.current.scrollIntoView();
            
            debounceOnChange(1);
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }
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

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <S.StyledPage>
            <S.StyledMe ref={scrollRef_1}>
                <S.StyledLeft>
                    <S.StyledFlexCol>
                        <S.StyledHeader>
                            <b>계</b>속 <br/>
                            <b>발</b>전<b>하는</b> <br/>
                            <b>개발자</b>
                        </S.StyledHeader>
                    </S.StyledFlexCol>
                </S.StyledLeft>
                <S.StyledRight>
                    <S.StyledFlexCol>
                        <S.StyledPic />
                        <S.StyledBuisnessCard>
                            <Card>
                                <BuisnessCard type={card} />
                            </Card>
                            <S.StyledArrow>
                                <button onClick={()=>handleArrow(-1)}>
                                    left
                                </button>
                                <button onClick={()=>handleArrow(1)}>
                                    right
                                </button>
                            </S.StyledArrow>
                        </S.StyledBuisnessCard>
                    </S.StyledFlexCol>
                </S.StyledRight>
            </S.StyledMe>
            <S.StyledGit ref={scrollRef_2}>
                <S.StyledRepos>
                    <Card>
                        <Repos />
                    </Card>
                </S.StyledRepos>
                <S.StyledBadges>
                    <Card>
                    {stacks.map((stack, i)=>{
                        return <Badge key={i} text={stack.text} color={stack.color} icon={stack.icon}/>
                    })}
                    </Card>
                </S.StyledBadges>
                <S.StyledGithubStats>
                    <Card>
                        <GithubStats />
                    </Card>
                </S.StyledGithubStats>
            </S.StyledGit>


            <S.StyledPosts>
                <Card sx={{ height: 870 }}>
                    <Post src={`https://dmdwn3979.tistory.com/`}/>
                </Card>
            </S.StyledPosts>


        </S.StyledPage>
    )
}

export default ChapterOne;