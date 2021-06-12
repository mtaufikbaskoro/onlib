import React from 'react'
import propTypes from 'prop-types'

export default function Section(props) {
    const className = ['mt-12'];
    className.push(props.className);
    return (
        <section className={className.join(" ")}>{props.children}</section>
    )
}

Section.propTypes = {
    className: propTypes.string,
}