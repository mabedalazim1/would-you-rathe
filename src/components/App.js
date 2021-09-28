import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import './../App.css'
import Login from './Login'
import Home from './Home'
import NotFound from './NotFound'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import NavItem from './NavItem'

class App extends Component {
  state = {
    authedUser: null
  }
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
  render () {
    const { isLogged, authedUser } = this.props
 
    return (
      <React.Fragment>
        <Router>
        <div className='App container'>
               <NavItem />
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
                <Route component={ NotFound } />
              </Switch>
             
            
          </div>
        </Router>
        </React.Fragment>
     
    )
  }
}

const mapStateToProps = ({ isLogged, authedUser }) => {
  return {
    isLogged,
    authedUser,
  }
}

export default connect(mapStateToProps)(App)
