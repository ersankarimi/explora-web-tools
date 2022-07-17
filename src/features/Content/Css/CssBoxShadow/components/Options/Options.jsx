import React from 'react'
import { DropdownBoxShadow } from './components'

const Options = ({
  shadowOptionItems,
  handleChangeOptionValue,
  handleDeleteShadow,
  handleAddShadow
}) => {
  return (
    <div className="min-w-xs flex min-h-[186px] w-full max-w-xs flex-col items-center justify-center overflow-hidden rounded-lg  bg-table-color-1 pb-7 text-center shadow-item-shadow xl:max-w-md">
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
          className="w-full rounded-md bg-button-dark-light px-4 py-[6px] font-poppins text-xs font-bold text-white-80 shadow-table-header-shadow hover:text-white-100 xl:w-[80%]">
          Add Shadow
        </button>
      </div>
    </div>
  )
}

export default Options
