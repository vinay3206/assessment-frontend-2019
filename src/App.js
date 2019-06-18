import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { Grid } from 'semantic-ui-react'
import CreateIncident from './pages/CreateIncident/component'
import Home from './pages/Home'
import Header from './components/Header'
import './App.css'

const StyledGrid = styled(Grid)`
  margin-left: 0 !important;
  margin-right: 0 !important;
  height: 90%;
  overflow: auto;
`

function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <StyledGrid>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={CreateIncident} />
          </Switch>
        </StyledGrid>
      </Fragment>
    </Router>
  )
}

export default App
