/* eslint-disable no-unused-vars */
import React from "react";
import { StyledCard, StyledName, StyledImg, StyledInfo} from "./styles";
import RSK from "../../img/company/RakutenSymphony.webp"

export const BuisnessCard = () => {

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

}