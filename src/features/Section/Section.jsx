import React, { useEffect } from 'react'
import { useDataContent } from '../../hooks'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SectionCard } from './components/SectionCard'
import './Section.style.css'
import { UnderConstructions } from './../ui'

/**
 * * Returns a Section component.
 * @returns {JSX.Element} Section - JSX element of the Section component.
 */
const Section = () => {
    /**
     * @constant
     * @type {object} dataContent - the dataContent object
     */
    const dataContent = useDataContent()

    /**
     * @constant
     * @type {object} sectionPath - the current section path
     */
    const { pathname } = useLocation()

    /**
     * @constant
     * @type {array} filteredData - the filtered data based on the section path,
     * and the dataContent object in the context provider
     */
    const filteredData = dataContent.filter((el) => el.path === pathname.split('/')[1])
    console.log(filteredData)

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

    /**
     * * useEffect hook to change the title.
     */
    useEffect(() => {
        document.title = `${title} | Explora Web Tools`
    })

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
                                <SectionCard
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

export default Section
