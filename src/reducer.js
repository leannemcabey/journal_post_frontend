const defaultState = {
  activeUserId: null,
  firstName: null,
  lastName: null,
  address: null,
  city: null,
  state: null,
  zipcode: null,
  activeJournalId: null,
  activePostcardId: null,
  journals: null,
  postcards: null,
  creatingPostcard: null,
  journalIndex: false
}



function reducer(state=defaultState, action) {
  switch (action.type) {
    case 'LOGOUT':
      return defaultState
    case 'JOURNAL_INDEX':
      return {...state,
        journalIndex: !state.journalIndex,
        activePostcardId: null
      }
    case 'SET_ACTIVE_USER_DATA':
      return {...state,
        activeUserId: action.payload.id,
        firstName: action.payload.first_name,
        lastName: action.payload.last_name,
        address: action.payload.street_address,
        city: action.payload.city,
        state: action.payload.state,
        zipcode: action.payload.zipcode,
        activeJournalId: action.payload.current_journal_id,
        journals: action.payload.journals,
        postcards: action.payload.postcards
      }
    case 'CREATE_NEW_JOURNAL':
      return {...state,
        activeJournalId: action.payload.id,
        journals: [...state.journals, action.payload]
      }
    case 'CREATE_NEW_POSTCARD':
      return {...state,
        postcards: [...state.postcards, action.payload],
        activePostcardId: action.payload.id
      }
    case 'SET_ACTIVE_POSTCARD_ID':
      return {...state,
        activePostcardId: action.payload,
        journalIndex: false
      }
    case 'RESET_ACTIVE_POSTCARD_ID':
      return {...state,
        activePostcardId: null
      }
    case 'CHANGE_CREATING_POSTCARD':
      return {...state,
        creatingPostcard: !state.creatingPostcard
      }
    default:
      return state
  }
}

export default reducer
