import React from 'react'
import propTypes from 'prop-types'

import Button from './Button'

export default function Card(props) {
    const detail = props.detail
    const className = ["flex", "flex-col", "shadow-xl"]
    className.push(props.className);
    const cardBodySize = {
        width: "300px", height: "250px"
    }
    const cardFooterSize = {
        width: "300px", height: "100px"
    }
    return (
        <div style={{width: "300px"}} className={className.join(" ")}>
            <div style={cardBodySize} className="bg-gray-dark rounded-t-lg overflow-hidden relative">
                <img className="z-0 opacity-80 shadow-inner" src={detail.image} alt="gambar buku 1" />
                <h1 className="absolute z-10 bottom-2 left-2 font-semibold text-light">
                    {detail.title}
                </h1>
            </div>
            <div style={cardFooterSize} className="bg-light flex justify-center items-center rounded-b-lg">
                <Button isDark hasShadow href="detail" idData={detail.id}>Detail</Button>
            </div>
        </div>
    )
}

Card.propTypes = {
    data: propTypes.array, 
    className: propTypes.string
}