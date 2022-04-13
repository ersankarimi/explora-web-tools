import React, { createContext, useState } from 'react'

// initialize context
export const SidebarContext = createContext()

export const SidebarContextProvider = ({ children }) => {
    const viewport = window.innerWidth
    const [sidebarIsOpen, setSidebarIsOpen] = useState(viewport <= 639 ? false : true)

    const toggleSidebar = () => {
        setSidebarIsOpen((condition) => !condition)
    }

    const value = [sidebarIsOpen, toggleSidebar]

    return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
}
