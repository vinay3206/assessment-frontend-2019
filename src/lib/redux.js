import React from 'react'
import createStore from './create-store'
import combineReducers from './combile-reducer'

const Context = React.createContext('redux')

const Provider = ({ store, children }) => (
  <Context.Provider value={store}>{children}</Context.Provider>
)

const connect = (mapStateToProps, mapDispatchToProps) => Component => {
  class Connect extends React.Component {
    constructor(props) {
      super(props)

      this.state = props.store.getState()
    }

    componentDidMount() {
      this.props.store.subscribe(state => {
        this.setState(state)
      })
    }

    render() {
      const { store } = this.props
      let stateMapper = () => {}
      let dispatchMapper = () => {}
      stateMapper = mapStateToProps || stateMapper
      dispatchMapper = mapDispatchToProps || dispatchMapper

      return (
        <Component
          {...this.props}
          {...stateMapper(store.getState())}
          {...dispatchMapper(store.dispatch)}
        />
      )
    }
  }

  return props => (
    <Context.Consumer>
      {store => <Connect {...props} store={store} />}
    </Context.Consumer>
  )
}

export { createStore, combineReducers, Provider, connect }
