import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { handleInitialData } from '../actions/shared'
import './../App.css'
import Login from './Login'
import Home from './Home'
import NotFound from './NotFound'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'

class App extends Component {
  state = {
    authedUser: null
  }
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
  render () {
    const { authedUser } = this.props
    const route =["/", '/add', '/leaderboard']
    return (
      <React.Fragment>
        <div className='App container'>
          { !authedUser && <Login /> }
          </div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/add'>
            <NewQuestion />
          </Route>
          <Route exact path='/leaderboard'>
            <Leaderboard />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
