import React, { createContext, useState } from 'react'

// initialize context
export const SidebarContext = createContext()

export const SidebarContextProvider = ({ children }) => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

    const toggleSidebar = () => {
        setSidebarIsOpen((condition) => !condition)
    }

    const value = [sidebarIsOpen, toggleSidebar]

    return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
}
