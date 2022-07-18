import React from 'react'
import { motion } from 'framer-motion'
import { useSidebar } from '@hooks'
import doubleArrow from './doubleArrow.svg'
import { variants } from './navbarAnimation'

/**
 * * Returns a Navbar component.
 * @returns {Any} of the Navbar components.
 */

const Navbar = () => {
  /**
   * @constant
   * @type {Boolean} sidebarIsOpen -  represents the state of the sidebar
   * @default true when the viewport is greater than 639px
   *
   * @constant
   * @type {Function} toggleSidebar -  represents the function to toggle the sidebar
   */
  const [sidebarIsOpen, toggleSidebar] = useSidebar()

  return (
    <header className="flex min-w-full items-center bg-gradient-to-b from-main-bg-dark-1 to-main-bg-dark-1/90 p-4 py-4 text-white shadow-header-shadow backdrop-blur-sm lg:px-8">
      <motion.img
        variants={variants}
        animate={sidebarIsOpen ? 'open' : 'notOpen'}
        transition={{
          duration: 0.5,
          type: 'spring',
          stiffness: 50
        }}
        src={doubleArrow}
        className="h-6 w-6 cursor-pointer md:h-8 md:w-8 xl:h-8 xl:w-16"
        alt="logo"
        onClick={toggleSidebar}
      />
    </header>
  )
}

export default Navbar
