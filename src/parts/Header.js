import Button from 'components/Button'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav className="flex justify-between items-center px-14 py-4 text-light">
            <h1 className="text-2xl font-bold"><Link to="/">Onlib</Link></h1>
            <ul className="flex items-center">
                
                <li><Link to="/about">About</Link></li>
                <li className="ml-8"><Link to="/cpanel"><Button hasShadow>Masuk</Button></Link></li>
            </ul>
        </nav>
    )
}
