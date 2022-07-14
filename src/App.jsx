import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from '@features/ui'
import { motion } from 'framer-motion'
import { useSidebar } from '@hooks'

/**
 * @returns {Any} App - the main component.
 */
const App = () => {
  /**
   * @constant
   * @type {Boolean} represents the state of the sidebar
   * @default true when the viewport is greater than 639px
   *
   * @constant
   * @type {Function} represents the function to toggle the sidebar
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

  let { pathname } = useLocation()
  pathname = pathname.split('/')[1]

  /**
   * * Check the path name and return the appropriate component.
   * * Changes the title of the page.
   */
  useEffect(() => {
    pathname === 'css'
      ? (document.title = 'CSS Tools | Explora web tools, The helper tools for web development')
      : pathname === 'html'
      ? (document.title = 'HTML Tools | Explora web tools, The helper tools for web development')
      : (document.title = 'Explora Web Tools | The helper tools for web development')
  }, [pathname])

  return (
    <>
      <motion.aside
        className="container__sidebar sticky top-0 z-50 h-screen min-w-[50%] max-w-[50%] md:min-w-[30%] md:max-w-[30%] lg:min-w-[15%] lg:max-w-[15%]"
        animate={{
          x: sidebarIsOpen ? 0 : -400,
          display: sidebarIsOpen ? 'block' : 'none'
        }}
        transition={{
          duration: 0.25,
          type: 'spring'
        }}>
        <Sidebar />
      </motion.aside>
      <div className="container__content flex min-h-screen flex-col">
        <header className="sticky top-0 z-30">
          <Navbar />
        </header>
        <main className="relative h-full overflow-y-auto p-4 lg:py-4 lg:px-12">
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App
