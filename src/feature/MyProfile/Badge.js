/* eslint-disable react/prop-types */
import React from "react";
import { StyledBadge } from "./styles"

export const Badge = ({text, color, icon}) => {
    return (<StyledBadge src={`https://img.shields.io/badge/${text}-${color}?style=flat-square&logo=${icon}&logoColor=white`}/>)
}
