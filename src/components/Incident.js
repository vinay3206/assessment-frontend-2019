import React, { Component } from 'react'
import { Card, Button, Icon, Label } from 'semantic-ui-react'
import styled from 'styled-components'
import COLORS from '../colors'

const StyledIcon = styled(Icon)`
  float: right;
`
const StyledContent = styled(Card.Content)`
  line-height: 2.1em;
`

export class Incident extends Component {
  render() {
    const { title, assignee, description, status } = this.props
    return (
      <Card color={COLORS[status.toUpperCase()]}>
        <StyledContent>
          <StyledIcon size="big" name="idea" />
          <Card.Header>{title}</Card.Header>
          <Card.Meta>
            <Label color={COLORS[status.toUpperCase()]}>{status}</Label>
          </Card.Meta>
          <Card.Description>
            <div>
              Assign To:{' '}
              <Label color="blue">
                <Icon name="user" /> {assignee}
              </Label>
            </div>
            {description}
          </Card.Description>
        </StyledContent>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Resolve
            </Button>
            <Button basic color="red">
              Close
            </Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}
