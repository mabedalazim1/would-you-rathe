import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './Login'

class Leaderboard extends Component{

    render() {
        const { isLogged } = this.props
        return (
            <div className='con'>
              { !isLogged.logged ? <Login />:<h1>Leaderboard</h1> }
            </div>
    )
  }
}
const mapStateToProps = ({ authedUser,isLogged }) => {
    return {
      authedUser,
      isLogged,
    }
  }
  export default connect(mapStateToProps)(Leaderboard)
