import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChromePicker } from 'react-color'
import { colorPickerVariants } from './colorPickerAnimation'

/**
 * * Component to display the color picker.
 * @param {String} name - represents the name of the option shadow.
 * @param {String} optionValue - represents the value of the color option shadow.
 * @param {Number} id - represents the id of the item shadow.
 * @param {Function} handleChangeValue - represents the function to update the option value.
 * @returns {JSX.Element} ColorPicker - JSX Element of the color picker component.
 */
const ColorPicker = ({ name, optionValue, id, handleChangeValue }) => {
  /**
   * * Make the state for the color picker.
   * @type {Boolean} colorIsOpen - represents the state of the color picker is open or not.
   * @type {Function} setColorIsOpen - represents the function to update the state of the color picker is open or not.
   * @default false
   */
  const [colorIsOpen, setColorIsOpen] = useState(false)

  /**
   * * Function to update the state of the color picker is open or not.
   */
  const handleColorIsOpen = () => {
    setColorIsOpen(!colorIsOpen)
  }

  return (
    <>
      <motion.div className=" relative my-2 flex w-full flex-col items-start justify-start">
        <label
          htmlFor={`${name}${id}`}
          className="font-inter text-xs font-normal italic text-white-65">
          {name}
        </label>
        <div className="mt-1 flex w-full">
          <input
            type="text"
            id={`${name}${id}`}
            value={optionValue}
            onChange={(e) => handleChangeValue(e.target.value, id, name)}
            className="appearance-none rounded-md border-2 border-white-80 bg-table-color-2 px-2 py-1 text-white-80 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white-80"
          />
          <div
            className="mx-2 w-8 cursor-pointer rounded-md border-2 border-slate-400"
            style={{
              backgroundColor: optionValue
            }}
            onClick={handleColorIsOpen}></div>
        </div>
        <motion.div
          className="w-full"
          variants={colorPickerVariants}
          initial="hidden"
          animate={colorIsOpen ? 'visible' : 'hidden'}>
          <ChromePicker
            color={optionValue}
            onChange={(color, event) => {
              const { r, g, b, a } = color.rgb
              return handleChangeValue(
                color.rgb.a === 1 ? color.hex : `rgba(${r}, ${g}, ${b}, ${a})`,
                id,
                name
              )
            }}
          />
        </motion.div>
      </motion.div>
    </>
  )
}

export default ColorPicker
