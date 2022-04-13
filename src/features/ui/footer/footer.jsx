import React from 'react'
import { GithubIcon } from './components'
import './Footer.style.css'

const Footer = () => {
    return (
        <footer className={'footer'}>
            <h2 className="md:text-md text-sm">Explora web tools © 2022</h2>
            <GithubIcon />
        </footer>
    )
}

export default Footer
