import React from 'react'
import { Header } from '@features/ui'
import { SidebarContextProvider } from '@context'

const Home = () => {
    return (
        <SidebarContextProvider>
            <Header />
        </SidebarContextProvider>
    )
}

export default Home
