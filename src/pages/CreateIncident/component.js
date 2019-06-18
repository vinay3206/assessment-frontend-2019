import React, { Component } from 'react'
import { Grid, Segment, Container, Header, Icon } from 'semantic-ui-react'
import IncidentForm from '../../components/IncidentForm'
import { connect } from '../../lib/redux'
import { addIncident, addIncidentSuccess } from './action'

class CreateIncident extends Component {
  state = { redirect: false }
  submitHandler = incident => {
    const { dispatch, addIncident } = this.props
    dispatch(addIncident(incident))
    setTimeout(() => {
      dispatch(addIncidentSuccess())
      this.setState({
        redirect: true,
      })
    }, 2000)
  }

  render() {
    return (
      <Grid.Column>
        <Container>
          <Header as="h2">
            <Icon name="add" />
            <Header.Content>Add new</Header.Content>
          </Header>
          <Segment>
            <IncidentForm
              onSubmit={this.submitHandler}
              inProgress={this.props.inProgress}
              redirect={this.state.redirect}
            />
          </Segment>
        </Container>
      </Grid.Column>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    addIncident,
  }
}

const mapStateToProps = ({ incident }) => {
  return {
    inProgress: incident.inProgress,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateIncident)
