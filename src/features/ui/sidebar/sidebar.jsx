import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useSidebar } from '@hooks'
import './Sidebar.style.css'
import { Dropdown } from './components'

/**
 * * Returns a Sidebar component.
 * @returns {any} of the Sidebar component.
 */
const Sidebar = () => {
    /**
     * @constant
     * @type {boolean} represents the state of the sidebar
     * @default true when the viewport is greater than 639px
     *
     * @constant
     * @type {function} represents the function to toggle the sidebar
     * @default useSidebar(SidebarContext)
     */
    const [sidebarIsOpen, toggleSidebar] = useSidebar()

    /**
     * * Returns a toggleSedebar function,
     * * if the innerWidth is <= 639px and,
     * *  target event doesn't have the className 'sidebar__dropdown-button' and 'arrow-button4.
     * @param {e} e - The event object.
     * @type {number} innerWidth - The innerWidth of the window.
     * @type {boolean} sidebarIsOpen - The state of the sidebar.W
     * @returns {any} of the toggleSidebar() function if the innerWidth <= 639.
     */
    const handleShowHiddenSidebar = (e) => {
        const { innerWidth } = window
        innerWidth <= 639 &&
            sidebarIsOpen &&
            !e.target.classList.contains('sidebar__dropdown-button') &&
            !e.target.classList.contains('arrow-dropdown') &&
            toggleSidebar()
    }

    /**
     * * Set and remove a class for body,
     * * if the sidebar is open and innerWidth <= 639, the body will have a class "overflow-hidden".
     * @type {any} of the useEffect() function.
     * @type {number} innerWidth - The innerWidth of the window.
     * @type {boolean} sidebarIsOpen - The state of the sidebar.
     */
    useEffect(() => {
        const { innerWidth } = window
        sidebarIsOpen && innerWidth <= 639
            ? document.body.classList.add('overflow-hidden')
            : document.body.classList.remove('overflow-hidden')
    }, [sidebarIsOpen])

    return (
        <motion.aside className="sidebar">
            <div className="sidebar__nav" onClick={handleShowHiddenSidebar}>
                <h1 className="sidebar__header">
                    <Link to={'/'}>Explora Web Tools</Link>
                </h1>

                <Dropdown />
            </div>
            <div className="sidebar__overlay" onClick={handleShowHiddenSidebar}></div>
        </motion.aside>
    )
}
export default Sidebar
