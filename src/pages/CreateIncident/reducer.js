import { ADD_INCIDENT, ADD_INCIDENT_SUCCESS } from './constants'

const initialState = {
  list: [
    {
      id: 1,
      assignee: 'Vinay',
      status: 'closed',
      description: 'blah blah blah',
      title: 'Test title1',
    },
    {
      id: 2,
      assignee: 'Slate',
      status: 'pending',
      description: 'blah blah blah',
      title: 'Test title2',
    },
    {
      id: 1,
      assignee: 'User1',
      status: 'new',
      description: 'blah blah blah',
      title: 'Test title3',
    },
    {
      id: 1,
      assignee: 'User2',
      status: 'resolved',
      description: 'blah blah blah',
      title: 'Test title4',
    },
  ],
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
