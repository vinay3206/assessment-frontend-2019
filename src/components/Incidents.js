import React, { Component, Fragment } from 'react'
import { Incident } from './Incident'

export class Incidents extends Component {
  render() {
    const { incidents } = this.props
    return (
      <Fragment>
        {incidents.map(incident => (
          <Incident {...incident} key={incident.id} />
        ))}
      </Fragment>
    )
  }
}

export default Incidents
