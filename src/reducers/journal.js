import {
  SET_ACTIVE_JOURNAL_ID,
  RESET_ACTIVE_JOURNAL_ID,
  CREATE_NEW_JOURNAL,
  SET_EDIT_JOURNAL_ID,
  RESET_EDIT_JOURNAL_ID,
  UPDATE_JOURNALS,
  CLEAR_STORE
} from '../constants/ActionTypes'

const initialState = {
  journals: [],
  activeJournalId: null,
  editJournalId: null
}

export default (state = initialState, action) => {
  switch(action.type) {

    case UPDATE_JOURNALS:
      return {...state,
        journals: action.payload
      }

    case SET_ACTIVE_JOURNAL_ID:
      return {...state,
        activeJournalId: action.payload
      }

    case RESET_ACTIVE_JOURNAL_ID:
      return {...state,
        activeJournalId: null
      }

    case CREATE_NEW_JOURNAL:
      return {...state,
        journals: [...state.journals, action.payload]
      }

    case SET_EDIT_JOURNAL_ID:
      return {...state,
        editJournalId: action.payload
      }

    case RESET_EDIT_JOURNAL_ID:
      return {...state,
        editJournalId: null
      }

    case CLEAR_STORE:
      return initialState

    default:
      return state
  }
}
