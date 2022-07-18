/**
 * @constant
 * @type {Object} initailState - represents the initial state of the component.
 * @type {Array} shadowOptionItems - represents the array object of every shadow option item.
 */

const initialState = {
  shadowOptionItems: [
    {
      isOpen: false,
      id: new Date().getMilliseconds(),
      dataShadowValues: {
        hOffset: 10,
        vOffset: 10,
        blur: 10,
        spread: 10,
        color: 'rgba(0, 0, 0, 0.6)',
        inset: true
      }
    }
  ]
}

/**
 * @constant
 * @type {Object} ACTIONS - represents the actions of the component.
 * @type {String} UPDATE_OPTION_VALUE - represents the action to update the option value.
 * @type {String} DELETE_SHADOW - represents the action to delete a shadow.
 * @type {String} ADD_SHADOW - represents the action to add a shadow.
 */
const ACTIONS = {
  UPDATE_OPTION_VALUE: 'update_option_value',
  DELETE_SHADOW: 'delete_shadow',
  ADD_SHADOW: 'add_shadow'
}

/**
 *
 * @param {Object} state - represents the current state of the component.
 * @param {Object} action - represents the action to be dispatched.
 * @returns
 */
const reducer = (state, action) => {
  const { type, payload } = action
  const { UPDATE_OPTION_VALUE, DELETE_SHADOW, ADD_SHADOW } = ACTIONS
  switch (type) {
    case UPDATE_OPTION_VALUE:
      return {
        ...state,
        shadowOptionItems: state.shadowOptionItems.map((item) => {
          if (payload.optionName === null) {
            item.id === payload.itemId ? (item.isOpen = payload.optionValue) : item
            return item
          } else {
            item.id === payload.itemId
              ? (item.dataShadowValues[payload.optionName] = payload.optionValue)
              : item
            return item
          }
        })
      }

    case DELETE_SHADOW:
      return {
        ...state,
        shadowOptionItems: state.shadowOptionItems.filter((item) => item.id !== payload)
      }

    case ADD_SHADOW:
      return {
        ...state,
        shadowOptionItems: [
          ...state.shadowOptionItems,
          {
            isOpen: false,
            id: new Date().getMilliseconds(),
            dataShadowValues: {
              hOffset: 10,
              vOffset: 10,
              blur: 10,
              spread: 10,
              color: 'rgba(0, 0, 0, 0.6)',
              inset: false
            }
          }
        ]
      }

    default:
      break
  }
}

export { reducer, ACTIONS, initialState }
