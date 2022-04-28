import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { useSidebar } from '@hooks'
import ButtonDropdown from './ButtonDropdown'
import { DropdownArrow } from './../DropdownArrow'

/**
 *
 * @param {name} name - The name of the component.
 * @param {items} items - The item of every dropdown button  .
 * @param {path} path - The URL path of the component.
 * @returns {any} of the DropdownItem component.
 */

const DropdownItem = ({ title, items, path }) => {
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
     * * If the window screen is less than 767px,
     * * return a toggleSidebar() function.
     */
    const handleCloseSidebar = () => {
        const { width } = window.screen
        width <= 767 && toggleSidebar()
    }

    return (
        <li className={'sidebar__dropdown-item text-white'}>
            <ButtonDropdown>
                <button
                    className={
                        'sidebar__dropdown-button flex w-full justify-between px-6 py-2 font-inter text-sm font-semibold text-white-80 hover:bg-slate-50/10 md:text-base'
                    }
                    onClick={handleDropdownOpen}>
                    {title}

                    <DropdownArrow isOpen={dropdownIsOpen} />
                </button>
            </ButtonDropdown>
            <motion.ul
                className={
                    'sidebar__dropdown-collapse  my-2 ml-5 flex w-full flex-col justify-between gap-2 px-4 py-2'
                }
                animate={{
                    display: dropdownIsOpen ? 'block' : 'none'
                }}
                transition={{
                    duration: 0.5
                }}>
                {items.map((el, i) => (
                    <motion.li
                        className={
                            'sidebar__dropdown-collapse-item my-1 p-1 font-inter text-xs duration-100 ease-in hover:pl-3 md:text-sm'
                        }
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
