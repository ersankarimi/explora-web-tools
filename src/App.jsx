import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Sidebar, Footer } from '@features/ui'
import { motion } from 'framer-motion'
import { useSidebar } from '@hooks'
import './App.style.css'

const App = () => {
    const [sidebarIsOpen, toggleSidebar] = useSidebar()

    const handleWindowResize = () => {
        const viewport = window.innerWidth
        viewport > 640 && !sidebarIsOpen && toggleSidebar()
        viewport <= 639 && sidebarIsOpen && toggleSidebar()
    }

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
                <Header />
                <div className="container__content-main">
                    {/* // * Render Outlet */}
                    <Outlet />
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default App
