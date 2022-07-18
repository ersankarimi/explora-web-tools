import React from 'react'
import { DropdownBoxShadow } from './components'

/**
 * * Returns the options for the dropdown box shadow component.
 * @param {Array} shadowOptionItems - represents the array object of every shadow option item.
 * @param {Function} handleUpdateOptionValue - represents the function to update the option value.
 * @param {Function} handleDeleteShadow - represents the function to delete a shadow.
 * @param {Function} handleAddShadow - represents the function to add a shadow.
 * @returns {JSX.Element} DropdownBoxShadow - JSX Element of the options component.
 */
const Options = ({
  shadowOptionItems,
  handleChangeOptionValue,
  handleDeleteShadow,
  handleAddShadow
}) => {
  return (
    <div className="min-w-xs flex min-h-[186px] w-full max-w-xs flex-col items-center justify-center overflow-hidden rounded-lg  bg-table-color-1 pb-7 text-center shadow-item-shadow md:max-w-sm xl:max-w-md">
      <div className="flex w-full items-center justify-center bg-main-card-dark-2 py-3 font-poppins text-sm font-semibold text-white-80 shadow-table-header-shadow xl:text-base">
        Options
      </div>

      <div
        id="option"
        className="my-4 flex w-full flex-col items-center justify-center px-4 font-normal">
        <DropdownBoxShadow
          {...{ shadowOptionItems, handleChangeOptionValue, handleDeleteShadow }}
        />
      </div>

      <div className="w-full px-4">
        <button
          onClick={handleAddShadow}
          type="button"
          className="w-full rounded-md bg-button-dark-light px-4 py-[6px] font-poppins text-sm font-bold text-white-80 shadow-table-header-shadow hover:text-white-100 xl:w-[80%]">
          Add Shadow
        </button>
      </div>
    </div>
  )
}

export default Options
