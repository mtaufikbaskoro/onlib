import React from 'react'
import propTypes from 'prop-types'
import Button from './Button'
import Badge from './Badge'

export default function Hero(props) {
    const className = ["flex", "flex-col", "justify-between", "text-dark", "bg-gray-light", "rounded-lg", "shadow"]
    className.push(props.className);
    const style = {
        width: '500px',
        height: '300px'
    }
    return (
        <div style={style} className={className.join(" ")}>
            <div><h1 className="text-lg px-7 pt-5">Judul Buku</h1></div>
            <div className="flex justify-between px-7 pb-4">
                <div className="flex flex-col justify-between">
                    <h1>Yuval Noah</h1>
                    <div>
                        <Badge className="mx-1">Sejarah</Badge>
                        <Badge className="mx-1">Sejarah</Badge>
                        <Badge className="mx-1">Sejarah</Badge>
                    </div>
                </div>
                <Button className="my-2" isDark>Detail</Button>
            </div>
        </div>
    )
}

Hero.propTypes = {
    className: propTypes.string,
    data: propTypes.array
}