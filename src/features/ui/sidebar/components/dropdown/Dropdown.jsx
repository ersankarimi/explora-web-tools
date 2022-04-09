import React from 'react'
import { dropdownItemData } from './dropdownData'
import DropdownItem from './DropdownItem'

const Dropdown = () => {
    return (
        <ul className={'sidebar__dropdown'}>
            {dropdownItemData.map((el, i) => (
                <DropdownItem {...el} key={i + 1} />
            ))}
        </ul>
    )
}

export default Dropdown
