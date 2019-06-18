import React, { Component, Fragment } from 'react'
import { Form } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

const options = [
  { key: 'Pending', text: 'Pending', value: 'Pending' },
  { key: 'Resolved', text: 'Resolved', value: 'Resolved' },
  { key: 'New', text: 'New', value: 'New' },
  { key: 'Closed', text: 'Closed', value: 'Closed' },
]

class IncidentForm extends Component {
  state = { title: '', assignee: '', status: '', description: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  onSubmitHandler = () => {
    const { onSubmit } = this.props
    const { title, assignee, status, description } = this.state
    onSubmit({ title, assignee, status, description })
  }

  renderRedirect = () => {
    if (this.props.redirect) {
      return <Redirect to="/" />
    }
  }

  render() {
    return (
      <Fragment>
        <Form onSubmit={this.onSubmitHandler}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Title"
              placeholder="Title"
              name="title"
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              label="Assignee"
              placeholder="Assignee"
              name="assignee"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Select
            fluid
            label="Status"
            options={options}
            placeholder="Status"
            name="status"
            onChange={this.handleChange}
          />
          <Form.TextArea
            label="Description"
            name="description"
            placeholder="Tell us more...."
            onChange={this.handleChange}
          />
          <Form.Button color="blue" loading={this.props.inProgress}>
            Submit
          </Form.Button>
        </Form>
        {this.renderRedirect()}
      </Fragment>
    )
  }
}

export default IncidentForm
