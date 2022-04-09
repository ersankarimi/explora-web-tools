import React from 'react'
import { ArrowSidebar } from './../arrow'
import './ButtonDropdown.style.css'

const ButtonDropdown = ({ name }) => {
    return (
        <button className={'sidebar__dropdown-button'}>
            {name}
            <span>
                <ArrowSidebar />
            </span>
        </button>
    )
}

export default ButtonDropdown
