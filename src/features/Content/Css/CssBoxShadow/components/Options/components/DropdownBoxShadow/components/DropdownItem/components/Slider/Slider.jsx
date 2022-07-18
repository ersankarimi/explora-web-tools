import React from 'react'

/**
 * * Return a component which represents the slider.
 * @param {String} name - represents the name of the option shadow.
 * @param {String} optionValue - represents the value of the color option shadow.
 * @param {Number} id - represents the id of the item shadow.
 * @param {Function} handleChangeValue - represents the function to update the option value.
 * @returns {JSX.Element} DropdownItem - JSX Element of the slider component.
 */
const Slider = ({ name, optionValue, id, handleChangeValue }) => {
  return (
    <>
      <div className="my-2 flex w-full justify-between">
        <label
          htmlFor={`${name.replace('O', '-o')}${id}`}
          className="font-inter text-xs font-normal italic text-white-65">
          {name.replace('O', '-o')}
        </label>
        <h3 className="font-inter text-xs font-normal text-white-65">{optionValue}px</h3>
      </div>
      <input
        id={`${name.replace('O', '-o')}${id}`}
        type="range"
        className="slider"
        min={-100}
        step={1}
        max={100}
        value={optionValue}
        onChange={(e) => handleChangeValue(e.target.value, id, name)}
      />
    </>
  )
}

export default Slider
