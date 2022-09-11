/* eslint-disable react/prop-types */
import React from "react";

export const Post = ({src}) => {

    return (
        <iframe style={{width: "100%", height: "100%", border: "none"}} src={src}></iframe>
    )
}