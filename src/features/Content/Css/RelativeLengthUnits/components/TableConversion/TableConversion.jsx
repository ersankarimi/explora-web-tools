import React, { useState, useEffect } from 'react'
import SingleTableConversion from './SingleTableConversion'

const TableConversion = ({ inputUnit, outputUnit, fontSizeRoot, multiplier }) => {
    /**
     * * Represent the state of component
     * @type {Object} data - represents the data of the component.
     * @type {Function} setData - represents the function to set the data of the component.
     */
    const [data, setData] = useState({})

    /**
     * * This function is used to check the value unit. If the value unit is 'px' then changes the value to 'PIXEL'
     * * If not return that value unit (toUpperCase)
     * @param {String} value - represents the value of the font size or input value root field.
     * @returns {String}
     */
    const checkValueUnits = (value) => {
        return /[px]/gi.test(value) ? 'PIXEL' : value ? value.toUpperCase() : value
    }

    /**
     * * This hook used to set inital data when first open the component
     */
    useEffect(() => {
        setData({
            inputUnit: inputUnit ? inputUnit.toLowerCase() : inputUnit,
            outputUnit: outputUnit ? outputUnit.toLowerCase() : outputUnit,
            fontSizeRoot,
            multiplier: multiplier ?? 1
        })
    }, [])

    /**
     * * This hook used to reset the data when inputUnit, outputUnit, fontSizeRoot and multiplier changes
     */
    useEffect(() => {
        /**
         * * The handler here is a kind of debounce.
         * * When the inputUnit, outputUnit, fontSizeRoot and multiplier changes, the data will be reset every 500ms.
         */
        const handler = setTimeout(() => {
            setData({
                inputUnit: inputUnit ? inputUnit.toLowerCase() : inputUnit,
                outputUnit: outputUnit ? outputUnit.toLowerCase() : outputUnit,
                fontSizeRoot,
                multiplier: multiplier ?? 1
            })
        }, 500)
        return () => clearTimeout(handler)
    }, [inputUnit, outputUnit, fontSizeRoot, multiplier])

    return (
        <div className="mt-8 mb-16 flex flex-col items-center justify-center p-4">
            <h1 className="flex items-center justify-center font-poppins text-base font-semibold tracking-wider text-white-100">
                {inputUnit}
                <svg
                    width={30}
                    height={10}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-3">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 5a1 1 0 011-1h12a1 1 0 110 2H9a1 1 0 01-1-1zM24.293 9.695a1 1 0 010-1.414l3.293-3.293-3.293-3.293A1 1 0 0125.707.28l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0zM5.707.293a1 1 0 010 1.414L2.414 5l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        fill="#fff"
                    />
                </svg>
                {outputUnit}
            </h1>
            <h1 className="flex items-center justify-center font-poppins text-base font-semibold tracking-wider text-white-100">
                Conversion Table
            </h1>

            <div className="mt-4 max-h-80 w-[90%] overflow-auto rounded-[8px]  sm:w-[50%] lg:w-[30%]">
                <table className="m-auto min-w-[100%] rounded-[8px] bg-table-color-1 text-center">
                    <thead className="sticky top-0 bg-table-color-1 text-white-100 shadow-table-header-shadow">
                        <tr>
                            <th className=" p-2 font-inter font-semibold tracking-wider">
                                {checkValueUnits(inputUnit)}
                            </th>
                            <th className=" p-2 font-inter font-semibold tracking-wider">
                                {checkValueUnits(outputUnit)}
                            </th>
                        </tr>
                    </thead>
                    <tbody className="">
                        <SingleTableConversion {...data} />
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableConversion
