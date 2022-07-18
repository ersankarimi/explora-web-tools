import React from 'react'
import { motion } from 'framer-motion'
import { insetVariants } from './insetAnimation'

/**
 * * Component to display the inset option.
 * @param {String} name - represents the name of the option shadow.
 * @param {Booelan} optionValue - represents the value of the option shadow.
 * @param {Number} id - represents the id of the item shadow.
 * @param {Function} handleChangeValue - represents the function to update the option value.
 * @returns  {JSX.Element} Inset - JSX Element of the inset component.
 */
const Inset = ({ name, optionValue, id, handleChangeValue }) => {
  return (
    <>
      <div className="my-2 flex w-full items-center justify-start">
        <label
          htmlFor={`${name}${id}`}
          className="flex w-full items-center justify-start font-inter text-xs font-normal italic text-white-65">
          {name}
          <div className="relative mx-4 flex items-center justify-center">
            <input
              checked={optionValue}
              onChange={(e) => handleChangeValue(e.target.checked, id, name)}
              type="checkbox"
              name={`${name}${id}`}
              id={`${name}${id}`}
              className=" h-4 w-4 appearance-none rounded-sm border-2 bg-transparent p-2 checked:bg-white-80"
            />
            <motion.svg
              width="8"
              height="8"
              viewBox="0 0 5 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              variants={insetVariants}
              initial="hidden"
              animate={optionValue ? 'visible' : 'hidden'}
              className="absolute">
              <path
                d="M1.53082 3.56823L0.532314 2.56972C0.478553 2.51583 0.405563 2.48555 0.329447 2.48555C0.253331 2.48555 0.180342 2.51583 0.12658 2.56972C0.0143557 2.68194 0.0143557 2.86323 0.12658 2.97545L1.3294 4.17827C1.44162 4.29049 1.62291 4.29049 1.73513 4.17827L4.77958 1.13382C4.8918 1.02159 4.8918 0.840309 4.77958 0.728085C4.72581 0.674202 4.65282 0.643921 4.57671 0.643921C4.50059 0.643921 4.4276 0.674202 4.37384 0.728085L1.53082 3.56823Z"
                fill="black"
              />
            </motion.svg>
          </div>
        </label>
      </div>
    </>
  )
}

export default Inset
