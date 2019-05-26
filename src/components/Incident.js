import React, { Component } from 'react'

export class Incident extends Component {
  render () {
    return (
      <div style={{border: '1px solid black'}}>
        <p>{ this.props.title }</p>
        <p>Assignee: { this.props.assignee }</p>
        <p>Status: { this.props.status }</p>
      </div>
    )
  }
}