import React from 'react'

const Slider = ({ name, optionValue, id, handleChangeValue }) => {
  return (
    <>
      <div className="my-2 flex w-full justify-between">
        <label
          htmlFor={`${name.replace('O', '-o')}${id}`}
          className="font-inter text-sm font-normal italic text-white-65">
          {name.replace('O', '-o')}
        </label>
        <h3 className="font-inter text-sm font-normal text-white-65">{optionValue}px</h3>
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
