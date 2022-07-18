import React from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { childVariants } from './sectionCardAnimation'

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
   * @type {Function} navigate - Hook to navigate to the path.
   */
  let navigate = useNavigate()

  /**
   * * Navigate to the path when we click on the card.
   * @param {String} path - The path to navigate to.
   */
  const handleButtonClick = (path) => {
    navigate(path)
  }

  return (
    <motion.button
      type="button"
      className="mt-8 cursor-pointer rounded-md border-2 border-item-stroke bg-gradient-to-tr from-main-card-dark-1 to-main-card-dark-2 px-8 py-4 font-inter font-bold tracking-wide text-white-65 duration-150 hover:scale-[1.015] hover:text-white-100 hover:shadow-item-shadow md:mr-8 md:mt-0"
      variants={childVariants}
      custom={delayTime}
      initial="hidden"
      animate="visible"
      onClick={() => handleButtonClick(`/${path}/${title.split(' ').join('').toLowerCase()}`)}>
      <Link to={`/${path}/${title.split(' ').join('').toLowerCase()}`}>{title}</Link>
    </motion.button>
  )
}

export default SectionCard
