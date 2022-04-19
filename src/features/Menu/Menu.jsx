import React from 'react'
import { useDataContent } from '@hooks'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MenuCard } from './components/MenuCard'
import './Menu.style.css'
import { UnderConstructions } from '@features/ui'

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

    /**
     * @constant
     * @type {string} title - the title of the current section
     * @type {items} items - the items of the current section
     */
    const { title, items } = filteredData[0]

    return (
        <motion.div className="menu" variants={parentVariants} initial="hidden" animate="visible">
            {!items.length ? (
                <UnderConstructions />
            ) : (
                <>
                    <h1 className="menu__header">{title}</h1>
                    <div className="menu__card">
                        {filteredData.map((data, index) =>
                            items.map((item, i) => (
                                <MenuCard
                                    key={i + index}
                                    {...data}
                                    title={item}
                                    delayTime={i + index}
                                />
                            ))
                        )}
                    </div>
                </>
            )}
        </motion.div>
    )
}

export default Menu
