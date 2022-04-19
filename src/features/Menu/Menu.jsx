import React from 'react'
import { useDataContent } from '@hooks'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MenuCard } from './components/MenuCard'
import './Menu.style.css'

/**
 * * Returns a Menu component.
 * @returns {JSX.Element} Menu - JSX element of the Menu component.
 */
const Menu = () => {
    /**
     * @constant
     * @type {object} dataContent - the dataContent object
     */
    const dataContent = useDataContent()

    /**
     * @constant
     * @type {object} sectionPath - the current section path
     */
    const { sectionPath } = useParams()

    /**
     * @constant
     * @type {array} filteredData - the filtered data based on the section path,
     * and the dataContent object in the context provider
     */
    const filteredData = dataContent.filter((el) => el.path === sectionPath.replace('/', ''))

    /**
     * @constant
     * @type {string} title - the title of the current section
     */
    const { title } = filteredData[0]

    /**
     * @type {object} parentVariants - object of the parent variants motion.
     */
    const parentVariants = {
        hidden: {
            opacity: 0,
            transition: {
                duration: 2,
                delay: 2,
                ease: 'easeInOut'
            }
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.15,
                ease: 'easeInOut',
                when: 'beforeChildren'
            }
        }
    }

    return (
        <motion.div className="menu" variants={parentVariants} initial="hidden" animate="visible">
            <h1 className="menu__header">{title}</h1>
            <div className="menu__card">
                {filteredData.map((el, i) =>
                    el.items.map((item, j) => {
                        return <MenuCard key={i + j} {...el} title={item} i={i + j} />
                    })
                )}
            </div>
        </motion.div>
    )
}

export default Menu
