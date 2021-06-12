import React from 'react'

import Card from 'components/Card'

export default function BookCollection (props) {
    const books = props.dataBooks
    return(
        <div className="grid grid-flow-row grid-cols-3 grid-rows-3 gap-y-10 pt-4">
            {
                books.map((book, index) => {
                    console.log(book)
                    return(
                        <Card key={book.id} detail={book}></Card>
                    )
                })
            }
        </div>
    )
}