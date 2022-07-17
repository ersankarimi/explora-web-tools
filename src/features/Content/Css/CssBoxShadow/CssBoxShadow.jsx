import React, { useReducer } from 'react'
import { reducer, initialState, ACTIONS } from './hooks'
import { Options } from './components'

const CssBoxShadow = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { shadowOptionItems } = state
  console.log('STATEEEEEEE', state)

  const handleChangeOptionValue = (optionValue, itemId, optionName = null) => {
    dispatch({
      type: ACTIONS.UPDATE_OPTION_VALUE,
      payload: { optionValue, itemId, optionName }
    })
  }

  const handleDeleteShadow = (itemId) => {
    dispatch({
      type: ACTIONS.DELETE_SHADOW,
      payload: itemId
    })
  }
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

      <div className="m-auto mt-12 flex w-full justify-center">
        <Options
          {...{ shadowOptionItems, handleChangeOptionValue, handleDeleteShadow, handleAddShadow }}
        />
      </div>
    </>
  )
}

export default CssBoxShadow
