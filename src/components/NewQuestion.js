import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './Login'

class NewQuestion extends Component {
  render () {
    const { authedUser } = this.props
    return (
      <div className='con'>
            { authedUser &&
             <div>
                    NewQuestion
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
export default connect(mapStateToProps)(NewQuestion)
