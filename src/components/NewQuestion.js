import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './Login'

class NewQuestion extends Component {
  render() {
    const { isLogged, authedUser } = this.props
    authedUser && console.log('New',Object.values(authedUser))
    return (
      <div className='con'>
        { !isLogged.logged ? <h3>Not Logged NewQuestion <Login /></h3>:<h1>NewQuestion</h1> 
        }
        { isLogged.logged && authedUser && <h3> Logged is : {Object.values(authedUser)}</h3> }
        
         
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser, isLogged }) => {
  return {
    authedUser,
    isLogged,
  }
}
export default connect(mapStateToProps)(NewQuestion)
