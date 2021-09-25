import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './Login'

class Leaderboard extends Component{

    render() {
        const { authedUser } = this.props
        return (
            <div className='con'>
             { authedUser &&
                <div>
                    Leaderboard
                </div>
            }
      </div>
    )
  }
}
const mapStateToProps = ({ authedUser }) => {
    return {
      authedUser
    }
  }
  export default connect(mapStateToProps)(Leaderboard)
