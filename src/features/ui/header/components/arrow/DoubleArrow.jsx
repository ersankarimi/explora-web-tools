import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SidebarContext } from '@context'
import { useSidebar } from '@hooks'

const DoubleArrow = () => {
    const [sidebarIsOpen, toggleSidebar] = useSidebar(SidebarContext)

    console.log(sidebarIsOpen)

    // variants motion double arrow
    const variants = {
        notOpen: {
            x: [10, -50, 0],
            rotate: 180
        },
        open: {
            x: [-10, 50, 0],
            rotate: 360
        }
    }

    return (
        <motion.div
            variants={variants}
            animate={sidebarIsOpen ? 'open' : 'notOpen'}
            transition={{
                duration: 0.5,
                type: 'spring',
                stiffness: 200
            }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer md:h-8 md:w-8 xl:h-8 xl:w-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                onClick={toggleSidebar}>
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                />
            </svg>
        </motion.div>
    )
}

export default DoubleArrow
