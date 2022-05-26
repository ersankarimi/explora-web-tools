import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useSidebar } from '@hooks'
import { Dropdown } from './components'

/**
 * * Returns a Sidebar component.
 * @returns {Any} of the Sidebar component.
 */
const Sidebar = () => {
    /**
     * @constant
     * @type {Boolean} represents the state of the sidebar
     * @default true when the viewport is greater than 639px
     *
     * @constant
     * @type {Function} represents the function to toggle the sidebar
     * @default useSidebar(SidebarContext)
     */
    const [sidebarIsOpen, toggleSidebar] = useSidebar()

    /**
     * * Returns a toggleSedebar function,
     * * if the innerWidth is <= 767px and,
     * *  target event doesn't have the className 'sidebar__dropdown-button' and 'arrow-button4.
     * @param {e} e - The event object.
     * @type {Number} innerWidth - The innerWidth of the window.
     * @type {boolean} sidebarIsOpen - The state of the sidebar.W
     * @returns {Any} of the toggleSidebar() function if the innerWidth <= 639.
     */
    const handleShowHiddenSidebar = (e) => {
        const { innerWidth } = window
        innerWidth <= 767 &&
            sidebarIsOpen &&
            !e.target.classList.contains('sidebar__dropdown-button') &&
            !e.target.classList.contains('arrow-dropdown') &&
            toggleSidebar()
    }

    /**
     * * Set and remove a class for body,
     * * if the sidebar is open and innerWidth <= 639, the body will have a class "overflow-hidden".
     * @type {Any} of the useEffect() function.
     * @type {Number} innerWidth - The innerWidth of the window.
     * @type {Boolean} sidebarIsOpen - The state of the sidebar.
     */
    useEffect(() => {
        const { innerWidth } = window
        sidebarIsOpen && innerWidth <= 639
            ? document.body.classList.add('overflow-hidden')
            : document.body.classList.remove('overflow-hidden')
    }, [sidebarIsOpen])

    return (
        <motion.aside className="sidebar flex w-screen sm:w-full">
            <div
                className="sidebar__nav flex h-screen w-full flex-col overflow-hidden bg-gradient-to-b from-main-bg-dark-1 to-main-bg-dark-2 text-white shadow-sidebar-shadow"
                onClick={handleShowHiddenSidebar}>
                <h1 className="sidebar__header mt-4 mb-8  p-4 text-center font-poppins text-base font-bold text-white-100 lg:text-xl">
                    <Link to={'/'}>Explora Web Tools</Link>
                </h1>

                <Dropdown />
            </div>
            <div
                className="sidebar__overlay visible h-screen min-w-[50%] bg-black/60 backdrop-blur-3xl sm:hidden"
                onClick={handleShowHiddenSidebar}></div>
        </motion.aside>
    )
}
export default Sidebar
