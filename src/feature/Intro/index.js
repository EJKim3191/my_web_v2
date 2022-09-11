/* eslint-disable react/prop-types */
import React from "react";

import { Background, Header, Text, MessageContainer } from './styles'

const Intro = ({header, text}) => {
    return (
        <Background>
            <MessageContainer>
                <Header>
                    {header}
                </Header>
                <Text>
                    {text}
                </Text>
            </MessageContainer>
        </Background>
    );
}

export default Intro;