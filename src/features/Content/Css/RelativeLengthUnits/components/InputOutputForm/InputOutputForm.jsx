import React, { useEffect, useState } from 'react'
import arrowChanges from './arrowChanges.svg'
import { useSearchParams } from 'react-router-dom'

/**
 * * Returns a component that allows the user to input and output values in different units.
 * @returns {JSX.Element} - A component that allows the user to input and output values in different units
 */
const InputOutputForm = () => {
    /**
     * * Params URL
     * @type {object} searchParams - searchParams contains functions to manipulate or get information from the URL.
     * @type {function} setSearchParams - setSearchParams is a function that allows the user to change the URL.
     */
    const [searchParams, setSearchParams] = useSearchParams()

    /**
     * * The value of the input field.
     * @type {array}
     * @property {string} inputUnits - The value unit of the input field.
     * @property {string} outputUnits - The value unit of the output field.
     */
    const [valueUnitsData, setValueUnitsData] = useState({})

    /**
     * * The value of the input field.
     * @type {string} inputValue - The value of the input field.
     * @type {function} setInputValue - The function that sets the value of the input field.
     */
    const [inputValue, setInputValue] = useState('')

    /**
     * * The value of the input field.
     * @type {string} outputValue - The value of the output field.
     * @type {function} setOutputValue - The function that sets the value of the output field.
     */
    const [outputValue, setOutputValue] = useState('')

    /**
     * * The value of the font size root.
     * @type {string} fontSizeRoot - The value of the font size root.
     * @type {function} setFontSizeRoot - The function that sets the value of the font size root.
     */
    const [fontSizeRoot, setFontSizeRoot] = useState('')

    /**
     * * Function to handle the change of the input field.
     * @type {function} handleChangesValue - Function to handle the change of the input field.
     * @param {string} value - The value of the input field.
     */
    const handleChangesValue = (e) => {
        /**
         * @type {string} id - The id of the input field.
         * @type {string} value - The value of the input field.
         */
        const { id, value } = e.target

        /**
         * * Sets the value of the input field.
         * * If the id is 'inputValue', sets the value of the input field, else sets the fontSizeRoot value.
         * * If the id is 'InputValue', do check if the value is a number and dot.
         */
        id === 'input'
            ? setInputValue([...value].filter((char) => /^[0-9.]$/.test(char)).join(''))
            : setFontSizeRoot(value)
    }

    /**
     * * Function to handle the change of the input, output, and value unit fields.
     * @type {function} handleChangesValueUnits - Function to handle the change of the input, output, and value unit fields.
     */
    const handleChangesUnits = () => {
        /**
         * * Destructuring the valueUnitsData object to get inputUnit and outputUnit value.
         * @type {string} inputUnit - The value unit of the input field.
         * @type {string} outputUnit - The value unit of the output field.
         */
        const { inputUnit, outputUnit } = valueUnitsData

        /**
         * * Sets the inputUnit and outputUnit value.
         */
        setValueUnitsData({
            inputUnit: outputUnit,
            outputUnit: inputUnit
        })

        /**
         * * Sets the inputValue and outputValue value.
         */
        setInputValue(outputValue)
        setOutputValue(inputValue)
    }

    /**
     * * Hooks to get the value of the input, output, and value unit fields when first opening the section.
     * @type {function} useEffect - Hooks to get the value of the input, output, and value unit fields when first opening the section.
     */
    useEffect(() => {
        /**
         * * Get the font size root from the url with key 'font-size-root'.
         */
        const fontSizeRootUrl = searchParams.get('font-size-root')

        /**
         * * Get the input value unit from the url with key 'input-unit'.
         */
        const inputUnit = searchParams.get('input-unit')

        /**
         * * Get the output value unit from the url with key 'output-unit'.
         */
        const outputUnit = searchParams.get('output-unit')

        /**
         *
         * @param {string} value - The unit value
         * @param {*} compareValue  - The unit value to compare
         * @param {*} code - The unit code to set (inputUnit or outputUnit)
         * @returns The unit value to set for the input or output unit.
         */
        const checkInputOutputUnits = (value, compareValue, code) => {
            if (code === 'inputUnit') {
                if (
                    (/[rem | em ]/gi.test(value) && /[rem | em ]/gi.test(compareValue)) ||
                    compareValue === value
                ) {
                    return 'rem'
                }
                return value && /[rem | em | px]/gi.test(value) ? value : 'rem'
            } else {
                if (
                    (/[rem | em ]/gi.test(compareValue) && /[rem | em ]/gi.test(value)) ||
                    value === compareValue
                )
                    return 'px'
                return value && /[rem | em | px]/gi.test(value) ? value : 'px'
            }
        }

        // * Sets the inputValue value (default 16px).
        setFontSizeRoot(fontSizeRootUrl ?? 16)

        // * Sets the inputUnit value.
        setValueUnitsData({
            inputUnit: checkInputOutputUnits(inputUnit, outputUnit, 'inputUnit'),
            outputUnit: checkInputOutputUnits(outputUnit, inputUnit, 'outputUnit')
        })

        // * Sets the inputValue value. If inputUnit is px set the inputValue 16px, else set the inputValue 1.
        setInputValue(inputUnit === 'px' ? 16 : 1)

        // * Sets the output value.
        setOutputValue((value) => {
            return value
                ? /[rem | em]/gi.test(inputUnit) && outputUnit === 'px'
                    ? inputValue * fontSizeRoot
                    : inputValue / fontSizeRoot
                : 16
        })
    }, [])

    // changes the url when the input value of state is changed
    useEffect(() => {
        const { inputUnit, outputUnit } = valueUnitsData
        setSearchParams({
            'input-unit': inputUnit,
            'output-unit': outputUnit,
            'font-size-root': fontSizeRoot
        })
    }, [valueUnitsData, fontSizeRoot])

    useEffect(() => {
        const handler = setTimeout(() => {
            const { inputUnit, outputUnit } = valueUnitsData

            setOutputValue(() => {
                return /[rem | em]/gi.test(inputUnit) && outputUnit === 'px'
                    ? inputValue * fontSizeRoot
                    : inputValue / fontSizeRoot
            })
        }, 350)
        return () => clearTimeout(handler)
    }, [inputValue, fontSizeRoot, valueUnitsData])

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col lg:flex-row">
                <form className="mb-8 mt-4 flex flex-col lg:m-12">
                    <input
                        type="text"
                        className=" max-w-[150px] appearance-none border-0 border-b-2 border-white-100 bg-transparent p-2 text-center font-poppins text-[2.5rem] font-bold text-white-100 placeholder:text-xs placeholder:font-thin placeholder:text-white-65 focus:outline-none"
                        value={inputValue}
                        id="input"
                        onChange={handleChangesValue}
                        placeholder="Enter a value"
                    />
                    <label
                        htmlFor="input"
                        className="m-2 text-center font-inter text-[2rem] text-white-80">
                        {valueUnitsData.inputUnit}
                    </label>
                </form>

                <img
                    src={arrowChanges}
                    className="m-auto w-[48px] cursor-pointer"
                    alt="Arrow Changes Image"
                    onClick={handleChangesUnits}
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
                        {valueUnitsData.outputUnit}
                    </label>
                </div>
            </div>
            <p className=" text-sm text-white-80 sm:text-base">
                Calculation based root font size{' '}
                <input
                    type="text"
                    value={fontSizeRoot}
                    onChange={handleChangesValue}
                    className="m-1 max-w-[40px] border-[1px] bg-transparent text-center"
                    id="font-size-root"
                />{' '}
                pixel
            </p>
        </div>
    )
}

export default InputOutputForm
