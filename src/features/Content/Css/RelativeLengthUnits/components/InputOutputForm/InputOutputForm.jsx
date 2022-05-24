import React, { useEffect, useState } from 'react'
import arrowChanges from './arrowChanges.svg'

/**
 * * Returns a component that allows the user to input and output values in different units.
 * @param {String} inputUnit - The input unit of the component.
 * @param {String} outputUnit - The output unit of the component.
 * @param {Integer} fontSizeRoot - The output unit of the component.
 * @param {Function} handleInputOrFontSizeValue - Function that handles the input or font size value.
 * @param {Function} handleSwitchValueUnits - Function that handles the switch value units.
 * @returns {JSX.Element} - A component that allows the user to input and output values in different units
 */
const InputOutputForm = ({
    fontSizeRoot,
    inputValue,
    valueUnits: { inputUnit, outputUnit },
    handleInputOrFontSizeValue,
    handleSwitchValueUnits
}) => {
    /**
     * * Initialize output state of component.
     * @type {Number} outputValue - represents the output value of the component.
     * @type {Function} setOutputValue - sets the output value of the component.
     */
    const [outputValue, setOutputValue] = useState('')

    /**
     * * This function handle changes of the input value and font size root of the component.
     * @param {Object} e - The event that triggered the function.
     */
    const handleChangesInputOrFontSizeValue = (e) => {
        let { id, value } = e.target
        value = [...value].filter((char) => /^[0-9.]$/.test(char)).join('')
        handleInputOrFontSizeValue(value, id)
    }

    /**
     * * This function to handle switch the value units
     * * This function will be called when the user clicks on the arrow changes.
     * * When this function called, the value units will be switched with call the handleSwitchValueUnits property.
     */
    const handleChangesSwitchUnits = () => {
        handleSwitchValueUnits(inputUnit, outputUnit)
    }

    /**
     * * This hook is used to update the output value of the component.
     * * Called when the input value, font size root, input unit and output unit changes.
     */
    useEffect(() => {
        const handler = setTimeout(() => {
            setOutputValue(() => {
                return /[rem | em]/gi.test(inputUnit.toLowerCase()) &&
                    outputUnit.toLowerCase() === 'px'
                    ? Number(Number(inputValue * fontSizeRoot).toFixed(3))
                    : Number(Number(inputValue / fontSizeRoot).toFixed(3))
            })
        }, 150)
        return () => clearTimeout(handler)
    }, [inputValue, fontSizeRoot, inputUnit, outputUnit])

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col lg:flex-row">
                <form className="mb-8 mt-4 flex flex-col lg:m-12">
                    <input
                        type="text"
                        className=" max-w-[150px] appearance-none border-0 border-b-2 border-white-100 bg-transparent p-2 text-center font-poppins text-[2.5rem] font-bold text-white-100 placeholder:text-xs placeholder:font-thin placeholder:text-white-65 focus:outline-none"
                        value={inputValue}
                        id="input"
                        onChange={handleChangesInputOrFontSizeValue}
                        placeholder="Enter a value"
                    />
                    <label
                        htmlFor="input"
                        className="m-2 text-center font-inter text-[2rem] text-white-80">
                        {inputUnit}
                    </label>
                </form>

                <img
                    src={arrowChanges}
                    className="m-auto w-[48px] cursor-pointer"
                    alt="Arrow Changes Image"
                    onClick={handleChangesSwitchUnits}
                />

                <div className="mt-8 mb-4 flex flex-col lg:m-12">
                    <input
                        type="text"
                        className="max-w-[150px] border-b-2 border-white-80 bg-transparent pb-2 text-center font-poppins text-[2.5rem] font-bold text-white-80"
                        value={outputValue}
                        disabled={true}
                        id="output"
                    />
                    <label
                        htmlFor="input"
                        className="text32xl m-2 text-center font-inter text-[2rem] text-white-65">
                        {outputUnit}
                    </label>
                </div>
            </div>
            <p className=" text-sm text-white-80 sm:text-base">
                Calculation based font size root{' '}
                <input
                    type="text"
                    value={fontSizeRoot}
                    onChange={handleChangesInputOrFontSizeValue}
                    className="m-1 max-w-[40px] border-[1px] bg-transparent text-center"
                    id="font-size-root"
                />{' '}
                pixel
            </p>
        </div>
    )
}

export default InputOutputForm
