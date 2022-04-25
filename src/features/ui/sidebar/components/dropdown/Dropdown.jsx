import React from 'react'
import { useDataContent } from '@hooks'
import DropdownItem from './DropdownItem'

/**
 * * Returns a Dropdown component.
 * @returns {any} of the Dropdown component.
 */
const Dropdown = () => {
    const dataContent = useDataContent()

    return (
        <ul className={'sidebar__dropdown'}>
            {dataContent.map((el, i) => (
                <DropdownItem {...el} key={i + 1} />
            ))}
        </ul>
    )
}

export default Dropdown
