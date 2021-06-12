import React from 'react'

import Section from 'components/Section'
import Header from 'parts/Header'

import BukuBaru from 'assets/images/buku-baru.png'
import SemuaBuku from 'assets/images/semua-buku.png'
import TentangUkmi from 'assets/images/tentang-ukmi.png'
import Menu from 'components/Menu'
import Footer from 'parts/Footer'

export default function Homepage() {
    const menuDatas = [
        {
            id: 1,
            imgSrc: BukuBaru,
            imgAlt: 'buku baru',
            title: 'Buku Baru',
            link: 'buku-baru'
        },
        {
            id: 2,
            imgSrc: SemuaBuku,
            imgAlt: 'semua buku',
            title: 'Semua Buku',
            link: 'semua-buku'
        },
        {
            id: 3,
            imgSrc: TentangUkmi,
            imgAlt: 'tentang ukmi',
            title: 'Tentang UKMI',
            link: 'about'
        }
    ]
    return (
        <div>
            <Header></Header>
            <Section className="flex justify-evenly">
                {
                    menuDatas.map(data => {
                        return(
                            <Menu data={data}></Menu>
                        )
                    })
                }
            </Section>
            <Footer></Footer>
        </div>
    )
}
