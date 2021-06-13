import React from 'react'

import Header from 'parts/Header'
import Section from 'components/Section'
import Footer from 'parts/Footer'
import BookCollection from 'parts/BookCollection'
import SearchBar from 'components/SearchBar'

import GambarBuku from 'assets/images/buku-baru.png'

export default function SemuaBuku() {
    const dataBooks = [
        {id: 1, title: "Homo Sapiens", image: GambarBuku},
        {id: 2, title: "Homo Sapiens", image: GambarBuku},
        {id: 3, title: "Homo Sapiens", image: GambarBuku},
        {id: 4, title: "Homo Sapiens", image: GambarBuku},
        {id: 5, title: "Homo Sapiens", image: GambarBuku},
    ]
    return (
        <div>
            <Header></Header>
            <Section className="mx-12">
                <SearchBar />
            </Section>
            <Section className="flex flex-col items-center">
                <BookCollection gap="gap-x-32 gap-y-20" dataBooks={dataBooks} />
            </Section>
            <Footer></Footer>
        </div>
    )
}
