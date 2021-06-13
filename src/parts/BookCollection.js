import React from 'react'
import propTypes from 'prop-types'

import Card from 'components/Card'

export default function BookCollection (props) {
    const books = props.dataBooks
    const className = ["grid", "grid-flow-row", "grid-cols-3", "grid-rows-3", "pt-4"]
    className.push(props.gap)
    return(
        <div className={className.join(" ")}>
            {
                books.map((book, index) => {
                    return(
                        <Card key={book.id} detail={book}></Card>
                    )
                })
            }
        </div>
    )
}

BookCollection.propTypes = {
    gap: propTypes.string
}