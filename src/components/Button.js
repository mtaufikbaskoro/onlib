import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Button(props) {
    const className = ["py-1.5", "px-5", "rounded", "border", "border-transparent"];
    const href = props.href
    className.push(props.className);
    if(props.isDark){
        className.push("bg-gray-dark");
        className.push("text-light");
        className.push("hover:bg-transparent");
        className.push("hover:text-black");
        className.push("hover:border-gray-dark");
    }else{
        className.push("bg-gray-light")
        className.push("hover:bg-gray-dark");
        className.push("hover:text-light");
        className.push("hover:border-light");
    }
    if(props.hasShadow) className.push("shadow");
    if(href == undefined){
        return (
            <button className={className.join(" ")}>{props.children}</button>
        )
    }else{
        let link = `/${href}`
        if(props.idData != undefined){
            link = `/${href}/${props.idData}`
        }
        return (
            <Link to={link}>
                <button className={className.join(" ")}>{props.children}</button>
            </Link>
        )
    }
}

Button.propTypes = {
    isDark: propTypes.bool,
    hasShadow: propTypes.bool,
    className: propTypes.string,
    href: propTypes.string,
    idData: propTypes.number
}
