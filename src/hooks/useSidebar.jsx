import { useContext } from 'react'
import { SidebarContext } from '@context'

/**
 *
 * @returns {Array} SidebarContext- the value is sidebarIsOpen and toggleSidebar() functions.
 */
export const useSidebar = () => {
    return useContext(SidebarContext)
}
