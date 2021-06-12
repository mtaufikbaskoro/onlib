import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Menu(props) {
    const size = {
        width: '360px', height: '480px'
    }
    return (
        <Link to={`/${props.data.link}`}>
            <div style={size} className="relative group bg-gray-light hover:bg-gray-dark rounded-lg"> 
                <img 
                    className="opacity-80 group-hover:opacity-50 rounded-lg shadow-inner" 
                    src={props.data.imgSrc} 
                    alt={props.data.imgAlt}/>
                <h1 
                    className="absolute bottom-2 left-2 text-4xl text-gray-900 font-semibold group-hover:text-light">
                    {props.data.title}
                </h1>
            </div>
        </Link>
    )
}

Menu.propTypes = {
    data: propTypes.array,
}
