import React from 'react'
import propTypes from 'prop-types'

export default function Badge(props) {
    const className = ["py-1", "px-2", "rounded-lg", "text-sm"];
    const colors = [
        "bg-red-300", "bg-yellow-300", "bg-green-300", "bg-indigo-300", "bg-purple-300", "bg-pink-300"
    ];
    if(props.isPage){
        className.push("bg-white");
    }else{
        let numb = Math.floor(Math.random() * 10);
        if(numb > 5){
            numb = Math.floor(numb/2);
        }
        className.push(colors[numb]);
    }
    className.push(props.className);
    return (
        <span className={className.join(" ")}>{props.children}</span>
    )
}

Badge.propTypes = {
    className: propTypes.string,
    isPage: propTypes.bool
}
