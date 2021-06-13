import React from 'react'
import propTypes from 'prop-types'

import Header from 'parts/Header'
import Footer from 'parts/Footer'
import Section from 'components/Section'

export default function DetilBuku(props) {
    console.log(props.idData)
    return(
        <div>
            <Header></Header>
            <Footer></Footer>
        </div>
    )
}

DetilBuku.propTypes = {
    data: propTypes.object,
    className: propTypes.string
}