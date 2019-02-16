import {
  UPDATE_POSTCARDS,
  SET_ACTIVE_POSTCARD_ID,
  RESET_ACTIVE_POSTCARD_ID,
  TOGGLE_CREATING_POSTCARD,
  RESET_CREATING_POSTCARD,
  CREATE_NEW_POSTCARD,
  CLEAR_STORE
} from '../constants/ActionTypes'

const initialState = {
  postcards: [],
  activePostcardId: null,
  creatingPostcard: null
}

export default (state = initialState, action) => {
  switch(action.type) {

    case UPDATE_POSTCARDS:
      return {...state,
        postcards: action.payload
      }

    case SET_ACTIVE_POSTCARD_ID:
      return {...state,
        activePostcardId: action.payload
      }

    case RESET_ACTIVE_POSTCARD_ID:
      return {...state,
        activePostcardId: null
      }

    case TOGGLE_CREATING_POSTCARD:
      return {...state,
        creatingPostcard: !state.creatingPostcard
      }

    case RESET_CREATING_POSTCARD:
      return {...state,
        creatingPostcard: false
      }

    case CREATE_NEW_POSTCARD:
      return {...state,
        postcards: [...state.postcards, action.payload],
        activePostcardId: action.payload.id
      }

    case CLEAR_STORE:
      return initialState

    default:
      return state
  }
}
