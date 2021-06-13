import React from 'react'

import Hero from 'components/Hero'
import Section from 'components/Section'
import Footer from 'parts/Footer'
import Header from 'parts/Header'
import BookCollection from 'parts/BookCollection'


import GambarBuku from 'assets/images/buku-baru.png'

export default function BukuBaru() {
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
            <Section className="flex flex-col ml-40">
                <div><h1 className="text-white font-bold text-2xl">Koleksi Baru</h1></div>
                <div className="flex pt-4">
                    <Hero></Hero>
                    <Hero className="ml-7"></Hero>
                </div>
            </Section>
            <Section className="flex flex-col ml-40">
                <div><h1 className="text-white font-bold text-2xl">Koleksi Baru</h1></div>
                <BookCollection gap="gap-y-10" dataBooks={dataBooks} />
            </Section>
            <Footer></Footer>
        </div>
    )
}
