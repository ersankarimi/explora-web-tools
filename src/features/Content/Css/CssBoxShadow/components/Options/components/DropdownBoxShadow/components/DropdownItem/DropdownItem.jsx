import React, { useState, useEffect } from 'react'
import { ColorPicker, Slider, Inset } from './components'

/**
 * * Return a component which represents the dropdown item.
 * @param {Array} item - represents the array object of every shadow option item.
 * @param {Function} handleChangeOptionValue - represents the function to update the option value.
 * @param {Number} id - represents the id of item shadow.
 * @returns {JSX.Element} DropdownBoxShadow - JSX Element of the options component.
 */
const DropdownItem = ({ item, handleChangeOptionValue, id }) => {
  /**
   * * Dectructure the item prop.
   * @type {String} name - represents the name of the shadow.
   * @type {String} value - represents the value of the shadow.
   */
  const [name, value] = item

  /**
   * * Make the state for the option value of the shadow.
   * @type {Number | String} optionValue - represents the option value of the shadow.
   * @type {Function} setOptionValue - represents the function to update the option value.
   */
  const [optionValue, setOptionValue] = useState(name !== 'color' ? Number(value) : value)

  /**
   * * Function to update the option value of the shadow.
   * @param {Boolean | String} targetValue - represents the value of the option.
   * @param {Number} itemId - represents the id of the item.
   * @param {String | Null} optionName - represents the name of the option.
   * @returns {Function} handleChangeOptionValue - represents the function to update the option value.
   */
  const handleChangeValue = (targetValue, itemId, optionName) => {
    setOptionValue(targetValue)
    return handleChangeOptionValue(targetValue, itemId, optionName)
  }

  /**
   * * itsSlider contains result name of the slider.
   * * Contains true if the name is not "color" or "inset".
   */
  const itsSlider = name !== 'color' && name !== 'inset'

  /**
   * * itsColor contains result name of the slider.
   * * Contains true if the name is "color".
   */
  const itsColor = name === 'color'

  /**
   * * props variabel is contains the props of the component.
   * @type {Object} props - represents the props which send to the Slider. ColorPicker, or Inset component.
   */
  const props = {
    name,
    optionValue,
    id,
    handleChangeValue
  }

  return (
    <div className="flex w-full cursor-default flex-col items-center justify-center bg-table-color-2 py-2 text-white-80">
      {itsSlider && <Slider {...props} />}

      {itsColor && <ColorPicker {...props} />}

      {!itsSlider && !itsColor && <Inset {...props} />}
    </div>
  )
}

export default DropdownItem
