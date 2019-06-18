import {
  ADD_INCIDENT,
  ADD_INCIDENT_SUCCESS,
  ADD_INCIDENT_FAILURE,
} from './constants'

export function addIncident(incident) {
  return {
    type: ADD_INCIDENT,
    payload: { incident },
  }
}

export function addIncidentSuccess() {
  return {
    type: ADD_INCIDENT_SUCCESS,
  }
}

export function addIncidentFailed(message = 'Failed to add incident') {
  return {
    type: ADD_INCIDENT_FAILURE,
    payload: { message },
  }
}
