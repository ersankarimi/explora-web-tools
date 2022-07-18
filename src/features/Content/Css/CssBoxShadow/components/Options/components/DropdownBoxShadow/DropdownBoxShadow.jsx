import React from 'react'
import { motion } from 'framer-motion'
import { ArrowSvg, DropdownItem } from './components'
import { ulVariants, liVariants } from './dropdownBoxShadowAnimation'

/**
 * * Returns the options for the dropdown button box shadow component.
 * @param {Array} shadowOptionItems - represents the array object of every shadow option item.
 * @param {Function} handleChangeOptionValue - represents the function to update the option value.
 * @param {Function} handleDeleteShadow - represents the function to delete a shadow.
 * @returns {JSX.Element} DropdownBoxShadow - JSX Element of the button dropdown component
 */
const DropdownBoxShadow = ({ shadowOptionItems, handleChangeOptionValue, handleDeleteShadow }) => {
  /**
   * * Returns the options for the dropdown button box shadow component.
   * @param {Boolean} condition - represents the condition to check.
   * @param {Number} id - represents the id of the shadow.
   * @param {Object} e - represents the event object.
   * @returns if parent.id === "dropdown-button" || parentTwo.id === "dropdown-button" then return the handleChangeOptionValue function else return null.
   */
  const handleClickDropdown = (condition, id, e) => {
    const parent = e.target.parentElement
    const parentTwo = e.target.parentElement.parentElement
    if (parent.id === 'dropdown-button' || parentTwo.id === 'dropdown-button') {
      return handleChangeOptionValue(condition, id, null)
    }
    return null
  }

  return (
    <ul className="w-full">
      {shadowOptionItems.map(({ id, isOpen, dataShadowValues }, index) => {
        return (
          <li key={id} className="my-2 flex w-full  items-center justify-center">
            <motion.button
              type="button"
              id="dropdown-button"
              className="flex w-full flex-col items-center justify-between rounded-md bg-table-color-2 py-[0.5rem] px-8 text-center font-inter text-[12px] text-white-65 shadow-item-shadow xl:w-[80%]"
              onClick={(e) => handleClickDropdown(!isOpen, id, e)}
              layout>
              <div className="flex w-full items-center justify-between">
                <span className="flex h-full w-1/2 items-center font-inter text-sm font-normal text-white-80">
                  {shadowOptionItems.length > 1 && (
                    <motion.svg
                      className="mr-2 h-4 w-5 fill-white-65 hover:fill-white-80"
                      viewBox="0 0 20 22"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => handleDeleteShadow(id)}>
                      <path d="M1 4C0.447715 4 0 4.44772 0 5C0 5.55228 0.447715 6 1 6V4ZM19 6C19.5523 6 20 5.55228 20 5C20 4.44772 19.5523 4 19 4V6ZM17 5H18C18 4.44772 17.5523 4 17 4V5ZM3 19H2H3ZM5 5C5 5.55228 5.44772 6 6 6C6.55228 6 7 5.55228 7 5H5ZM8 1V0V1ZM12 1V0V1ZM13 5C13 5.55228 13.4477 6 14 6C14.5523 6 15 5.55228 15 5H13ZM9 10C9 9.44771 8.55228 9 8 9C7.44772 9 7 9.44771 7 10H9ZM7 16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16H7ZM13 10C13 9.44771 12.5523 9 12 9C11.4477 9 11 9.44771 11 10H13ZM11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16H11ZM1 6H3V4H1V6ZM3 6H19V4H3V6ZM16 5V19H18V5H16ZM16 19C16 19.2652 15.8946 19.5196 15.7071 19.7071L17.1213 21.1213C17.6839 20.5587 18 19.7957 18 19H16ZM15.7071 19.7071C15.5196 19.8946 15.2652 20 15 20V22C15.7957 22 16.5587 21.6839 17.1213 21.1213L15.7071 19.7071ZM15 20H5V22H15V20ZM5 20C4.73478 20 4.48043 19.8946 4.29289 19.7071L2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22V20ZM4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19H2C2 19.7957 2.31607 20.5587 2.87868 21.1213L4.29289 19.7071ZM4 19V5H2V19H4ZM3 6H17V4H3V6ZM7 5V3H5V5H7ZM7 3C7 2.73478 7.10536 2.48043 7.29289 2.29289L5.87868 0.87868C5.31607 1.44129 5 2.20435 5 3H7ZM7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2V0C7.20435 0 6.44129 0.31607 5.87868 0.87868L7.29289 2.29289ZM8 2H12V0H8V2ZM12 2C12.2652 2 12.5196 2.10536 12.7071 2.29289L14.1213 0.87868C13.5587 0.31607 12.7956 0 12 0V2ZM12.7071 2.29289C12.8946 2.48043 13 2.73478 13 3H15C15 2.20435 14.6839 1.44129 14.1213 0.87868L12.7071 2.29289ZM13 3V5H15V3H13ZM7 10V16H9V10H7ZM11 10V16H13V10H11Z" />
                    </motion.svg>
                  )}
                  Shadow {index + 1}
                </span>
                <ArrowSvg isOpen={isOpen} />
              </div>

              {
                <motion.ul
                  className={`bg mt-4 w-full`}
                  variants={ulVariants}
                  initial="hidden"
                  animate={isOpen ? 'visible' : 'hidden'}>
                  {Object.entries(dataShadowValues).map((item, index) => {
                    return (
                      <motion.li className="mt-2" key={index} variants={liVariants}>
                        <DropdownItem {...{ item, handleChangeOptionValue, id }} />
                      </motion.li>
                    )
                  })}
                </motion.ul>
              }
            </motion.button>
          </li>
        )
      })}
    </ul>
  )
}

export default DropdownBoxShadow