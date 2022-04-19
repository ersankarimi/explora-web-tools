import React, { createContext, useState } from 'react'

/**
 * @type {function} SidebarContext - the context of the component.
 */
const SidebarContext = createContext()

/**
 * @param {children} children - the children of the component.
 * @returns {any} SidebarContext.Provider - the provider of the context,
 * and the value of context type is array and the value is sidebarIsOpen and toggleSidebar function.
 */
const SidebarContextProvider = ({ children }) => {
    const { innerWidth } = window
    const [sidebarIsOpen, setSidebarIsOpen] = useState(innerWidth <= 767 ? false : true)

    const toggleSidebar = () => {
        setSidebarIsOpen((condition) => !condition)
    }

    const value = [sidebarIsOpen, toggleSidebar]

    return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
}

export { SidebarContext, SidebarContextProvider }
