import {
  SET_ACTIVE_USER_DATA,
  SET_SHOW_PROFILE,
  RESET_SHOW_PROFILE,
  SET_EDIT_USER,
  RESET_EDIT_USER,
  LOGOUT,
  CLEAR_STORE
} from '../constants/ActionTypes'

const initialState = {
  activeUserId: null,
  firstName: null,
  lastName: null,
  address: null,
  city: null,
  state: null,
  zipcode: null,
  email: null,
  username: null,
  password: null,
  journals: null,
  postcards: null,
  showProfile: false,
  editUser: false
}

export default (state = initialState, action) => {
  switch(action.type) {

    case SET_ACTIVE_USER_DATA:
      return {...state,
        activeUserId: action.payload.id,
        firstName: action.payload.first_name,
        lastName: action.payload.last_name,
        address: action.payload.street_address,
        city: action.payload.city,
        state: action.payload.state,
        zipcode: action.payload.zipcode,
        email: action.payload.email,
        username: action.payload.username,
        password: action.payload.password,
        journals: action.payload.journals,
        postcards: action.payload.postcards
      }

    case SET_SHOW_PROFILE:
      return {...state,
        showProfile: true
      }

    case RESET_SHOW_PROFILE:
      return {...state,
        showProfile: false
      }

    case SET_EDIT_USER:
      return {...state,
        editUser: true
      }

    case RESET_EDIT_USER:
      return {...state,
        editUser: false
      }

    case LOGOUT:
      return {...state,
        activeUserId: null
      }

    case CLEAR_STORE:
      return initialState

    default:
      return state
  }
}
