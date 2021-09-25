import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './Login'


class NotFound extends Component{

    render() {
        const { authedUser } = this.props
        return (
            <div className='con'>
                { !authedUser ?
                    <Login />
                    :
                    <div>
                    Not Found
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
  export default connect(mapStateToProps)(NotFound)