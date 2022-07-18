import React, { useReducer } from 'react'
import { reducer, initialState, ACTIONS } from './hooks'
import { Options, Preview } from './components'

/**
 * * Returns a component that renders the content of the CSS Box Shadow content.
 * @returns {JSX.Element} CssBoxShadow - JSX Element of the CSS Box Shadow content routes .
 */
const CssBoxShadow = () => {
  /**
   * * Initialize state and function to handle the state using useReducer hook
   * @constant
   * @type {Object} state - represents the state of the component.
   * @default initialState
   * @constant
   * @type {Function} dispacth - represents the function to dispatch the action and payload.
   * @constant
   */
  const [state, dispatch] = useReducer(reducer, initialState)

  /**
   * * Destructure the shadowOptionItems from the state.
   */
  const { shadowOptionItems } = state

  /**
   * * Handle the change of the option values
   * @param {String | Boolean} optionValue - represents the value of the option.
   * @param {Number} itemId - represents the id of the item.
   * @param {String | Null} optionName - represents the name of the option.
   */
  const handleChangeOptionValue = (optionValue, itemId, optionName = null) => {
    dispatch({
      type: ACTIONS.UPDATE_OPTION_VALUE,
      payload: { optionValue, itemId, optionName }
    })
  }

  /**
   * * Delete the shadow option item when the delete button is clicked.
   * @param {Number} itemId - represents the id of the item.
   */
  const handleDeleteShadow = (itemId) => {
    dispatch({
      type: ACTIONS.DELETE_SHADOW,
      payload: itemId
    })
  }

  /**
   * * Add a new shadow option item when the add button is clicked.
   */
  const handleAddShadow = () => {
    dispatch({
      type: ACTIONS.ADD_SHADOW,
      payload: null
    })
  }

  return (
    <>
      <h1 className="mt-4 mb-8 text-center font-poppins text-2xl font-extrabold tracking-wide text-white-100 lg:text-4xl">
        CSS Box Shadow
      </h1>

      <div className="mt-8 flex flex-col items-center justify-center xl:flex-row xl:items-start xl:justify-between">
        <Options
          {...{ shadowOptionItems, handleChangeOptionValue, handleDeleteShadow, handleAddShadow }}
        />

        <div className="mt-4 flex w-full flex-col items-center justify-center xl:ml-4 xl:mt-0">
          <Preview shadowOptionItems={shadowOptionItems} />
        </div>
      </div>
    </>
  )
}

export default CssBoxShadow
