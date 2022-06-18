import React, { useReducer } from 'react'
import { InputOutputForm, TableConversion } from './components'
import { Dropdown } from '@features/ui'
import { reducer, initialState, ACTIONS } from './hooks'
import { motion } from 'framer-motion'

/**
 * * Returns a component that renders the content of the Relative Length Units content.
 * @returns {JSX.Element} RelativeLengthUnits - JSX Element of the Relative Length Units Content Routes .
 */
const RelativeLengthUnits = () => {
    /**
     * * Initialize state and function to handle the state using useReducer hook
     * @constant
     * @type {Object} state - represents the state of the component.
     * @default initialState
     * @constant
     * @type {Function} dispacth - represents the function to dispatch the action and payload.
     */
    const [state, dispatch] = useReducer(reducer, initialState)

    /**
     * * Handle the change of the multiplier value
     * @param {String} value  - represents the value of the multiplier field.
     */
    const handleChangeMultiplierValue = (value) => {
        dispatch({
            type: ACTIONS.UPDATE_MULTIPLIER_VALUE,
            payload: Number(value.replace('x', ''))
        })
    }

    /**
     * * Handle the change of the data value units value
     * @param {String} value -  represents the value of the data value units field.
     */
    const handleChangeUnitsDataValue = (value) => {
        const [input, output] = value.split('-')
        dispatch({
            type: ACTIONS.UPDATE_VALUE_UNITS,
            payload: { inputUnit: input, outputUnit: output }
        })
    }

    /**
     *
     * @param {String} value - represents the value of the font size or input value root field.
     * @param {String} id - represents the id of the event target.
     */
    const handleInputOrFontSizeRoot = (value, id) => {
        id === 'input'
            ? dispatch({
                  type: ACTIONS.UPDATE_INPUT_VALUE,
                  payload: value
              })
            : dispatch({
                  type: ACTIONS.UPDATE_FONT_SIZE_ROOT_VALUE,
                  payload: value
              })
    }

    /**
     *
     * @param {String} inputUnit - represents the input unit of the data value units.
     * @param {String} outputUnit - represents the output unit of the data value units.
     */
    const handleSwitchValueUnits = (inputUnit, outputUnit) => {
        dispatch({
            type: ACTIONS.UPDATE_VALUE_UNITS,
            payload: { inputUnit: outputUnit, outputUnit: inputUnit }
        })
    }
    /**
     * * Destructure the state
     * @constant
     * @type {Number} multiplier - represents the multiplier value.
     * @constant
     * @type {Number} fontSizeRoot - represents the font size root value.
     * @constant
     * @type {Number} inputUnit - represents the input unit of the data value units.
     * @constant
     * @type {Number} outputUnit - represents the output unit of the data value units.
     */
    const {
        multiplier,
        fontSizeRoot,
        valueUnits: { inputUnit, outputUnit }
    } = state

    // variants motion
    const parentVariants = {
        hidden: {
            opacity: 0,
            transition: {
                duration: 2,
                delay: 2,
                ease: 'easeInOut'
            }
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: 'easeInOut',
                when: 'beforeChildren'
            }
        }
    }

    return (
        <motion.div variants={parentVariants} initial="hidden" animate="visible">
            <h1 className="mt-4 mb-8 text-center font-poppins text-2xl font-extrabold tracking-wide text-white-100 lg:text-4xl">
                Relative Length Units
            </h1>
            <InputOutputForm
                {...state}
                handleInputOrFontSizeValue={handleInputOrFontSizeRoot}
                handleSwitchValueUnits={handleSwitchValueUnits}
            />
            <div className="mt-8 flex flex-row justify-center">
                <Dropdown
                    onChange={handleChangeUnitsDataValue}
                    defaultValue={`${inputUnit.toUpperCase()}-${outputUnit.toUpperCase()}`}
                    items={['REM-PX', 'PX-REM', 'EM-PX', 'PX-EM']}
                    extraClass={'mx-4'}
                />
                <Dropdown
                    onChange={handleChangeMultiplierValue}
                    defaultValue={'x1'}
                    items={['x0.25', 'x0.5', 'x1']}
                    extraClass={'mx-4'}
                />
            </div>
            <TableConversion {...{ inputUnit, outputUnit, fontSizeRoot, multiplier }} />
        </motion.div>
    )
}

export default RelativeLengthUnits
