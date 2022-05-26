import React from 'react'

/**
 * * Returns a single row of the table
 * @param {Integer} inputUnit - The input unit of the component.
 * @param {Integer} outputUnit - The output unit of the component.
 * @param {Integer} fontSizeRoot - The output unit of the component.
 * @param {Number} multiplier - Multiplier values ​​in the results in the table.
 * @returns  {JSX.Element} - The conversion table based on input and output units.
 */
const SingleTableConversion = ({ inputUnit, outputUnit, fontSizeRoot, multiplier }) => {
    /**
     * * This function handle changes of the result
     * @param {String} input - The value units of input.
     * @param {String} output - The value units of output.
     * @param {Integer} sizeRoot - Font size root.
     * @param {Number} multi - multiplier values ​​in the results in the table.
     * @returns {String} - The value units of output.
     */
    const handleResult = (input, output, sizeRoot, multi) => {
        return /[rem | em]/gi.test(input) && output === 'px'
            ? String(Number(Number(multi * sizeRoot).toFixed(3)))
            : String(Number(Number(multi / sizeRoot).toFixed(3)))
    }

    /**
     * * This function handle multiplier value
     * @param {Integer} multiplierValue  - Multiplier values ​​in the results in the table.
     * @returns multiplierValue - Multiplier values ​​in the results in the table.
     */
    const setLength = (multiplierValue) => {
        return multiplierValue === 1 ? 100 : multiplierValue === 0.5 ? 200 : 400
    }

    return (
        <>
            {Array.from({ length: setLength(multiplier) }, (v, i) => {
                const multi = (multiplier ?? 1) * (i + 1)
                return (
                    <tr
                        key={i + 1}
                        className={`${
                            /**
                             * * Changes the background color if the row of table is odd.
                             */
                            (i + 1) % 2 === 1 && 'bg-table-color-2'
                        } 
                            text-white-80`}>
                        <td className="p-2">{multi}</td>
                        <td className="p-2">
                            {handleResult(inputUnit, outputUnit, fontSizeRoot, multi)}
                        </td>
                    </tr>
                )
            })}
        </>
    )
}

export default SingleTableConversion
