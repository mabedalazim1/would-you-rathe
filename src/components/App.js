import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import { Spinner } from 'react-bootstrap'
import './../App.css'
import Login from './Login'
import Home from './Home'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
  render () {
    const { loadingBar, authedUser } = this.props
    let showLoading = false
    if (loadingBar.default === undefined || loadingBar.default === 1) {
      showLoading = true
    }

    return (
      <div className='App'>
        <LoadingBar />
        {showLoading ? (
          <div>
            <Spinner animation='border' variant='warning' />
            <br />
            <i>Loading ... </i>
          </div>
        ) : (
          !authedUser ? <Login />: 
          <Home />
        )}
      </div>
    )
  }
}

function mapStateToProps ({ loadingBar, authedUser }) {
  return {
    loadingBar,
    authedUser
  }
}

export default connect(mapStateToProps)(App)
