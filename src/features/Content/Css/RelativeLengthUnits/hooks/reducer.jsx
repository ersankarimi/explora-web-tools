/**
 * @constant
 * @type {Object} ACTIONS - represents the actions of the component.
 */
const ACTIONS = {
  UPDATE_FONT_SIZE_ROOT_VALUE: 'update_font_size_root',
  UPDATE_VALUE_UNITS: 'update_value_units',
  UPDATE_INPUT_VALUE: 'update_input_value',
  UPDATE_MULTIPLIER_VALUE: 'update_multiplier'
}

/**
 * @constant
 * @type {Object} initialState - represents the initial state of the component.
 */
const initialState = {
  multiplier: 1,
  valueUnits: { inputUnit: 'rem', outputUnit: 'px' },
  fontSizeRoot: 16,
  inputValue: 1
}

/**
 * * Returns new states.
 * @param {Object} state - represents the current state of the component.
 * @param {Object} action - represents the action to be dispatched.
 * @returns
 */
const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case ACTIONS.UPDATE_INPUT_VALUE:
      return {
        ...state,
        inputValue: payload
      }

    case ACTIONS.UPDATE_FONT_SIZE_ROOT_VALUE:
      return {
        ...state,
        fontSizeRoot: payload
      }

    case ACTIONS.UPDATE_VALUE_UNITS:
      return {
        ...state,
        valueUnits: payload
      }
    case ACTIONS.UPDATE_MULTIPLIER_VALUE:
      return {
        ...state,
        multiplier: payload
      }
  }
}

export { reducer, initialState, ACTIONS }
