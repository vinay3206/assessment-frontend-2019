import { ADD_INCIDENT, ADD_INCIDENT_SUCCESS } from './constants'

const initialState = {
  list: [],
  inProgress: false,
}

function incidentReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_INCIDENT:
      return {
        ...state,
        inProgress: true,
        list: [...state.list, { ...payload.incident, id: new Date() }],
      }
    case ADD_INCIDENT_SUCCESS:
      return {
        ...state,
        inProgress: false,
      }
    default:
      return state
  }
}

export default incidentReducer
