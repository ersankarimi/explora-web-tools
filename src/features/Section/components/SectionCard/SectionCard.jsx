import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/**
 * * Returns a SectionCard component.
 * @param {String} title - title of the menu card
 * @param {String} path - path of the menu card
 * @param {String} codeColor - color code of the menu card
 * @param {Integer} delayTime - delay time of the menu card
 * @returns {JSX.Element} - JSX element of the SectionCard component
 */

const SectionCard = ({ title, path, codeColor, delayTime }) => {
    /**
     * @type {Object} childVariants - object of the child variants motion.
     */
    const childVariants = {
        hidden: {
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: 'easeInOut'
            }
        },
        visible: (i) => ({
            opacity: 1,
            transition: { delay: (delayTime + 1) / 5, duration: 0.5, ease: 'easeInOut' }
        })
    }

    return (
        <motion.div
            className="mt-8 cursor-pointer rounded-md border-2 border-item-stroke bg-gradient-to-tr from-main-card-dark-1 to-main-card-dark-2 px-8 py-4 font-inter font-bold tracking-wide text-white-65 duration-150 hover:scale-[1.015] hover:text-white-100 hover:shadow-item-shadow md:mr-8 md:mt-0"
            variants={childVariants}
            custom={delayTime}
            initial="hidden"
            animate="visible">
            <Link to={`/${path}/${title.split(' ').join('').toLowerCase()}`}>{title}</Link>
        </motion.div>
    )
}

export default SectionCard
