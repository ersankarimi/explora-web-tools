import React from 'react'
import { useDataContent } from '@hooks'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SectionCard } from './components/SectionCard'
import { UnderConstructions } from '@features/ui'
import { parentVariants } from './sectionAnimation'

/**
 * * Returns a Section component.
 * @returns {JSX.Element} Section - JSX element of the Section component.
 */
const Section = () => {
  /**
   * @constant
   * @type {Object} dataContent - the dataContent object
   */
  const dataContent = useDataContent()

  /**
   * @constant
   * @type {Object} sectionPath - the current section path
   */
  const { pathname } = useLocation()

  /**
   * @constant
   * @type {Array} filteredData - the filtered data based on the section path,
   * and the dataContent object in the context provider
   */
  const filteredData = dataContent.filter((el) => el.path === pathname.split('/')[1])

  /**
   * @constant
   * @type {String} title - the title of the current section
   * @type {Array} items - the items of the current section
   */
  const { title, items } = filteredData[0]

  return (
    <motion.div
      className="flex h-full flex-col p-4"
      variants={parentVariants}
      initial="hidden"
      animate="visible">
      {!items.length ? (
        <UnderConstructions />
      ) : (
        <>
          <h1 className="mt-4 mb-8 text-center font-poppins text-4xl font-extrabold tracking-wide text-white-100 md:mb-12 md:text-left lg:mb-16 lg:text-5xl">
            {title}
          </h1>
          <div className="flex h-full flex-col md:flex-row md:items-start md:justify-start">
            {filteredData.map((data, index) =>
              items.map((item, i) => (
                <SectionCard key={i + index} {...data} title={item} delayTime={i + index} />
              ))
            )}
          </div>
        </>
      )}
    </motion.div>
  )
}

export default Section
