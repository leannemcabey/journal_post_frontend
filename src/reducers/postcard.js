import {
  SET_ACTIVE_POSTCARD_ID,
  RESET_ACTIVE_POSTCARD_ID,
  TOGGLE_CREATING_POSTCARD,
  RESET_CREATING_POSTCARD,
  CREATE_NEW_POSTCARD
} from '../constants/ActionTypes'

const initialState = {
  activePostcardId: null,
  creatingPostcard: null
}

export default (state = initialState, action) => {
  switch(action.type) {

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

    default:
      return state
  }
}
