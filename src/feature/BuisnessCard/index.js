/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { StyledCard, StyledName, StyledImg, StyledInfo, StyledName2, StyledImg2, StyledInfo2} from "./styles";
import RSK from "../../img/company/RakutenSymphony.webp"
import ssafy from "../../img/mypic/ssafy_logo.jpeg"
export const BuisnessCard = (props) => {

    if(props.type === 1)
    return (
        <StyledCard>
            <StyledName>
                <span style={{fontSize: '25px', fontWeight: 'bold'}}>김응주</span>
                <br />
                <span style={{fontSize: '12px'}}>Software Engineer</span>
                <br />
                <span style={{fontSize: '12px'}}>Internet & Ecosystems Services</span>
                <br />
            </StyledName>

            <StyledImg src={RSK}/>

            <StyledInfo>
                <span style={{fontSize: '20px', fontWeight: 'bold'}}>Rakuten Symphony Korea Inc.</span>
                <br />
                <span style={{fontSize: '13px'}}>서울 서초구 사평대로 368 케이플라츠신논현 10층, 11층</span>
                <br />
                <span style={{fontSize: '13px'}}>Mobile: 010-4456-3191</span>
                <br />
                <span style={{fontSize: '13px'}}>yungju.kim@rakuten.com</span>
            </StyledInfo>

        </StyledCard>
    )
    else if(props.type === 0)
    return (
        <StyledCard>
            <StyledImg2 src={ssafy}/>

            <StyledName2>
                <span style={{fontSize: '18px', fontWeight: 'bold'}}>삼성청년SW아카데미</span>
                <br />
                <br />
                <span style={{fontSize: '18px', fontWeight: 'bold'}}>6기 수료생</span>
                <br />
                <span style={{fontSize: '18px'}}>2021.07 ~ 2022.07</span>
                <br />
                <br />
                <span style={{fontSize: '20px', fontWeight: 'bold'}}> 김응주</span>
                <br />
            </StyledName2>
        </StyledCard>
    )

}