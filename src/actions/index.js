import * as types from '../constants/ActionTypes'

export const setActiveUserData = (user) => {
  return {
    type: types.SET_ACTIVE_USER_DATA,
    payload: user
  }
}

export const setActivePostcardId = (postcardId) => {
  return {
    type: types.SET_ACTIVE_POSTCARD_ID,
    payload: postcardId
  }
}

export const resetActivePostcardId = () => {
  return {
    type: types.RESET_ACTIVE_POSTCARD_ID
  }
}

export const setShowProfile = () => {
  return {
    type: types.SET_SHOW_PROFILE
  }
}

export const resetShowProfile = () => {
  return {
    type: types.RESET_SHOW_PROFILE
  }
}

export const toggleCreatingPostcard = () => {
  return {
    type: types.TOGGLE_CREATING_POSTCARD
  }
}

export const resetCreatingPostcard = () => {
  return {
    type: types.RESET_CREATING_POSTCARD
  }
}

export const setActiveJournalId = (journalId) => {
  return {
    type: types.SET_ACTIVE_JOURNAL_ID,
    payload: journalId
  }
}

export const resetActiveJournalId = () => {
  return {
    type: types.RESET_ACTIVE_JOURNAL_ID
  }
}

export const createNewJournal = (journal) => {
  return {
    type: types.CREATE_NEW_JOURNAL,
    payload: journal
  }
}

export const createNewPostcard = (postcard) => {
  return {
    type: types.CREATE_NEW_POSTCARD,
    payload: postcard
  }
}

export const setEditJournalId = (journalId) => {
  return {
    type: types.SET_EDIT_JOURNAL_ID,
    payload: journalId
  }
}

export const resetEditJournalId = () => {
  return {
    type: types.RESET_EDIT_JOURNAL_ID
  }
}

export const updateJournals = (journals) => {
  return {
    type: types.UPDATE_JOURNALS,
    payload: journals
  }
}

export const updatePostcards = (postcards) => {
  return {
    type: types.UPDATE_POSTCARDS,
    payload: postcards
  }
}

export const setEditUser = () => {
  return {
    type: types.SET_EDIT_USER
  }
}

export const resetEditUser = () => {
  return {
    type: types.RESET_EDIT_USER
  }
}

export const logout = () => {
  return {
    type: types.LOGOUT
  }
}

export const clearStore = () => {
  return {
    type: types.CLEAR_STORE
  }
}
