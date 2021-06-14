import React from 'react'
import propTypes from 'prop-types'
import { useParams } from 'react-router-dom'

import Header from 'parts/Header'
import Footer from 'parts/Footer'
import Section from 'components/Section'
import Badge from 'components/Badge'

import ExImage from 'assets/images/buku-baru.png'

export default function DetilBuku(props) {
    let {id} = useParams();
    return(
        <div>
            <Header></Header>
            <Section className="flex justify-center mx-24">
                <div className="grid grid-cols-4 gap-10">
                    <div>
                        <img className="rounded-lg" src={ExImage} alt="book cover" />
                    </div>
                    <div className="flex flex-col col-span-3">
                        <div>
                            <h1 className="text-white text-2xl">Lemony Snickets: A Series of Unfortunate</h1>
                        </div>
                        <div className="flex justify-start mt-8">
                            <h1 className="text-white text-xl mr-2">Yuval Noah</h1>
                            <div>
                                <Badge className="mx-1">Sejarah</Badge>
                                <Badge className="mx-1">Novel</Badge>
                            </div>
                        </div>
                        <div className="mt-4">
                            <span className="text-white text-xl mr-2">Jumlah Halaman :</span>
                            <Badge isPage>117</Badge>
                        </div>
                        <div className="flex flex-col justify-start mt-4">
                            <h1 className="text-white text-xl">Sinopsis :</h1>
                            <p className="text-white">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
            <Footer></Footer>
        </div>
    )
}

DetilBuku.propTypes = {
    data: propTypes.object,
    className: propTypes.string
}