const defaultState = {
  activeUserId: null,
  activeJournalId: null,
  journals: null,
  postcards: null
}

function reducer(state=defaultState, action) {
  switch (action.type) {
    case 'SET_ACTIVE_USER':
      return {...state, activeUserId: action.payload}
    default:
      return state
  }
}

export default reducer
