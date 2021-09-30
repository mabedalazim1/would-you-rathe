import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './Login'

class NewQuestion extends Component {
  render() {
    const { isLogged } = this.props
    
    return (
      <div className='con'>
        { !isLogged.logged ? <Login />:<h1>NewQuestion</h1> 
        }
      </div>
    )
  }
}

const mapStateToProps = ({ isLogged }) => {
  return {
    isLogged,
  }
}
export default connect(mapStateToProps)(NewQuestion)
