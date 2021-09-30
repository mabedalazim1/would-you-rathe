import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import './../App.css'
import EditQuestion from './EditQuestion'
import Home from './Home'
import NotFound from './NotFound'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import NavItem from './NavItem'

class App extends Component {
  state = {
    authedUser: null
  }
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <React.Fragment>
        <Router>
          <div className='App'>
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
              <Route
               exact path="/questions/:question_id">
              <EditQuestion /> 
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