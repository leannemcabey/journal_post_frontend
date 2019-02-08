const defaultState = {
  activeUserId: null,
  firstName: null,
  lastName: null,
  address: null,
  city: null,
  state: null,
  zipcode: null,
  email: null,
  username: null,
  activeJournalId: null,
  activePostcardId: null,
  journals: null,
  postcards: null,
  creatingPostcard: null,
  showProfile: false,
  editJournalId: null
}

function reducer(state=defaultState, action) {
  switch (action.type) {

    case 'SET_ACTIVE_USER_DATA':
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
        activeJournalId: action.payload.current_journal_id,
        journals: action.payload.journals,
        postcards: action.payload.postcards
      }

    case 'SET_ACTIVE_POSTCARD_ID':
      return {...state,
        activePostcardId: action.payload
      }

    case 'RESET_ACTIVE_POSTCARD_ID':
      return {...state,
        activePostcardId: null
      }

    case 'SET_SHOW_PROFILE':
      return {...state,
        showProfile: true
      }

    case 'RESET_SHOW_PROFILE':
      return {...state,
        showProfile: false
      }

    case 'TOGGLE_CREATING_POSTCARD':
      return {...state,
        creatingPostcard: !state.creatingPostcard
      }

    case 'RESET_CREATING_POSTCARD':
      return {...state,
        creatingPostcard: false
      }

    case 'SET_ACTIVE_JOURNAL_ID':
      return {...state,
        activeJournalId: action.payload
      }

    case 'RESET_ACTIVE_JOURNAL_ID':
      return {...state,
        activeJournalId: null
      }

    case 'CREATE_NEW_JOURNAL':
      return {...state,
        journals: [...state.journals, action.payload]
      }

    case 'CREATE_NEW_POSTCARD':
      return {...state,
        postcards: [...state.postcards, action.payload],
        activePostcardId: action.payload.id
      }

    case 'SET_EDIT_JOURNAL_ID':
      return {...state,
        editJournalId: action.payload
      }

    case 'UPDATE_JOURNAL':
      return {...state,
        journals: action.payload
      }

    case 'LOGOUT':
      return {...state,
        activeUserId: null
      }

    case 'CLEAR_STORE':
      return defaultState

    default:
      return state
  }
}

export default reducer
