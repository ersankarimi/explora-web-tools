import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './features/ui'
import { motion } from 'framer-motion'
import { useSidebar } from './hooks'
import './App.style.css'

/**
 * @returns {any} App - the main component.
 */
const App = () => {
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
     */
    const handleWindowResize = () => {
        const { innerWidth } = window
        innerWidth > 767 && !sidebarIsOpen && toggleSidebar()
        innerWidth <= 767 && sidebarIsOpen && toggleSidebar()
    }

    /**
     * * Adds the event listener to the window resize event
     * * and calls the handleWindowResize function
     * * when the component is mounted.
     */
    useEffect(() => {
        window.addEventListener('resize', handleWindowResize)
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [window.innerWidth])

    return (
        <>
            <motion.div
                className="container__sidebar"
                animate={{
                    x: sidebarIsOpen ? 0 : -400,
                    display: sidebarIsOpen ? 'block' : 'none'
                }}
                transition={{
                    duration: 0.25,
                    type: 'spring'
                }}>
                <Sidebar />
            </motion.div>
            <div className="container__content" style={{ minHeight: '100vh' }}>
                <Navbar />
                <div className="container__content-main">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default App
