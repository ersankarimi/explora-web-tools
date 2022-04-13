import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useSidebar } from '@hooks'
import './Sidebar.style.css'
import { Dropdown } from './components'

const Sidebar = () => {
    const [sidebarIsOpen, toggleSidebar] = useSidebar()

    // * This function will handle close and open sidebar when click in window
    // * when viewport is less than 639, sidebar is opened, and target
    // * classList not same as sidebar__dropdown-button
    const handleShowHiddenSidebar = (e) => {
        const viewport = window.innerWidth
        viewport <= 639 &&
            sidebarIsOpen &&
            !e.target.classList.contains('sidebar__dropdown-button') &&
            toggleSidebar()
    }

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
