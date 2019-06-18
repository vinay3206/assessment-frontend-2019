import React, { Component } from 'react'
import { Grid, Card } from 'semantic-ui-react'
import { Incidents } from '../components/Incidents'
import { connect } from '../lib/redux'

class Home extends Component {
  render() {
    const { incidents } = this.props
    return (
      <Grid.Column>
        <Card.Group>
          <Incidents incidents={incidents} />
        </Card.Group>
      </Grid.Column>
    )
  }
}

const mapStateToProps = ({ incident }) => {
  return {
    incidents: incident.list,
  }
}

export default connect(
  mapStateToProps,
  null
)(Home)
