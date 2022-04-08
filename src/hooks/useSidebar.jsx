import { useContext } from 'react'
import { SidebarContext } from '@context'

export const useSidebar = () => {
    return useContext(SidebarContext)
}
