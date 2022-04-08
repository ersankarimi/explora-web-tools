import React from 'react'
import DoubleArrow from './components/arrow/DoubleArrow'

const Header = () => {
    return (
        <header
            className={
                'sticky top-0 flex min-w-full items-center bg-gradient-to-b from-main-bg-dark-1 to-main-bg-dark-1 p-4 text-white backdrop-blur-sm'
            }>
            <DoubleArrow />
        </header>
    )
}

export default Header
