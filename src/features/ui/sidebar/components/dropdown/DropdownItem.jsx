import React from 'react'
import ButtonDropdown from './ButtonDropdown'
import './DropdownItem.style.css'

const DropdownItem = ({ name, item }) => {
    return (
        <li className={'sidebar__dropdown-item'}>
            {/* button dropdown dalam sini */}
            <ButtonDropdown name={name} />
            {/* dropdown item */}
            <ul className={'sidebar__dropdown-collapse'}>
                {item.map((el, i) => (
                    <li className={'sidebar__dropdown-collapse-item'} key={i}>
                        {el}
                    </li>
                ))}
            </ul>
        </li>
    )
}

export default DropdownItem
