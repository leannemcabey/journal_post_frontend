import {
  SET_ACTIVE_JOURNAL_ID,
  RESET_ACTIVE_JOURNAL_ID,
  CREATE_NEW_JOURNAL,
  SET_EDIT_JOURNAL_ID,
  RESET_EDIT_JOURNAL_ID,
  UPDATE_JOURNAL
} from '../constants/ActionTypes'

const initialState = {
  activeJournalId: null,
  editJournalId: null
}

export default (state = initialState, action) => {
  switch(action.type) {

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

    case UPDATE_JOURNAL:
      return {...state,
        journals: action.payload
      }

    default:
      return state
  }
}
