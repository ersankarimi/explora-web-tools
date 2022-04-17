import React from 'react'
import { dropdownItemData } from './Dropdown.data'
import DropdownItem from './DropdownItem'

/**
 * * Returns a Dropdown component.
 * @returns {any} of the Dropdown component.
 */
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
