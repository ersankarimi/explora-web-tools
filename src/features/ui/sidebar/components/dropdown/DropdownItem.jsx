import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { useSidebar } from '@hooks'
import './DropdownItem.style.css'
import ButtonDropdown from './ButtonDropdown'
import { ArrowSidebar } from '../ArrowSidebar'

const DropdownItem = ({ name, item, path }) => {
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
    const [toggleSidebar] = useSidebar()

    const handleDropdownOpen = () => {
        setDropdownIsOpen((condition) => !condition)
    }

    // * This function will handle close and open the sidebar when click the link in dropdown
    const handleCloseSidebar = () => {
        const { width } = window.screen
        width <= 639 && toggleSidebar()
    }

    return (
        <li className={'sidebar__dropdown-item'}>
            <ButtonDropdown>
                <button className={'sidebar__dropdown-button'} onClick={handleDropdownOpen}>
                    {name}
                    <span>
                        <ArrowSidebar isOpen={dropdownIsOpen} />
                    </span>
                </button>
            </ButtonDropdown>
            <motion.ul
                className={'sidebar__dropdown-collapse'}
                animate={{
                    display: dropdownIsOpen ? 'block' : 'none'
                }}
                transition={{
                    duration: 0.5
                }}>
                {item.map((el, i) => (
                    <motion.li
                        className={'sidebar__dropdown-collapse-item'}
                        key={i}
                        animate={{
                            opacity: dropdownIsOpen ? 1 : 0
                        }}
                        transition={{
                            delay: i / 90
                        }}>
                        <NavLink
                            to={`${path}/${el.split(' ').join('').toLowerCase()}`}
                            style={({ isActive }) => {
                                return {
                                    color: isActive
                                        ? 'rgba(250,250,250,.80)'
                                        : 'rgba(250,250,250,.60)'
                                }
                            }}
                            onClick={handleCloseSidebar}>
                            {el}
                        </NavLink>
                    </motion.li>
                ))}
            </motion.ul>
        </li>
    )
}

export default DropdownItem
