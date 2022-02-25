import styled from 'styled-components'

export const CharacterImg = styled.img`
    position: absolute;
    top: ${props => props.y || `0px`};
    left: ${props => props.x || `0px`};
    z-index: 2;
`