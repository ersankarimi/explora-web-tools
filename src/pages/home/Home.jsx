import React from 'react'
import { motion } from 'framer-motion'
import { Header } from '@features/ui'
import { Sidebar } from '@features/ui'
import { SidebarContextProvider } from '@context'
import './Home.style.css'

const Home = () => {
    return (
        <SidebarContextProvider>
            <div className="container__sidebar">
                <Sidebar />
            </div>
            <div className="container__content">
                <Header />
            </div>
        </SidebarContextProvider>
    )
}

export default Home
