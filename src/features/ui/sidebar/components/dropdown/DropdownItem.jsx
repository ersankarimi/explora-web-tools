import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { useSidebar } from '@hooks'
import './DropdownItem.style.css'
import ButtonDropdown from './ButtonDropdown'
import { ArrowSidebar } from '../ArrowSidebar'

/**
 *
 * @param {name} name - The name of the component.
 * @param {item} item - The item of every dropdown button  .
 * @param {path} path - The URL path of the component.
 * @returns {any} of the DropdownItem component.
 */

const DropdownItem = ({ name, item, path }) => {
    /**
     * @constant
     * @type {boolean} represents the state of the sidebar
     * @default false
     */
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)

    /**
     * @constant
     * @type {function} represents the function to toggle the sidebar
     * @default useSidebar(SidebarContext)
     */
    const [toggleSidebar] = useSidebar()

    /**
     * * Sets the state of the sidebar.
     */
    const handleDropdownOpen = () => {
        setDropdownIsOpen((condition) => !condition)
    }

    /**
     * * Sets the state of the sidebar if window screen <= 639.
     * * If the window screen is less than 639px,
     * * return a toggleSidebar() function.
     */
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
                                        ? 'rgba(250,250,250,1)'
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
