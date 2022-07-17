import React, { useState, useEffect } from 'react'
import { ColorPicker, Slider, Inset } from './components'

const DropdownItem = ({ item, handleChangeOptionValue, id }) => {
  const [name, value] = item
  const [optionValue, setOptionValue] = useState(name !== 'color' ? Number(value) : value)

  const handleChangeValue = (targetValue, itemId, optionName) => {
    setOptionValue(targetValue)
    return handleChangeOptionValue(targetValue, itemId, optionName)
  }

  const itsSlider = name !== 'color' && name !== 'inset'
  const itsColor = name === 'color'
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
